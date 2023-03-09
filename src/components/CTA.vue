<script lang="ts" setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = withDefaults(defineProps<{
  type: "primary" | "secondary";
  to: string
}>(), {
  type: "primary"
});

const isPrimary = computed(() => props.type === "primary")
</script>

<template>
  <RouterLink
      :to="to"
      :class="{
        'inline-flex text-sm duration-300 border px-5 py-3 rounded-lg font-semibold': true,
        'bg-gray-900 border-transparent text-white hover:bg-gray-700': isPrimary,
        'bg-slate-50 text-gray-900': !isPrimary,
      }"
  >
    <slot></slot>
  </RouterLink>
</template>
