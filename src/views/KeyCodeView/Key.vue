<template>
  <div
      class="uppercase rounded-xl md:rounded-2xl h-24 md:h-44 min-w-[6rem] md:min-w-[11rem] text-3xl md:text-6xl font-bold flex items-center justify-center border"
      :class="customKeyClass"
  >
    {{ modifiedKey || pressedKey.key }}
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Key as KeyInterface } from "../../models/Key";
import { kBKeys } from "./kBKeys";

const props = defineProps<{
  pressedKey: KeyInterface
}>()

const modifiedKey = ref('')
const baseClass = ref('')

const customKeyClass = computed(() => {
  modifiedKey.value = ''
  baseClass.value = 'px-5 bg-neutral-50 text-neutral-500'

  kBKeys.forEach(kbk => {
    if(kbk.code === props.pressedKey.code){

      if (kbk.class){
        baseClass.value = `${kbk.class}`
      }

      if (kbk.modifier){
        modifiedKey.value = kbk.modifier
      }
    }
  })

  return baseClass.value
})

</script>

<style scoped>
.digit {
  @apply justify-start items-end text-neutral-500 p-7 bg-neutral-50
}

.dark {
  @apply bg-[#838A8C] text-white
}
</style>