import { generatePreviewCode } from "../../../../../../utils/generatePreviewCode";

const { openTag, closeTag, attributeWithValues, closer } = generatePreviewCode()

export const previewCode = `${openTag('div')} ${attributeWithValues('class', 'uppercase text-3xl bg-slate-800 text-white h-20 w-20 rounded-full flex items-center justify-center')}${closer()}
  MI
${closeTag('div')}`;
