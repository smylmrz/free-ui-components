<template>
   <Container>
     <Hero />

     <div class="w-full lg:w-2/3 mx-auto mb-3">
      <div class="space-y-5 mb-5">
        <div class="space-y-2">
          <div class="font-semibold">
            Generated Password:
          </div>
          <div class="w-full text-xl md:text-2xl lg:text-4xl bg-slate-100 rounded-md relative p-3 whitespace-nowrap overflow-hidden">
            {{ generatedPassword }}
          </div>
        </div>
        <div class="space-y-2">
          <div class="flex gap-1">
            <span class="font-semibold">Password Strength:</span>
            <span class="font-bold" :class="currentPasswordStrength.color">{{ currentPasswordStrength.label }}</span>
          </div>
          <div class="relative h-2 rounded-full bg-gray-200">
            <div :class="['duration-200 absolute rounded-full top-0 left-0 z-10 h-full', currentPasswordStrength.class]"/>
          </div>
        </div>

        <div class="flex flex-col bg-slate-100 p-5 rounded-md md:items-center md:flex-row justify-between gap-3 my-5">
          <Complexity v-model="includeUppercase">Uppercase</Complexity>
          <Complexity v-model="includeNumbers">Numbers</Complexity>
          <Complexity v-model="includeSymbols">Symbols</Complexity>

          <label class="flex gap-5 cursor-pointer">
            <span>Length</span>
            <input class="w-full" v-model="passwordLength" type="range" :min="minLength" :max="maxLength">
            <input class="w-12 text-center border rounded-md max-w-fit w-fit flex" v-model="passwordLength" type="number" :min="minLength" :max="maxLength">
          </label>
        </div>
      </div>

      <div class="flex gap-2">
        <CommonButton @click="generate" is-primary>
          <span>
            Regenerate
          </span>
          <Refresh :class="['stroke-white', isGenerating && 'animate-spin']" />
        </CommonButton>

        <CommonButton @click="copyPassword">
          <span>
            Copy
          </span>
          <span class="relative">
            <Tooltip v-if="isCopying" />
            <CopyIcon :class="isCopying && '!stroke-white rotate-6 scale-125'" />
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
   </Container>
</template>

<script lang="ts" setup>
import { useCopyToClipBoard } from "../../utils/copy"
import { usePasswordGenerator } from "./usePasswordGenerator";
import Container from '../../components/Component/Container.vue';
import CopyIcon from '../../components/icons/Copy.vue';
import Tooltip from '../../components/Tooltip.vue';
import Complexity from "./Complexity.vue";
import Refresh from "../../components/icons/Refresh.vue";
import Hero from "./Hero.vue";
import CommonButton from "../../components/CommonButton.vue";
import { passwordInfo } from "./paswordInfo";
import InfoCard from "./InfoCard.vue";

const { isCopying, copy } = useCopyToClipBoard()

const {
  minLength,
  maxLength,
  passwordLength,
  includeNumbers,
  includeSymbols,
  includeUppercase,
  generate,
  currentPasswordStrength,
  generatedPassword,
  isGenerating
} = usePasswordGenerator()

generate()

const copyPassword = () => copy(generatedPassword.value)

</script>