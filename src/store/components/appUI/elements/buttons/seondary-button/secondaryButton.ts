import { Component } from "../../../../../../models/Component";
import { imagePrefix } from "../../../../../../utils/imagePrefix";
import { previewCode } from "./previewCode";
import { sourceCode } from "./sourceCode";

export const secondaryButton = <Component>{
    id: 6,
    name: "Secondary Button",
    groupId: 60,
    previewSource: `${imagePrefix()}secondary-button.png`,
    previewCode,
    sourceCode
};
