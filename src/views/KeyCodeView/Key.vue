<template>
  <div
      class="uppercase rounded-2xl h-44 w-44 text-6xl font-bold flex items-center justify-center shadow-xl border"
      :class="customKeyClass"
  >
    {{ modifiedKey || pressedKey.key }}
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Key as KeyInterface } from "../../models/Key";

const props = defineProps<{
  pressedKey: KeyInterface
}>()

const modifiedKey = ref('')
const greyKeys = [
  'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight'
]

const customKeyClass = computed(() => {
  modifiedKey.value = ''

  if (props.pressedKey.code === 'Escape') {
    modifiedKey.value = 'ESC'
    return 'bg-[#55D5B7] text-white'
  }

  if (props.pressedKey.code === 'Enter') {
    return 'bg-[#FF6832] !w-1/2 text-white'
  }

  if (props.pressedKey.code === 'Space') {
    return 'bg-[#FEBE00] !w-2/3'
  }

  if (greyKeys.includes(props.pressedKey.code)) {

    const baseClass = 'bg-[#838A8C] text-white'

    if (['ControlLeft', 'ControlRight'].includes(props.pressedKey.code)) {
      modifiedKey.value = 'CTRL'
      return `${baseClass} !w-60`
    }
    
  }

  if (['AltLeft', 'AltRight'].includes(props.pressedKey.code)) {
    return 'bg-[#838A8C] text-white'
  }

  return 'bg-white text-neutral-500'
})


</script>
