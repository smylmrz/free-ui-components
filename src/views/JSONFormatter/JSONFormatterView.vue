<template>
  <div>
    <Heading>
      <span class="text-blue-500">JSON</span> Formatter

      <template #body>
        <p class="text-lg md:text-xl lg:text-2xl text-gray-500 font-medium">Validator and formatter for JSON.</p>
      </template>
    </Heading>
    <div class="p-5 bg-gray-100 grid grid-cols-12 gap-5 md:gap-10 rounded-md">
      <div class="col-span-12 md:col-span-10">
        <CodePanel v-model="json" placeholder="Paste your JSON here..." />
      </div>
      <div class="col-span-12 md:col-span-2">
        <div class="rounded-md flex flex-col items-center justify-center h-full p-5">
          <select v-model="tabSpaces" class="bg-gray-800 text-white border px-4 py-2 rounded-md">
            <option v-for="space in availableTabs" :value="space" :key="space"> {{ space }} Tab Spaces</option>
          </select>
          <div class="w-full border-t border-b border-gray-300 my-10 py-5 space-y-5">
            <CommonButton center :disabled="!json" is-primary @click="beautify" class="w-full">
                Beautify
            </CommonButton>
            <CommonButton center :disabled="!json" is-primary @click="minify" class="w-full">
                Minify
            </CommonButton>
            <CommonButton center :disabled="!json" @click="validateJSON" class="bg-green-500 hover:bg-green-600 w-full">
              Validate
            </CommonButton>
            <CommonButton :disabled="!json" center class="w-full" @click="copyJSON">
              <span>
                Copy
              </span>
              <span class="relative">
                <Tooltip v-if="isCopying" />
                <CopyIcon :class="isCopying && '!stroke-sky-500 rotate-6 scale-125'" />
              </span>
            </CommonButton>
          </div>
          <CommonButton :disabled="!json" @click="clear" class="w-full justify-center">
            Clear
          </CommonButton>
        </div>
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
import { useCopyToClipBoard } from "../../hooks/useCopyToClipBoard";
import CommonButton from "../../components/CommonButton.vue";
import Tooltip from "../../components/Tooltip.vue";
import CopyIcon from "../../components/Icons/Copy.vue";
import AlertError from "../../components/Alerts/AlertError.vue";
import Heading from "../../components/Heading.vue";
import AlertSuccess from "../../components/Alerts/AlertSuccess.vue";
import CodePanel from "../../components/CodePanel.vue";
import { useHead } from "@vueuse/head";

const { copy, isCopying } = useCopyToClipBoard()
const {
  json,
  message,
  tabSpaces,
  availableTabs,
  beautify,
  minify,
  clear,
  validateJSON
} = useJSONFormatter()

const copyJSON = () => copy(json.value)

useHead({
  title: 'JSON Validator and Formatter',
  meta: [
    {
      name: 'description',
      content: 'Easy-to-use JSON formatter and validator.'
    }
  ]
})
</script>