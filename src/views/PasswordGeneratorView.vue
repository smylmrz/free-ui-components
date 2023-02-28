<template>
   <Container>
    <div class="border border-gray-200 p-10 rounded-xl w-full md:w-1/2 mx-auto mb-3">
      <div class="flex">
        <div class="w-full bg-slate-100 rounded-md relative p-3 whitespace-nowrap overflow-hidden">
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
            <input class="w-full" v-model="passwordLength" type="range" min="6" max="32">
            <input class="w-12 text-center border rounded-md max-w-fit w-fit flex" v-model="passwordLength" type="number" min="6" max="32">
          </div>
        </div>
      </div>
      <button @click="generatePassword" class="px-4 py-2 bg-gray-900 text-white rounded-md">Generate Password</button>
    </div>
   </Container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useCopyToClipBoard } from "../utils/copy"
import Container from '../components/Component/Container.vue';
import CopyIcon from '../components/icons/Copy.vue';
import Btn from '../components/Component/Btn.vue';
import Tooltip from '../components/Tooltip.vue';

const { isCopying, copy } = useCopyToClipBoard()

const generatedPassword = ref('')

const passwordLength = ref(10)
const includeUppercase = ref(false)
const includeNumbers = ref(false)
const includeSymbols = ref(false)

const generatePassword = () => {
  // reset password
  generatedPassword.value = ''
  
  // define character sets for each parameter
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+-={}[]|:;"<>,.?/';

  // create a base character set consisting of only lowercase letters
  let baseChars = lowercaseChars;

  // append additional character sets based on user parameters
  if (includeUppercase.value) {
    baseChars += uppercaseChars;
  }

  if (includeNumbers.value) {
    baseChars += numberChars;
  }

  if (includeSymbols.value) {
    baseChars += symbolChars;
  }

  // generate a random password by selecting characters from the base character set

  for (let i = 0; i < passwordLength.value; i++) {
    const randomIndex = Math.floor(Math.random() * baseChars.length);
    generatedPassword.value += baseChars[randomIndex];
  }
}

generatePassword()

const copyPassword = () => copy(generatedPassword.value)

</script>