<template>
  <code>
      <textarea
        rows="20"
        class="rounded-md p-2 w-full resize-none outline-none"
        v-model="val"
        :placeholder="placeholder"
      />
  </code>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue: string;
  placeholder?: string
}>()

const emit = defineEmits<{ (e: "update:modelValue", modelValue: string): void }>()

const val = computed({
  get: () => {
    return props.modelValue
  },
  set: (newVal) => {
    emit("update:modelValue", newVal)
  }
})
</script>