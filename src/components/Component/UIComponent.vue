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
      <Preview v-if="isPreviewing" :src="component.previewSource"></Preview>
      <Code :code="component.previewCode" v-else> </Code>
    </div>

  </div>

<!--  <div class="flex justify-center gap-10 items-center rounded-lg border p-10">-->

<!--    <div class="flex -space-x-2 overflow-hidden">-->
<!--      <img class="inline-block h-20  w-20 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">-->
<!--      <img class="inline-block h-20  w-20 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">-->
<!--      <img class="inline-block h-20  w-20 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">-->
<!--      <img class="inline-block h-20  w-20 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="">-->
<!--    </div>-->

<!--  </div>-->
</template>


