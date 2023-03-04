<template>
  <Container>
    <div class="text-center space-y-5 mb-10 lg:mb-20">
      <h1 class="text-4xl md:text-5xl lg:text-6xl leading-tight lg:leading-tight font-extrabold">
        Random
        <span class="text-blue-500">Sentence</span> Generator.
      </h1>
    </div>

    <div class="flex mb-5 justify-between gap-2">
      <label class="gap-2 flex">
        <input v-model="amount" type="number" min="1" class="text-center max-w-fit w-10 border">
        <span>
          Number of sentences
        </span>
      </label>
      
      <Btn :is-active="false" class="relative">
        <Tooltip v-if="isCopying" />
        <CopyIcon
            @click="copyPassword"
            :class="isCopying && '!stroke-sky-500 rotate-6 scale-125'"
        >
        </CopyIcon>
      </Btn>
    </div>

    <div class="p-4 rounded-md bg-slate-200 mb-5">
      {{ sentence }}
    </div>

    <button class="bg-gray-900 text-white rounded-md px-4 py-2" @click="generate">
      Regenerate
    </button>
  </Container>
</template>

<script setup lang="ts">
import { useSentenceGenerator } from "./useSentenceGenerator";
import { useCopyToClipBoard } from "../../utils/copy";
import Container from "../../components/Component/Container.vue";
import Btn from "../../components/Component/Btn.vue";
import Tooltip from "../../components/Tooltip.vue";
import CopyIcon from "../../components/icons/Copy.vue";

const { sentence, amount, generate } = useSentenceGenerator()
const { copy, isCopying } = useCopyToClipBoard()

generate()

const copyPassword = () => {
  copy(sentence.value)
}
</script>