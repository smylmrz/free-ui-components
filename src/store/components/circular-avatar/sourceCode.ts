import { src } from "./src";

const classes = 'inline-block rounded-full ring-2 ring-white'
export const sourceCode = `
<div class="flex overflow-hidden">
    <img
    class="${classes} h-20 w-20"
    src="${src}"
    alt=""
    />
</div>
`;
