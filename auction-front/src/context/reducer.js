import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  SETUP_USER_ERROR,
  SETUP_USER_SUCCESS,
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
} from "./actions";

const reducer = (state, action) => {
  if (action.type === TURN_LOADING_ON) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === TURN_LOADING_OFF) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === GET_SINGLE_OFFER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
    };
  }
  if (action.type === CLEAR_VALUES) {
    return {
      ...state,
      searchCategory: "Wszystkie",
      searchStates: "Wszystkie",
      searchAuctionType: "Wszystkie",
      sort: "latest",
    };
  }
  if (action.type === CHANGE_PAGE) {
    return {
      ...state,
      page: action.payload.page,
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      page: 1,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.details,
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

  if (action.type === ADD_OFFER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      urls: [],
      currentUrl: "",
    };
  }
  if (action.type === ADD_OFFER_ERROR) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === GET_OFFERS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      offers: [...action.payload.products],
      totalOffers: action.payload.totalProducts,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === PREPARE_FILTER) {
    return {
      ...state,
      searchCategory: action.payload.params.searchCategory || "Wszystkie",
      searchStates: action.payload.params.searchStates || "Wszystkie",
      searchAuctionType: action.payload.params.searchAuctionType || "Wszystkie",
      sort: action.payload.params.sort || "latest",
      search: action.payload.params.search || state.search,
      page: action.payload.params.page || state.page,
    };
  }
  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
