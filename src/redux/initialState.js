import {storage} from "@core/utils";

const defaulState = {
  rowState: {},
  colState: {}
};

export const initialState = storage("excel-state")
  ? storage("excel-state")
  : defaulState;
