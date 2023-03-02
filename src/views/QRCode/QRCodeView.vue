<template>
   <Container>
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
         <div class="border border-gray-200 p-5 md:p-10 rounded-xl w-full space-y-3">
           <label class="text-lg font-bold block" for="text">Add text to generate the QR Code</label>
           <input id="text" class="w-full bg-slate-100 rounded-md relative p-3 whitespace-nowrap overflow-hidden" v-model="text" type="text">
         </div>
       </div>
       <div class="col-span-6">
         <div class="border border-gray-200 h-72 p-5 md:p-10 rounded-xl w-full flex items-center justify-center">
           <vueQr v-if="text" :text="text" />
           <div v-else class="text-xl">Your QR Code will appear here {{ text }} 🙃</div>
         </div>
       </div>
     </div>
   </Container>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import { availableTypes } from "./qrCodeTypes";
import Container from '../../components/Component/Container.vue';
import vueQr from 'vue-qr/src/packages/vue-qr.vue'
import Pill from "../../components/Pill.vue";

const text = ref(availableTypes[0].starter)

const qrType = ref(availableTypes[0])

const setType = (type) => {
  qrType.value = type
}

watchEffect(() => {
  text.value = qrType.value.starter ?? ''
})

const isActive = (name) => name === qrType.value.name
</script>