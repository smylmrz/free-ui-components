import { generatePreviewCode } from "../../../../../../utils/generatePreviewCode";

const { openTag, closeTag, attributeWithValues, closer } = generatePreviewCode()
export const previewCode = `${openTag('div')} ${attributeWithValues('class','space-y-1')}${closer()}
    ${openTag('label')} ${attributeWithValues('class','block text-sm text-gray-700 font-medium')} ${attributeWithValues('for','name')}${closer()}Name${closeTag('label')}
    ${openTag('input')} ${attributeWithValues('id','name')} ${attributeWithValues('type','text')} ${attributeWithValues('class','block w-full border rounded-md px-2 py-1 focus:outline-sky-500')} ${attributeWithValues('placeholder','John Doe')}${closer()}
${closeTag('div')}
`