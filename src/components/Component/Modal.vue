<template>
  <Dialog
      class="relative z-50"
      :open="isOpen"
      @close="emit('close')"
      as="div"
      :initial-focus="null"
  >

    <div class="fixed inset-0 bg-gray-500/50 backdrop-blur" />

    <div class="fixed inset-0 min-h-full">
      <DialogPanel>
        <slot></slot>
      </DialogPanel>
    </div>

  </Dialog>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel } from "@headlessui/vue";

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{(e: 'close'): void}>()

</script>