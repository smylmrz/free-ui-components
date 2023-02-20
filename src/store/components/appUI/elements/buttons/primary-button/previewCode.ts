import { generatePreviewCode } from "../../../../../../utils/generatePreviewCode";

const { openTag, closeTag, attributeWithValues, closer } = generatePreviewCode()

export const previewCode = `${openTag('button')} ${attributeWithValues('class', 'rounded-md bg-red-500 hover:bg-red-600 text-white px-6 py-3')}${closer()}
    Button text
${closeTag('button')}`