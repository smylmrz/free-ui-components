<template>
  <div>
    <Heading class="text-center">
      Random <span class="text-blue-500">Sentence</span> Generator.
    </Heading>

    <div class="flex mb-5 justify-between gap-2">
      <div class="flex flex-col sm:flex-row gap-2">
        <label class="bg-gray-200 rounded-md gap-2 flex items-center py-4 sm:py-0 px-4">
          <input v-model="sentenceAmount" type="number" min="1" class="text-center border-r border-gray-4300 appearance-none bg-transparent max-w-fit w-10">
          <span>
            Sentence(s) per Paragraph
          </span>
        </label>

        <label class="bg-gray-200 rounded-md gap-2 flex items-center py-4 sm:py-0 px-4">
          <input v-model="paragraphAmount" type="number" min="1" class="text-center border-r border-gray-4300 appearance-none bg-transparent max-w-fit w-10">
          <span>
            Paragraph(s)
          </span>
        </label>
      </div>

      <Btn :is-active="false" class="relative">
        <Tooltip v-if="isCopying" />
        <CopyIcon
            @click="copyPassword"
            :class="isCopying && '!stroke-sky-500 rotate-6 scale-125'"
        >
        </CopyIcon>
      </Btn>
    </div>

    <div v-html="sentence" class="p-4 text-xl rounded-md bg-slate-200 mb-5"></div>

    <button class="bg-gray-900 text-white rounded-md px-4 py-2" @click="generate">
      Regenerate
    </button>
  </div>
</template>

<script setup lang="ts">
import { useSentenceGenerator } from "./useSentenceGenerator";
import { useCopyToClipBoard } from "../../hooks/useCopyToClipBoard";
import Btn from "../../components/Component/Btn.vue";
import Tooltip from "../../components/Tooltip.vue";
import CopyIcon from "../../components/Icons/Copy.vue";
import Heading from "../../components/Heading.vue";

const { sentence, sentenceAmount, paragraphAmount, generate } = useSentenceGenerator()
const { copy, isCopying } = useCopyToClipBoard()

generate()

const copyPassword = () => {
  copy(sentence.value)
}
</script>