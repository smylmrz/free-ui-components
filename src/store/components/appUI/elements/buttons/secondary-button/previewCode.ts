import { generatePreviewCode } from "../../../../../../utils/generatePreviewCode";

const { openTag, closeTag, attributeWithValues, closer } = generatePreviewCode()

export const previewCode = `${openTag('button')} ${attributeWithValues('class', 'rounded-md bg-red-100 hover:bg-red-200 text-red-500 px-6 py-3')}${closer()}
    Button text
${closeTag('button')}`