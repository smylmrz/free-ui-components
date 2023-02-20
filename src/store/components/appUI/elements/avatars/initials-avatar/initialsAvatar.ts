import { sourceCode } from "./sourceCode";
import { previewCode } from "./previewCode";
import { Component } from "../../../../../../models/Component";
import { imagePrefix } from "../../../../../../utils/imagePrefix";


export const initialsAvatar = <Component>{
  id: 4,
  name: "Circular Avatar with Initials",
  groupId: 57,
  previewSource: `${imagePrefix()}initials-avatar.png`,
  previewCode,
  sourceCode,
};
