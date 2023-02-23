import { generatePreviewCode } from "../../../../../utils/generatePreviewCode";

import { warningPath } from "./svgPaths";
const { openTag, closeTag, attributeWithValues, closer } = generatePreviewCode()
const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque iure labore nulla perferendis qui quidem quod. Adipisci, dolorem exercitationem.'
export const previewCode = `${openTag('div')} ${attributeWithValues('class', 'rounded-md bg-amber-50 p-5')}${closer()}
  ${openTag('div')} ${attributeWithValues('class', 'flex items-center gap-2 mb-2')}${closer()}
    ${openTag('span')} ${attributeWithValues('class', 'w-4')}${closer()}
      ${openTag('svg')} ${attributeWithValues('class', 'w-full')} ${attributeWithValues('viewBox', '0 0 22 18')}${closer()}
        ${openTag('path')} ${attributeWithValues('d', warningPath)} ${attributeWithValues('fill', '#FFC56F')}${closer()}
      ${closeTag('svg')}
    ${closeTag('span')}
  ${closeTag('div')}
  ${openTag('p')} ${attributeWithValues('class', 'pl-6 text-sm text-orange-900')}${closer()}${dummyText}${closeTag('p')}
${closeTag('div')}
`