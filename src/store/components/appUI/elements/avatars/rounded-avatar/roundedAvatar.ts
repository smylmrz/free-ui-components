import { sourceCode } from "./sourceCode";
import { previewCode } from "./previewCode";
import { Component } from "../../../../../../models/Component";
import { imagePrefix } from "../../../../../../utils/imagePrefix";


export const roundedAvatar = <Component>{
  id: 3,
  name: "Rounded Avatar",
  groupId: 57,
  previewSource: `${imagePrefix()}rounded-avatar.png`,
  previewCode,
  sourceCode,
};
