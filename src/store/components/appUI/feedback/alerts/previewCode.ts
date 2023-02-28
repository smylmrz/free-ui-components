import { generatePreviewCode } from "../../../../../utils/generatePreviewCode";
import { errorPath, successPath, warningPath } from "./svgPaths";

const { openTag, closeTag, attributeWithValues, closer, slash } = generatePreviewCode()
const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque iure labore nulla perferendis qui quidem quod. Adipisci, dolorem exercitationem.'

export const previewCode = `${openTag('div')} ${attributeWithValues('class', 'space-y-10')}${closer()}
  ${openTag('div')} ${attributeWithValues('class', 'rounded-md bg-amber-50 p-5')}${closer()}
    ${openTag('div')} ${attributeWithValues('class', 'flex items-center gap-2 mb-2')}${closer()}
      ${openTag('span')} ${attributeWithValues('class', 'w-4')}${closer()}
        ${openTag('svg')} ${attributeWithValues('class', 'w-full')} ${attributeWithValues('viewBox', '0 0 22 18')}${closer()}
          ${openTag('path')} ${attributeWithValues('d', warningPath)} ${attributeWithValues('fill', '#FFC56F')}${slash()}${closer()}
        ${closeTag('svg')}
      ${closeTag('span')}
      ${openTag('span')} ${attributeWithValues('class', 'text-sm text-orange-900 font-medium')}${closer()}Attention needed${closeTag('span')}
    ${closeTag('div')}
    ${openTag('p')} ${attributeWithValues('class', 'pl-6 text-sm text-orange-900')}${closer()}${dummyText}${closeTag('p')}
  ${closeTag('div')}
  
  ${openTag('div')} ${attributeWithValues('class', 'rounded-md bg-green-50 p-5')}${closer()}
    ${openTag('div')} ${attributeWithValues('class', 'flex items-center gap-2 mb-2')}${closer()}
      ${openTag('span')} ${attributeWithValues('class', 'w-4')}${closer()}
        ${openTag('svg')} ${attributeWithValues('class', 'w-full')} ${attributeWithValues('viewBox', '0 0 16 16')}${closer()}
          ${openTag('path')} ${attributeWithValues('d', successPath)} ${attributeWithValues('fill', '#4ECB71')}${slash()}${closer()}
        ${closeTag('svg')}
      ${closeTag('span')}
      ${openTag('span')} ${attributeWithValues('class', 'text-sm text-green-700 font-medium')}${closer()}You are done${closeTag('span')}
    ${closeTag('div')}
    ${openTag('p')} ${attributeWithValues('class', 'pl-6 text-sm text-green-700')}${closer()}${dummyText}${closeTag('p')}
  ${closeTag('div')}
  
  ${openTag('div')} ${attributeWithValues('class', 'rounded-md bg-red-50 p-5')}${closer()}
    ${openTag('div')} ${attributeWithValues('class', 'flex items-center gap-2 mb-2')}${closer()}
      ${openTag('span')} ${attributeWithValues('class', 'w-4')}${closer()}
        ${openTag('svg')} ${attributeWithValues('class', 'w-full')} ${attributeWithValues('viewBox', '0 0 16 16')}${closer()}
          ${openTag('path')} ${attributeWithValues('d', errorPath)} ${attributeWithValues('fill', '#F87171')}${slash()}${closer()}
        ${closeTag('svg')}
      ${closeTag('span')}
      ${openTag('span')} ${attributeWithValues('class', 'text-sm text-red-700 font-medium')}${closer()}Something went wrong${closeTag('span')}
    ${closeTag('div')}
    ${openTag('p')} ${attributeWithValues('class', 'pl-6 text-sm text-red-700')}${closer()}${dummyText}${closeTag('p')}
  ${closeTag('div')}
${closeTag('div')}
`