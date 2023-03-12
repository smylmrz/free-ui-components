<template>
  <div>
    <Heading>
      <span class="text-blue-500">JSON</span> Formatter

      <template #body>
        <p class="text-lg md:text-xl lg:text-2xl text-gray-500 font-medium">Validator and formatter for JSON.</p>
      </template>
    </Heading>
    <div class="p-5 bg-gray-100 grid grid-cols-12 gap-5 md:gap-10 rounded-md">
      <div class="col-span-12 md:col-span-5">
        <code>
          <textarea
              rows="20"
              class="rounded-md p-2 w-full resize-none block border-4"
              :class="notifierBorder"
              v-model="input"
          />
        </code>
      </div>
      <div class="col-span-12 md:col-span-2">
        <div class="rounded-md flex flex-col items-center justify-center h-full p-5">
          <select v-model="tabSpaces" class="border px-4 py-2 rounded-md">
            <option v-for="space in availableTabs" :value="space" :key="space"> {{ space }} Tab Spaces</option>
          </select>
          <div class="w-full border-t border-b border-gray-300 my-10 py-5 space-y-5">
            <CommonButton  @click="beautify" class="w-full justify-center">
              Beautify
            </CommonButton>
            <CommonButton  @click="minify" class="w-full justify-center">
              Minify
            </CommonButton>
            <CommonButton  @click="validateJSON" class="w-full justify-center">
              Validate
            </CommonButton>
          </div>
          <CommonButton  @click="clear" class="w-full justify-center">
            Clear
          </CommonButton>
        </div>
      </div>
      <div class="col-span-12 md:col-span-5">
        <textarea
            rows="20"
            v-model="result"
            class="rounded-md resize-none p-2 w-full border-4 overflow-x-auto"
        />
      </div>
    </div>

    <div class="mt-10" v-if="message">
      <AlertSuccess v-if="message.type === 'success'">
        {{ message.body }}
      </AlertSuccess>
      <AlertError v-else>
        {{ message.body }}
      </AlertError>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { useJSONFormatter } from "../../hooks/useJSONFormatter";
import CommonButton from "../../components/CommonButton.vue";
import AlertError from "../../components/Alerts/AlertError.vue";
import Heading from "../../components/Heading.vue";
import AlertSuccess from "../../components/Alerts/AlertSuccess.vue";
import { computed } from "vue";

const {
  input,
  message,
  result,
  tabSpaces,
  availableTabs,
  beautify,
  minify,
  clear,
  validateJSON
} = useJSONFormatter()

const notifierBorder = computed(() => {
  if (!message.value){
    return
  }

  return message.value?.type === "error" ? "border-red-500" : "border-green-300"
})

</script>