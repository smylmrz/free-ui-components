<template>
  <Dialog
      class="relative z-50"
      :open="isOpen"
      @close="emit('close')"
      as="div"
      :initial-focus="null"
  >

    <div class="fixed inset-0 bg-white/30 backdrop-blur" />

    <DialogPanel>
      <div class="fixed flex items-start justify-center inset-0 min-h-full">
        <slot></slot>
      </div>
    </DialogPanel>

  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel } from "@headlessui/vue";

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{(e: 'close'): void}>()

</script>