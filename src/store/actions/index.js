import {
  SET_DARK_THEME,
  SET_IS_PERSON_DATA_LOADING,
  SET_PERSON_FULL_INFORMATION,
  SHOW_PERSON_DRAWER,
  SET_PERSON,
  ADD_CELEBRITIES,
  SET_SHOW_DRAWER,
  UPDATE_IS_LOADING,
  SET_IMAGE_URL,
  SET_LOADING_PROGRESS,
} from "../constants/action-types";

export function setPersonInformation(payload) {
  return { type: SET_PERSON, payload };
}

export function setPersonFullInformation(payload) {
  return { type: SET_PERSON_FULL_INFORMATION, payload };
}
export function setCelebrities(payload) {
  return { type: ADD_CELEBRITIES, payload };
}
export function setIsUploading(payload) {
  return { type: UPDATE_IS_LOADING, payload };
}
export function setImageUrl(payload) {
  return { type: SET_IMAGE_URL, payload };
}
export function setLoadingProgress(payload) {
  return { type: SET_LOADING_PROGRESS, payload };
}
export function setShowDrawer(payload) {
  return { type: SET_SHOW_DRAWER, payload };
}
export function setIsPersonDataLoading(payload) {
  return { type: SET_IS_PERSON_DATA_LOADING, payload };
}
export function showPersonDrawer(payload) {
  return { type: SHOW_PERSON_DRAWER, payload };
}

export function enableDarkTheme(payload) {
  return { type: SET_DARK_THEME, payload };
}
