import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import axios from "axios";
import { io } from "socket.io-client";
// import socketIOClient from "socket.io-client";
import { toast } from "react-toastify";

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  LOGOUT_USER,
  ADD_IMAGE_SUCCESS,
  CHANGE_BIG_PHOTO,
  DELETE_IMAGE_SUCCESS,
  ADD_OFFER_SUCCESS,
  ADD_OFFER_ERROR,
  GET_OFFERS_SUCCESS,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CHANGE_PAGE,
  PREPARE_FILTER,
  GET_SINGLE_OFFER_SUCCESS,
  TURN_LOADING_ON,
  TURN_LOADING_OFF,
  GET_USER_ORDERS,
  ADD_USER_ADDRESS_SUCCESS,
  ADD_USER_ADDRESS_BEGIN,
  CREATE_ORDER,
  UPDATE_ORDER,
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
  offers: [],
  page: 1,
  refresh: false,
  totalOffers: 0,
  numOfPages: 0,
  search: "",
  searchCategory: "Wszystkie",
  searchStates: "Wszystkie",
  searchAuctionType: "Wszystkie",
  sort: "latest",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const socket = io.connect("http://localhost:5000", {
    transports: ["websocket"],
  });
  // const socket = socketIOClient("http://localhost:5000");

  const handleChange = ({ name, value }) => {
    dispatch({
      type: HANDLE_CHANGE,
      payload: { name, value },
    });
  };
  const clearFilter = () => {
    dispatch({
      type: CLEAR_VALUES,
    });
  };
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
    dispatch({ type: TURN_LOADING_ON });
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
      // await socket.emit("new-user-add", user.id);
      // await socket.emit("new-user-add", user.id);
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
      // socket.emit("disconnect");
    } catch (error) {
      console.log(error);
    }
    dispatch({ type: LOGOUT_USER });
    localStorage.removeItem("user");
    socket.disconnect();
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
    dispatch({ type: TURN_LOADING_ON });
    const imageFile = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < imageFile.length; i++) {
      formData.append("images", imageFile[i]);
    }
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
      return;
    }
  };
  const deleteImageFromCloud = async (id) => {
    dispatch({ type: TURN_LOADING_ON });
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
  const addOffer = async (data) => {
    dispatch({ type: TURN_LOADING_ON });
    const obj = { image: [...state.urls], ...data };

    try {
      const { data } = await axios.post("/api/v1/products/", obj);
      const { product } = data;
      dispatch({ type: ADD_OFFER_SUCCESS });
      showToast("Pomyślnie dodano produkt!");
      return {
        added: true,
        msg: "Wszystko ok",
        name: product.name,
        code: product._id,
      };
    } catch (error) {
      console.log(error);
      dispatch({ type: ADD_OFFER_ERROR });
      return { added: false, msg: error.response.data.msg };
    }
  };
  const getOffers = async (params) => {
    const queryObject = {
      page: params.page || 1,
      searchCategory: params.searchCategory || "Wszystkie",
      searchStates: params.searchStates || "Wszystkie",
      searchAuctionType: params.searchAuctionType || "Wszystkie",
      sort: params.sort || "latest",
      search: params.search || state.search,
    };
    let url = `/api/v1/products?page=${queryObject.page}&category=${queryObject.searchCategory}&state=${queryObject.searchStates}&auctionType=${queryObject.searchAuctionType}&sort=${queryObject.sort}`;
    if (queryObject.search) {
      url = url + `&search=${queryObject.search}`;
    }

    dispatch({ type: TURN_LOADING_ON });
    try {
      const { data } = await axios.get(url);
      const { products, totalProducts, numOfPages } = data;
      dispatch({
        type: GET_OFFERS_SUCCESS,
        payload: { products, totalProducts, numOfPages },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getSingleOffer = async (id) => {
    dispatch({ type: TURN_LOADING_ON });
    try {
      const { data } = await axios.get(`/api/v1/products/${id}`);
      const { offer } = await data;
      let fixHeight;
      let finalLink;
      const fixedImages = [];
      offer.price = offer.price.toFixed(2);
      offer.image.map((img) => {
        fixHeight = img.url.split("upload/");
        fixHeight[0] = fixHeight[0] + "upload/w_1000,h_600,c_pad/";
        finalLink = fixHeight.join("");
        return fixedImages.push({ original: finalLink, thumbnail: finalLink });
      });
      offer.image = await fixedImages;
      dispatch({
        type: GET_SINGLE_OFFER_SUCCESS,
      });
      return offer;
    } catch (error) {
      console.log(error);
    }
  };
  const changePage = (page) => {
    console.log(page);
    dispatch({ type: CHANGE_PAGE, payload: { page } });
  };
  const prepareFilter = (params) => {
    dispatch({ type: PREPARE_FILTER, payload: { params } });
  };
  const userChats = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/chat/${id}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  const getUser = async () => {
    const { user } = state;
    try {
      const { data } = await axios.get(`/api/v1/user/${user.id}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  const getOtherUser = async (id) => {
    if (!id) {
      return;
    }
    try {
      const { data } = await axios.get(`/api/v1/user/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const getMessages = async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/message/${id}`);
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  const sendMessage = async (message) => {
    try {
      const { data } = await axios.post("/api/v1/message/", message);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const createChat = async (obj) => {
    try {
      const { data } = await axios.post("/api/v1/chat", obj);
      return data;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
  const editUserAddress = async (address) => {
    try {
      const { data } = await axios.patch("/api/v1/user/address", address);
      showToast("Dane zaktualizowane!");
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  const saveUserAddress = async (address) => {
    try {
      const { data } = await axios.post("/api/v1/user/address", address);
      return data;
    } catch (error) {}
  };
  const createOrder = async (
    item,
    deliveryOptions,
    paymentInfo,
    amount,
    address
  ) => {
    const deliveryType = deliveryOptions.id;
    const parcelLockerNumber = deliveryOptions.parcelLockerNumber;
    const packedData = {
      item,
      parcelLockerNumber,
      paymentInfo,
      amount,
      address,
      deliveryType,
    };
    try {
      const { data } = await axios.post("/api/v1/order", packedData);
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  const updateOrder = async (id) => {
    try {
      setLoadingON();
      dispatch({ type: TURN_LOADING_ON });
      const { data } = await axios.patch("/api/v1/order/update", { id });
      if (data.status === "PAYMENT ACCEPTED") {
        return `ZAMÓWIENIE O NUMERZE ${id} ZOSTAŁO ZAAKCEPTOWANE DO REALIZACJI`;
      }
    } catch (e) {
      console.log(e);
    }
  };
  const fetchOrders = async () => {
    try {
      setLoadingON();
      const { data } = await axios.get("/api/v1/order/showAllMyOrders");
      setLoadingOFF();
      return data;
    } catch (error) {}
  };
  const setLoadingON = () => {
    dispatch({ type: TURN_LOADING_ON });
  };
  const setLoadingOFF = () => {
    dispatch({ type: TURN_LOADING_OFF });
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
        addOffer,
        showToast,
        getOffers,
        handleChange,
        clearFilter,
        changePage,
        prepareFilter,
        getSingleOffer,
        userChats,
        getUser,
        getOtherUser,
        getMessages,
        sendMessage,
        socket,
        createChat,
        saveUserAddress,
        editUserAddress,
        createOrder,
        updateOrder,
        setLoadingOFF,
        setLoadingON,
        fetchOrders,
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
