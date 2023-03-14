<template>
  <code>
      <textarea
        rows="20"
        class="rounded-md p-2 w-full resize-none outline-none"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
      />
  </code>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  placeholder?: string
}>()

const emit = defineEmits<{ (e: "update:modelValue", modelValue: string): void }>()
</script>