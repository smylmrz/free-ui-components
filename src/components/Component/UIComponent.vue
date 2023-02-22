<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { copy } from "../../utils/copy";
import { Component } from "../../models/Component";
import Btn from "./Btn.vue";
import ComponentTitle from "./ComponentTitle.vue";
import Code from "./Code.vue";
import CodeIcon from "../icons/Code.vue"
import Preview from "./Preview.vue";
import CopyIcon from "../icons/Copy.vue";
import EyeIcon from "../icons/Eye.vue";
import Tooltip from "../Tooltip.vue";

const isPreviewing = ref(true);
const isCopying = ref(false);

const props = defineProps<{
  component: Component;
}>();

const copying = () => {
  isCopying.value = true;
  copy(props.component.sourceCode);
  setTimeout(() => {
    isCopying.value = false;
  }, 1500);
};
</script>

<template>
  <div>
    <div class="flex items-center justify-between">
      <ComponentTitle>{{ component.name }}</ComponentTitle>
      <div class="flex gap-5 mb-5">
        <div class="overflow-hidden p-0.5 bg-slate-100 flex rounded-lg">
          <Btn
              @click="isPreviewing = true"
              :is-active="isPreviewing"
              role="tab"
          >
            <template #icon="slotProps">
              <EyeIcon :is-active="slotProps.isActive"/>
            </template>
            Preview
          </Btn>
          <Btn
              @click="isPreviewing = false"
              :is-active="!isPreviewing"
              role="tab"
          >
            <template #icon="slotProps">
              <CodeIcon :is-active="slotProps.isActive"/>
            </template>
            View Code
          </Btn>
        </div>
        <Btn :is-active="false" class="relative">
          <Tooltip v-if="isCopying" />
          <CopyIcon
              @click="copying"
              :class="isCopying && '!stroke-sky-500 rotate-6 scale-125'"
          >
          </CopyIcon>
        </Btn>
      </div>
    </div>
    <div class="border overflow-hidden border-gray-100 rounded-xl">
      <Preview v-if="isPreviewing" :src="component.previewSource" />
      <Code :code="component.previewCode" v-else />
    </div>

  </div>

<!--  <div class="flex justify-center gap-10 items-center rounded-lg border p-10">-->
<!--  <div class="space-y-1">-->
<!--    <label class="block text-sm text-gray-700 font-medium" for="email">Email</label>-->
<!--    <input id="email" type="email" class="block w-full border rounded-md px-2 py-1 focus:outline-sky-500" placeholder="you@example.com">-->
<!--    <p class="text-xs text-gray-400">Will be used to contact you.</p>-->
<!--  </div>-->
<!--  </div>-->
</template>


