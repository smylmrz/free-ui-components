import { previewCode } from "./previewCode";
import { sourceCode } from "./sourceCode";
import { Component } from "../../../../../../models/Component";
import { imagePrefix } from "../../../../../../utils/imagePrefix";

export const stackedAvatars = <Component>{
    id: 1,
    name: "Stacked Avatars",
    groupId: 57,
    previewSource: `${imagePrefix()}stacked-avatars.png`,
    previewCode,
    sourceCode,
};
