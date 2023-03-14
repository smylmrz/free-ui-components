<template>
  <div>
    <Heading>
      <span class="text-blue-500">Dummy</span> API

      <template #body>
        <p class="text-lg md:text-xl lg:text-2xl text-gray-500 font-medium">
          Free fake API for testing and prototyping.
        </p>
      </template>
    </Heading>
    <div class="p-5 bg-gray-100 space-y-3 rounded-md">

      <div class="flex gap-4">
        <button class="disabled:opacity-50" :disabled="!json" @click="minify">Minify</button>
        <button class="disabled:opacity-50" :disabled="!json" @click="beautify">Beautify</button>
      </div>

      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-12 md:col-span-10">
          <CodePanel v-model="json" placeholder="Paste your JSON here..." />
          <p class="mt-3 text-sm text-gray-700">
            <a class="underline" :href="generatedApiUrl">{{ userApiUrl }}</a>
          </p>
        </div>
        <div class="col-span-12 md:col-span-2">

          <div class="space-y-5">
            <div class="space-y-2 w-full">
              <span>Resources:</span>
              <select v-model="currentResource" class="w-full capitalize bg-gray-800 text-white border px-4 py-2 rounded-md">
                <option
                    class="capitalize"
                    v-for="resource in apiResources"
                    :value="resource"
                    :key="resource"
                >
                  {{ resource }}
                </option>
              </select>
            </div>
            <div class="flex gap-5">
              <label class="flex gap-1">
                <span>Skip:</span>
                <input
                    class="w-10 text-center border rounded-md"
                    v-model="skip"
                    type="number"
                >
              </label>
              <label class="flex gap-1">
                <span>Limit:</span>
                <input
                    class="w-10 text-center border rounded-md"
                    v-model="limit"
                    type="number"
                >
              </label>
            </div>
            <CommonButton center is-primary @click="fetchData" class="w-full">
              Fetch {{ currentResource }}
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

          <!--        <a :href="generateApiUrl('users')">Users</a>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Heading from "../components/Heading.vue";
import CodePanel from "../components/CodePanel.vue";
import CommonButton from "../components/CommonButton.vue";
import CopyIcon from "../components/Icons/Copy.vue";
import Tooltip from "../components/Tooltip.vue";
import { useFakeApi } from "../hooks/useFakeApi";
import { useCopyToClipBoard } from "../hooks/useCopyToClipBoard";

const { isCopying, copy } = useCopyToClipBoard()
const {
  apiResources,
  json,
  currentResource,
  fetchData,
  skip,
  limit,
  beautify,
  minify,
  generatedApiUrl,
  userApiUrl
} = useFakeApi()

const copyJSON = () => {
  copy(json.value)
}

</script>