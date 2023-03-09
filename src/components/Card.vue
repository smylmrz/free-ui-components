<template>
  <div
      class="p-10 rounded-3xl"
      :class="isDark ? 'bg-gray-900' : 'bg-gray-100'"
  >
    <h3
        class="text-xl leading-normal md:text-2xl lg:text-3xl lg:leading-snug font-bold"
        :class="isDark && 'text-white'"
    >
      <slot name="title" />
    </h3>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  isDark?: boolean
}>(),{
  isDark: false
})
</script>