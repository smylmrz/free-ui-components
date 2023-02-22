import { generatePreviewCode } from "../../../../../../utils/generatePreviewCode";

const { openTag, closeTag, attributeWithValues, closer } = generatePreviewCode()
export const previewCode = `${openTag('div')} ${attributeWithValues('class','space-y-1')}${closer()}
    ${openTag('label')} ${attributeWithValues('class','block text-sm text-gray-700 font-medium')} ${attributeWithValues('for','email')}${closer()}Email${closeTag('label')}
    ${openTag('input')} ${attributeWithValues('id','email')} ${attributeWithValues('type','email')} ${attributeWithValues('class','block w-full border rounded-md px-2 py-1 focus:outline-sky-500')} ${attributeWithValues('placeholder','you@example.com')}${closer()}
    ${openTag('p')} ${attributeWithValues('class','text-xs text-gray-400')}${closer()}Will be used to contact you.${closeTag('p')}
${closeTag('div')}
`