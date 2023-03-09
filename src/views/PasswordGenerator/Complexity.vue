<template>
  <label class="flex gap-2 cursor-pointer">
    <input class="w-4" :checked="modelValue" @change="emit('update:modelValue', !modelValue)" type="checkbox">
    <span>
      <slot></slot>
    </span>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{ (e: 'update:modelValue', checked: boolean): void }>()
</script>