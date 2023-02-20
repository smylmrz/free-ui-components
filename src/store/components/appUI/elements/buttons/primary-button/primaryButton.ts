import { Component } from "../../../../../../models/Component";
import { imagePrefix } from "../../../../../../utils/imagePrefix";
import { previewCode } from "./previewCode";
import { sourceCode } from "./sourceCode";

export const primaryButton = <Component>{
    id: 5,
    name: "Primary Button",
    groupId: 60,
    previewSource: `${imagePrefix()}primary-button.png`,
    previewCode,
    sourceCode
};
