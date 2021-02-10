import {TABLE_RESIZE} from "@/redux/types";

export function tableResize(data) {
  return {
    type: TABLE_RESIZE,
    data
  };
}
