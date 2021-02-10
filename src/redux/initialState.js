import {storage} from "@core/utils";

const defaulState = {
  rowState: {},
  colState: {},
  dataState: {},
  currentText: ""
};

export const initialState = storage("excel-state")
  ? storage("excel-state")
  : defaulState;
