<template>
<div>
    <input v-model="str" type="text">
    <button @click="formatStringAsJson">Format</button>
    <div v-html="result"></div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


const str = ref('')
const result = ref("")

const formatStringAsJson = () => {
  try {
    // Convert the string to a JSON object
    const jsonObj = JSON.parse(str.value);

    // Convert the JSON object back to a string with pretty-printing
    result.value = JSON.stringify(jsonObj, null, 2);
  } catch (err) {
    console.error("Failed to format string as JSON:", err);
    return null;
  }
}


</script>