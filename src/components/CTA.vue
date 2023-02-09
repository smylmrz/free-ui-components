<script lang="ts" setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps<{
  type: "primary" | "secondary";
  to: string
}>();

const isPrimary = computed(() => props.type === "primary")
</script>

<template>
  <RouterLink
      :to="to"
      :class="{
        'inline-flex duration-300 border px-4 py-3 rounded-md font-semibold': true,
        'bg-gray-900 border-transparent text-white hover:bg-gray-600': isPrimary,
        'bg-slate-50 text-gray-900': !isPrimary,
      }"
  >
    <slot></slot>
  </RouterLink>
</template>
