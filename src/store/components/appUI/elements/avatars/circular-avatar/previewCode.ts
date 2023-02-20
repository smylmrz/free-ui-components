import { src } from "./src";
import { generatePreviewCode } from "../../../../../../utils/generatePreviewCode";

const { openTag, closeTag, attributeWithValues, closer } = generatePreviewCode()

export const previewCode = `${openTag('div')} ${attributeWithValues('class', 'flex overflow-hidden')}${closer()}
  ${openTag('img')} ${attributeWithValues('class', 'inline-block h-20 w-20 rounded-full ring-2 ring-white')} ${attributeWithValues('class', src)} ${attributeWithValues('atl', '')}${closer()}
${closeTag('div')}`;
