<template>
   <div>
     <Hero />

     <div class="w-full lg:w-2/3 mx-auto mb-3">
      <div class="space-y-5 mb-5">
        <RandomPasswordGenerator @generate="generatedPassword = $event" v-if="passwordType === 'Random'" />
        <MemorablePasswordGenerator @generate="generatedPassword = $event" v-else />
      </div>

      <div class="flex gap-2">
        <label class="flex gap-5 cursor-pointer">
          <select v-model="passwordType" class="border bg-slate-100 px-4 py-2 rounded-md">
            <option v-for="pt in availableTypes" :value="pt" :key="pt"> {{ pt }}</option>
          </select>
        </label>

        <CommonButton @click="copyPassword">
          <span>
            Copy
          </span>
          <span class="relative">
            <Tooltip v-if="isCopying" />
            <CopyIcon :class="isCopying && '!stroke-sky-500 rotate-6 scale-125'" />
          </span>
        </CommonButton>
      </div>
    </div>

     <div class="border-t pt-10 mt-10 md:pt-20 md:mt-20">
       <h2 class="text-xl text-center md:text-3xl font-bold">
         What makes a password strong?
       </h2>
       <div class="grid mt-10 md:mt-20 gap-10 grid-cols-6 md:grid-cols-12">
         <InfoCard class="col-span-6" v-for="info in passwordInfo" :key="info.title" :info="info" />
       </div>
     </div>
   </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useHead } from "@vueuse/head";
import { useCopyToClipBoard } from "../../hooks/useCopyToClipBoard"
import { usePasswordGenerator } from "../../hooks/usePasswordGenerator";
import { passwordInfo } from "./paswordInfo";
import CopyIcon from '../../components/Icons/Copy.vue';
import Tooltip from '../../components/Tooltip.vue';
import Hero from "./Hero.vue";
import CommonButton from "../../components/CommonButton.vue";
import InfoCard from "./InfoCard.vue";
import RandomPasswordGenerator from "./RandomPasswordGenerator.vue";
import MemorablePasswordGenerator from "./MemorablePasswordGenerator.vue";

const { isCopying, copy } = useCopyToClipBoard()
const generatedPassword = ref('')

const {
  availableTypes,
  passwordType
} = usePasswordGenerator()

const copyPassword = () => copy(generatedPassword.value)

useHead({
  title: 'Random Password Generator',
  meta: [
    {
      name: 'description',
      content: 'Create a random to stay safe online.'
    }
  ]
})
</script>