<template>
   <Container>
     <div class="text-center space-y-5 mb-10 lg:mb-20">
       <h1 class="text-4xl md:text-5xl lg:text-6xl leading-tight lg:leading-tight font-extrabold">
         Generate a secure
         <span class="text-blue-500">Password</span> in seconds.
       </h1>
       <p class="text-2xl text-gray-500 font-medium">Generate secure, random passwords to stay safe online.</p>

     </div>
    <div class="border border-gray-200 p-10 rounded-xl w-full md:w-2/3 mx-auto mb-3">
      <div class="flex">
        <div class="w-full text-xl bg-slate-100 rounded-md relative p-3 whitespace-nowrap overflow-hidden">
          {{ generatedPassword }}
        </div>
        <Btn :is-active="false" class="relative">
          <Tooltip v-if="isCopying" />
          <CopyIcon
              @click="copyPassword"
              :class="isCopying && '!stroke-sky-500 rotate-6 scale-125'"
          >
          </CopyIcon>
        </Btn>
      </div>
      <div class="space-y-3 my-5">
        <div>
          <label class="flex gap-2">
            <input v-model="includeUppercase" type="checkbox">
            <span>Uppercase</span>
          </label>
        </div>
        <div>
          <label class="flex gap-2">
            <input v-model="includeNumbers" type="checkbox">
            <span>Numbers</span>
          </label>
        </div>
        <div>
          <label class="flex gap-2">
            <input v-model="includeSymbols" type="checkbox">
            <span>Symbols</span>
          </label>
        </div>
        <div>
          <div>Password Length</div>
          <div class="flex gap-5">
            <input class="w-full" v-model="passwordLength" type="range" :min="minLength" :max="maxLength">
            <input class="w-12 text-center border rounded-md max-w-fit w-fit flex" v-model="passwordLength" type="number" :min="minLength" :max="maxLength">
          </div>
        </div>
      </div>
      <div class="space-y-2">
        <div>
          Password Strength : <span class="font-bold" :class="currentPasswordStrength.color">{{ currentPasswordStrength.label }}</span>
        </div>
        <div class="relative h-2 rounded-full bg-gray-200">
          <div
              class="duration-200 absolute rounded-full top-0 left-0 z-10 h-full"
              :class="currentPasswordStrength.class"
          ></div>
        </div>
      </div>
    </div>
   </Container>
</template>

<script lang="ts" setup>
import { useCopyToClipBoard } from "../../utils/copy"
import { usePasswordGenerator } from "./usePasswordGenerator";
import Container from '../../components/Component/Container.vue';
import CopyIcon from '../../components/icons/Copy.vue';
import Btn from '../../components/Component/Btn.vue';
import Tooltip from '../../components/Tooltip.vue';

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
  generatedPassword
} = usePasswordGenerator()

generate()

const copyPassword = () => copy(generatedPassword.value)

</script>