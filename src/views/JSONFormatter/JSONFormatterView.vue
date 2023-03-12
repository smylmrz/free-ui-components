<template>
  <div>
    <div class="grid grid-cols-12 gap-10">
      <div class="col-span-5">
        <code>
          <textarea
              rows="20"
              class="w-full resize-none block border"
              :class="err && 'border-red-500'"
              v-model="input"
          />
        </code>
      </div>
      <div class="col-span-2">
        <div class="rounded-md flex flex-col items-center justify-center h-full p-5 bg-gray-100">
          <CommonButton  @click="beautify" class="w-full justify-center mt-5">
            Beautify
          </CommonButton>
          <CommonButton  @click="minify" class="w-full justify-center mt-5">
            Minify
          </CommonButton>
          <CommonButton  @click="clear" class="w-full justify-center mt-5">
            Clear
          </CommonButton>
        </div>
      </div>
      <div class="col-span-5">
        <textarea
            rows="20"
            v-model="result"
            class="w-full border overflow-x-auto"
        />
      </div>
    </div>

    <AlertError v-if="err">
      {{ err }}
    </AlertError>

  </div>
</template>

<script lang="ts" setup>
import { useJSONFormatter } from "../../hooks/useJSONFormatter";
import CommonButton from "../../components/CommonButton.vue";
import AlertError from "../../components/Alerts/AlertError.vue";

const {
  input,
  err,
  result,
  tabs,
  beautify,
  minify,
  clear
} = useJSONFormatter()


</script>