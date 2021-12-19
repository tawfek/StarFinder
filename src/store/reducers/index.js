import {
  SET_PERSON,
  SET_LOADING_PROGRESS,
  ADD_CELEBRITIES,
  UPDATE_IS_LOADING,
  SET_IMAGE_URL,
  SET_SHOW_DRAWER,
  SET_IS_PERSON_DATA_LOADING,
  SHOW_PERSON_DRAWER,
  SET_PERSON_FULL_INFORMATION
} from "../constants/action-types";

const initialState = {
  personInformationData: null,
  personFullInformation:null ,
  isPersonDataLoading:false ,
  celebrities: null,
  isUploading: false,
  imageUrl: null,
  loadingProgress: null,
  showDrawer: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PERSON:
      return Object.assign({}, state, {
        ...state,
        personInformationData: action.payload,
      });
      break;
    case ADD_CELEBRITIES:
      return Object.assign({}, state, {
        ...state,
        celebrities: action.payload,
      });
      break;
    case SET_IMAGE_URL:
      return Object.assign({}, state, {
           ...state,
            imageUrl: action.payload });
      break;
    case SET_LOADING_PROGRESS:
      return Object.assign({}, state, {
        ...state,
        loadingProgress: action.payload,
      });
      break;
    case UPDATE_IS_LOADING:
      return Object.assign({}, state, {
        ...state,
        isUploading: action.payload,
      });
      break;
    case SET_SHOW_DRAWER:
      return Object.assign({}, state, {
           ...state,
            showDrawer: action.payload });
      break;
    case SET_IS_PERSON_DATA_LOADING:
      return Object.assign({}, state, {
        ...state,
        isPersonDataLoading: action.payload,
      });
      break;
      case SHOW_PERSON_DRAWER:
        return Object.assign({}, state, {
          ...state,
          showPersonDrawer: action.payload,
        });
        break;
        case SET_PERSON_FULL_INFORMATION:
          return Object.assign({}, state, {
            ...state,
            personFullInformation: action.payload,
          });
          break; 
    default:
      return state;
      break;
  }
  return state;
}

export default rootReducer;
