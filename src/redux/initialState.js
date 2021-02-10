import {defaultStyles, defaultTitle} from "@/constants";

const defaultState = {
  title: defaultTitle,
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentStyles: defaultStyles,
  currentText: "",
  lastOpened: new Date().toJSON()
};

const normalize = (state) => ({
  ...state,
  currentStyles: defaultStyles,
  currentText: ""
});

export function normalizeInitialState(state) {
  return state ? normalize(state) : defaultState;
}
