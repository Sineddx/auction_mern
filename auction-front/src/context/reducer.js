import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  SETUP_USER_BEGIN,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
  LOGOUT_USER,
  ADD_IMAGE_BEGIN,
  ADD_IMAGE_SUCCESS,
  ADD_IMAGE_ERROR,
  CHANGE_BIG_PHOTO,
  DELETE_IMAGE_SUCCESS,
  DELETE_IMAGE_BEGIN,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Proszę uzupełnić wszystkie pola",
    };
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }
  if (action.type === SETUP_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }
  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...state,
      user: null,
    };
  }
  if (action.type === ADD_IMAGE_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === ADD_IMAGE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      urls: [...state.urls, ...action.payload.urls],
      currentUrl: action.payload.urls[0].url,
    };
  }
  if (action.type === CHANGE_BIG_PHOTO) {
    return {
      ...state,
      currentUrl: action.payload.src,
    };
  }
  if (action.type === DELETE_IMAGE_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === DELETE_IMAGE_SUCCESS) {
    let urls = state.urls.filter((url) => url.id !== action.payload.id);

    return urls.length > 0
      ? {
          ...state,
          urls: urls,
          isLoading: false,
          currentUrl: urls[0].url,
        }
      : {
          ...state,
          urls: urls,
          isLoading: false,
        };
  }
  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
