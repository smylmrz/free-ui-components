<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { copy } from "../../utils/copy";
import { Component } from "../../models/Component";
import Button from "./Button.vue";
import ComponentTitle from "./ComponentTitle.vue";
import Code from "./Code.vue";
import CodeIcon from "../icons/Code.vue"
import Preview from "./Preview.vue";
import CopyIcon from "../icons/Copy.vue";
import EyeIcon from "../icons/Eye.vue";
import Tooltip from "./Tooltip.vue";

const isPreviewing = ref(false);
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
  <div class="flex items-center justify-between">
    <ComponentTitle>{{ component.name }}</ComponentTitle>
    <div class="flex gap-5 mb-5">
      <div class="overflow-hidden p-0.5 bg-slate-100 flex rounded-lg">
        <Button
          @click="isPreviewing = true"
          :is-active="isPreviewing"
          role="tab"
        >
          <template #icon="slotProps">
            <EyeIcon :is-active="slotProps.isActive"/>
          </template>
          Preview
        </Button>
        <Button
          @click="isPreviewing = false"
          :is-active="!isPreviewing"
          role="tab"
        >
          <template #icon="slotProps">
            <CodeIcon :is-active="slotProps.isActive"/>
          </template>
          View Code
        </Button>
      </div>
      <Button :is-active="false" class="relative">
        <Tooltip v-if="isCopying" />
        <CopyIcon
          @click="copying"
          :class="isCopying && '!stroke-sky-500 rotate-6 scale-125'"
        >
        </CopyIcon>
      </Button>
    </div>
  </div>
  <div class="border overflow-hidden border-gray-100 rounded-xl">
    <Preview v-if="isPreviewing" :src="component.previewSource"></Preview>
    <Code :code="component.previewCode" v-else> </Code>
  </div>
</template>


