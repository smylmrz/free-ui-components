import { sourceCode } from "./sourceCode";
import { previewCode } from "./previewCode";
import { Component } from "../../../../../../models/Component";
import { imagePrefix } from "../../../../../../utils/imagePrefix";


export const circularAvatar = <Component>{
  id: 2,
  name: "Circular Avatar",
  groupId: 57,
  previewSource: `${imagePrefix()}circular-avatar.png`,
  previewCode,
  sourceCode,
};
