<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog
        class="relative z-50"
        @close="emit('close')"
        as="div"
        :initial-focus="null"
    >

      <FadeTransition>
        <div class="fixed inset-0 bg-gray-200/50 backdrop-blur" />
      </FadeTransition>

      <div class="fixed inset-0 min-h-full">
        <DialogPanel>
          <slot></slot>
        </DialogPanel>
      </div>

    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { TransitionRoot, Dialog, DialogPanel } from "@headlessui/vue";
import FadeTransition from "./FadeTransition.vue";

defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{(e: 'close'): void}>()

</script>