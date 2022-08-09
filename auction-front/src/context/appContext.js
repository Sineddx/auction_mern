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
  CHANGE_BIG_PHOTO,
  DELETE_IMAGE_BEGIN,
  DELETE_IMAGE_SUCCESS,
  ADD_PRODUCT_BEGIN,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_BEGIN,
} from "./actions";

const user = localStorage.getItem("user");

const initialState = {
  user: user ? JSON.parse(user) : null,
  isLoading: false,
  showAlert: false,
  displayAlert: false,
  alertText: "",
  alertType: "",
  currentUrl: "",
  urls: [],
  products: [],
  page: 1,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = (info) => {
    let details = "Proszę uzupełnić pola";
    if (info) {
      details = info;
    }
    dispatch({ type: DISPLAY_ALERT, payload: { details } });
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
    dispatch({ type: ADD_IMAGE_BEGIN });
    const imageFile = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < imageFile.length; i++) {
      formData.append("images", imageFile[i]);
    }
    console.log(formData);
    try {
      const {
        data: { urls },
      } = await axios.post("/api/v1/products/uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch({ type: ADD_IMAGE_SUCCESS, payload: { urls } });
      return urls;
    } catch (e) {
      console.log(e);
      return;
    }
  };
  const deleteImageFromCloud = async (id) => {
    dispatch({ type: DELETE_IMAGE_BEGIN });
    const obj = {};
    obj.id = id;
    try {
      await axios.post("/api/v1/products/uploads/destroy", obj);
      dispatch({ type: DELETE_IMAGE_SUCCESS, payload: { id } });
    } catch (error) {
      console.log("smth went wrong");
    }
  };
  const changeBigPhoto = (e) => {
    const src = e.target.src;
    console.log(src);
    dispatch({ type: CHANGE_BIG_PHOTO, payload: { src } });
  };
  const addProduct = async (data) => {
    dispatch({ type: ADD_PRODUCT_BEGIN });
    const obj = { image: [...state.urls], ...data };

    try {
      await axios.post("/api/v1/products/", obj);
      dispatch({ type: ADD_PRODUCT_SUCCESS });
      showToast("Pomyślnie dodano produkt!");
      return { added: true, msg: "Wszystko ok" };
    } catch (error) {
      console.log(error);
      dispatch({ type: ADD_PRODUCT_ERROR });

      return { added: false, msg: error.response.data.msg };
    }
  };
  const getProducts = async () => {
    dispatch({ type: GET_ITEMS_BEGIN });
    try {
      const { data } = await axios.get("/api/v1/products");
      const { products } = data;
      dispatch({ type: GET_ITEMS_SUCCESS, payload: { products } });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AppContext.Provider
      value={{
        ...state,
        setupUser,
        displayAlert,
        logout,
        addImage,
        deleteImageFromCloud,
        changeBigPhoto,
        addProduct,
        showToast,
        getProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
