import { errorPath, successPath, warningPath } from "./svgPaths";

export const sourceCode = `
<div class="space-y-10">
  <div class="rounded-md bg-amber-50 p-5">
    <div class="flex items-center gap-2 mb-2">
      <span class="w-4">
        <svg class="w-full" viewBox="0 0 22 18">
          <path d="${warningPath}" fill="#FFC56F"/>
        </svg>
      </span>
      <span class="text-sm text-orange-900 font-medium">Attention needed</span>
    </div>
    <p class="pl-6 text-sm text-orange-900">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque iure labore nulla perferendis qui quidem quod. Adipisci, dolorem exercitationem.</p>
  </div>
    
   <div class="rounded-md bg-green-50 p-5">
     <div class="flex items-center gap-2 mb-2">
       <span class="w-4">
         <svg class="w-full" viewBox="0 0 16 16">
          <path d="${successPath}" fill="#4ECB71"/>
         </svg>
       </span>
       <span class="text-sm text-green-700 font-medium">You are done</span>
     </div>
     <p class="pl-6 text-sm text-green-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque iure labore nulla perferendis qui quidem quod. Adipisci, dolorem exercitationem.</p>
   </div>  
   
   <div class="rounded-md bg-red-50 p-5">
     <div class="flex items-center gap-2 mb-2">
       <span class="w-4">
         <svg class="w-full" viewBox="0 0 16 16">
          <path d="${errorPath}" fill="#F87171"/>
         </svg>
       </span>
       <span class="text-sm text-red-700 font-medium">Something went wrong</span>
     </div>
     <p class="pl-6 text-sm text-red-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque iure labore nulla perferendis qui quidem quod. Adipisci, dolorem exercitationem.</p>
   </div>
</div>

`