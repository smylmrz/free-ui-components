<script lang="ts" setup>
import { ComponentGroup } from "../models/ComponentGroup";
import { RouterLink } from "vue-router";
import { computed } from "@vue/runtime-core";

const props = defineProps<{
  group: ComponentGroup;
}>();

const groupUrl = computed(() => `/elements/${props.group.name.toLowerCase()}`);
</script>

<template>
  <RouterLink
    :to="groupUrl"
    class="hover:bg-gray-50 p-2 block rounded-lg space-y-2"
  >
    <span class="border block rounded-lg overflow-hidden">
      <img :src="group.previewSource" alt="" />
    </span>
    <h6 class="text-sm text-semibold">{{ group.name }}</h6>
    <span class="text-xs font-semibold text-slate-500">10 Components</span>
  </RouterLink>
</template>
