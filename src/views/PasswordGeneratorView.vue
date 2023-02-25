<template>
   <Container>
    <div class="bg-slate-100 rounded-md border py-3 mb-3">{{ generatedPassword }}</div>
    <button @click="generatePassword" class="px-4 py-2 bg-gray-900 text-white rounded-md">Generate Password</button>
   </Container>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Container from '../components/Component/Container.vue';
import CTA from '../components/CTA.vue';

const generatedPassword = ref('')

const passwordLength = ref(20)
const includeUppercase = ref(false)
const includeNumbers = ref(true)
const includeSymbols = ref(true)

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

</script>