<template>
   <div>
      <div class="space-y-8 mb-10 lg:mb-20">
        <h1 class="text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold">
          Generate your
          <span class="text-blue-500">QR Code</span> instantly.
        </h1>
        <ul class="text-base md:text-xl list-disc ml-5 space-y-1 md:space-y-2">
          <li>Create dynamic, editable QR codes</li>
          <li>Access comprehensive analytics</li>
          <li>Choose from a variety of designs</li>
        </ul>
      </div>

     <div class="flex gap-3 mb-5">
       <Pill
           v-for="type in availableTypes"
           :key="type.name"
           :type="type"
           @click="setType(type)"
           :is-active="isActive(type.name)"
       />
     </div>

     <div class="grid gap-10 grid-cols-6 md:grid-cols-12">
       <div class="col-span-6">
         <form @submit.prevent="generate" class="border border-gray-200 p-5 md:p-10 rounded-xl w-full space-y-3">
           <label class="text-lg font-bold block" for="text">
             {{ qrType.placeholder ?? 'Add text to generate the QR Code' }}
           </label>
           <input id="text" class="w-full bg-slate-100 rounded-md relative p-3 whitespace-nowrap overflow-hidden" v-model="text" type="text">
           <button class="bg-gray-900 text-white rounded-md px-4 py-2">
             Generate QR Code
           </button>
         </form>
       </div>
       <div class="col-span-6">
         <div class="relative">
           <a title="Download QR Code" v-if="qrText" ref="result" download="QR" class="absolute top-8 right-8">
             <DownloadIcon class="w-8 h-8" />
           </a>
           <div ref="canvas" class="border border-gray-200 h-72 p-5 md:p-10 rounded-xl w-full flex items-center justify-center">
             <vueQr v-if="qrText" :text="qrText" />
             <div v-else class="text-xl">Your QR Code will appear here 🙃</div>
           </div>
         </div>
       </div>
     </div>
   </div>
</template>

<script setup>
import {ref, watch} from "vue";
import { availableTypes } from "./qrCodeTypes";
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
import Pill from "./Pill.vue";
import html2canvas from 'html2canvas';
import DownloadIcon from "../../components/Icons/Download.vue";

const text = ref(availableTypes[0].starter)
const qrText = ref('')
const canvas = ref()
const result = ref()
const qrType = ref(availableTypes[0])

const setType = (type) => {
  qrType.value = type
}

watch([qrType], () => {
  text.value = qrType.value.starter
  qrText.value = ''
})

const generate = async () => {
  if (!text.value) {
    return
  }

  qrText.value = text.value

  setTimeout(() => {
    html2canvas(canvas.value).then((qr) => {
      const href = qr.toDataURL("image/png")
      result.value.setAttribute("href", href)
    })
  }, 200)
}

const isActive = (name) => name === qrType.value.name
</script>