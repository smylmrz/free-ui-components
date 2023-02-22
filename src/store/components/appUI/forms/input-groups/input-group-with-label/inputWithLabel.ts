import { Component } from "../../../../../../models/Component";
import { sourceCode } from "./sourceCode";
import { previewCode } from "./previewCode";
import { imagePrefix } from "../../../../../../utils/imagePrefix";
export const inputWithLabel = <Component>{
    id: 1,
    groupId: 37,
    name: 'Input with label',
    previewSource: `${imagePrefix()}input-with-label.png`,
    sourceCode,
    previewCode
}