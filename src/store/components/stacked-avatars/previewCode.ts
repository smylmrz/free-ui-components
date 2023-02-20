import { src } from "./src";
import { generatePreviewCode } from "../../../utils/generatePreviewCode";

const { openTag, closeTag, attributeWithValues, closer } = generatePreviewCode()

export const previewCode = `${openTag('div')} ${attributeWithValues('class', 'flex -space-x-2 overflow-hidden')}${closer()}
  ${openTag('img')} ${attributeWithValues('class', 'inline-block h-20 w-20 rounded-full ring-2 ring-white')} ${attributeWithValues('src', src)} ${attributeWithValues('alt', '')}${closer()}
  ${openTag('img')} ${attributeWithValues('class', 'inline-block h-20 w-20 rounded-full ring-2 ring-white')} ${attributeWithValues('src', src)} ${attributeWithValues('alt', '')}${closer()}
  ${openTag('img')} ${attributeWithValues('class', 'inline-block h-20 w-20 rounded-full ring-2 ring-white')} ${attributeWithValues('src', src)} ${attributeWithValues('alt', '')}${closer()}
  ${openTag('img')} ${attributeWithValues('class', 'inline-block h-20 w-20 rounded-full ring-2 ring-white')} ${attributeWithValues('src', src)} ${attributeWithValues('alt', '')}${closer()}
${closeTag('div')}`