<template>
  <div>
    <div class="flex mb-5 items-center justify-between">
      <ComponentTitle>{{ component.name }}</ComponentTitle>
      <div class="flex gap-2 md:gap-5">
        <div class="overflow-hidden p-0.5 bg-slate-100 flex rounded-lg">
          <Btn
              @click="isPreviewing = true"
              :is-active="isPreviewing"
              role="tab"
          >
            <template #icon="slotProps">
              <EyeIcon :is-active="slotProps.isActive"/>
            </template>
            <span class="hidden sm:block">
              Preview
            </span>
          </Btn>
          <Btn
              @click="isPreviewing = false"
              :is-active="!isPreviewing"
              role="tab"
          >
            <template #icon="slotProps">
              <CodeIcon :is-active="slotProps.isActive"/>
            </template>
            <span class="hidden sm:block">
              View Code
            </span>
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
      <CodePreview v-if="isPreviewing" :source-code="component.sourceCode"/>
      <Code :code="component.previewCode" v-else />
    </div>


<!--    <div class="border border-gray-100 flex justify-center gap-10 items-center rounded-lg p-10">-->

<!--    </div>-->

  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { useCopyToClipBoard } from "../../hooks/useCopyToClipBoard";
import { UIComponent } from "../../models/UIComponent";
import Btn from "./Btn.vue";
import ComponentTitle from "./ComponentTitle.vue";
import Code from "./Code.vue";
import CodeIcon from "../Icons/Code.vue"
import CopyIcon from "../Icons/Copy.vue";
import EyeIcon from "../Icons/Eye.vue";
import Tooltip from "../Tooltip.vue";
import CodePreview from "./CodePreview.vue";

const isPreviewing = ref(true);
const { copy, isCopying } = useCopyToClipBoard()

const props = defineProps<{
  component: UIComponent;
}>();

const copying = () => {
  isCopying.value = true;
  copy(props.component.sourceCode);
  setTimeout(() => {
    isCopying.value = false;
  }, 1500);
};
</script>


