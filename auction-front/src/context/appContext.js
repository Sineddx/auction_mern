import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import { toast } from "react-toastify";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
  ADD_IMAGE_BEGIN,
  ADD_IMAGE_SUCCESS,
  ADD_IMAGE_ERROR,
} from "./actions";

const user = localStorage.getItem("user");

const initialState = {
  user: user ? JSON.parse(user) : null,
  isLoading: false,
  showAlert: false,
  displayAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };
  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
  const setupUser = async ({
    currentUser,
    endPoint,
    alertText,
    alertText2,
  }) => {
    dispatch({ type: SETUP_USER_BEGIN });
    try {
      const { data } = await axios.post(
        `/api/v1/auth/${endPoint}`,
        currentUser
      );
      const { user } = data;
      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, alertText },
      });
      localStorage.setItem("user", JSON.stringify(user));
      showToast("Pomyślnie zalogowano!");
    } catch (e) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: alertText2 || e.response.data.msg },
      });
      showToast(alertText2, "warning");
    }
    clearAlert();
  };

  const logout = async () => {
    try {
      await axios.delete("/api/v1/auth/logout");
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: LOGOUT_USER });
    localStorage.removeItem("user");
    showToast("Pomyślnie wylogowano!");
  };
  const showToast = (string, type) => {
    if (type === "warning") {
      toast.warn(string);
      return;
    }
    toast.success(string);
    return;
  };
  const addImage = async (e) => {
    const imageFile = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < imageFile.length; i++) {
      formData.append("images", imageFile[i]);
    }
    console.log(formData);
    let imageValue;

    try {
      const {
        data: { urls },
      } = await axios.post("/api/v1/products/uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return urls;
    } catch (e) {
      imageValue = null;
      console.log(e);
    }
  };
  return (
    <AppContext.Provider
      value={{ ...state, setupUser, displayAlert, logout, addImage }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
