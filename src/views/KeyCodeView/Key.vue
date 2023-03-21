<template>
  <div
      class="uppercase rounded-2xl h-44 min-w-[11rem] px-5 text-6xl font-bold flex items-center justify-center border"
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
const baseDarkClass = ref('')

interface GreyKey {
  code: string;
  abr?: string;
  class?: string
}
const greyKeys = <GreyKey[]>[
  {
    code: 'ControlLeft',
    abr: 'CTRL',
    class: '!w-60'
  },
  {
    code: 'ControlRight',
    abr: 'CTRL',
    class: '!w-60'
  },
  {
    code: 'AltLeft',
  },
  {
    code: 'AltRight',
  },
  {
    code: 'ShiftLeft',
    class: '!w-96'
  },
  {
    code: 'ShiftRight',
    class: '!w-96'
  },
  {
    code: 'Tab',
  },
  {
    code: 'End',
  },
  {
    code: 'Home',
  },
  {
    code: 'CapsLock',
    abr: 'Caps'
  },
  {
    code: 'Backspace',
  },
  {
    code: 'PageUp',
    abr: 'pgup'
  },
  {
    code: 'PageDown',
    abr: 'pgdn'
  },
  {
    code: 'Delete',
    abr: 'del'
  },
  {
    code: 'ArrowUp',
    abr: '⌃'
  },
  {
    code: 'ArrowDown',
    abr: '⌃',
    class: 'rotate-180'
  },
  {
    code: 'ArrowLeft',
    abr: '⌃',
    class: '-rotate-90'
  },
  {
    code: 'ArrowRight',
    abr: '⌃',
    class: 'rotate-90'
  },
]

const customKeyClass = computed(() => {
  modifiedKey.value = ''
  baseDarkClass.value = 'bg-[#838A8C] text-white'

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

  if (greyKeys.filter(gk => gk.code === props.pressedKey.code).length > 0) {
    greyKeys.forEach(gk => {
      if(gk.code === props.pressedKey.code){

        if (gk.class){
          baseDarkClass.value += ` ${gk.class}`
        }

        if (gk.abr){
          modifiedKey.value = gk.abr
        }
      }
    })

    return baseDarkClass.value
  }

  return 'bg-neutral-50 text-neutral-500'
})

</script>
