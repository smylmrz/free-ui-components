<template>
  <li class="px-4 py-3 hover:bg-gray-100">
    <RouterLink @click="emit('clicked')" class="flex justify-between items-center" :to="url">
      <span class="text-sm font-semibold">
        {{ group.name }}
      </span>
      <span class="text-xs text-gray-500">
        {{ pckg }} / {{ category }}
      </span>
    </RouterLink>
  </li>
</template>

<script lang="ts" setup>
import { Group } from "../models/Group";
import { useGroups } from "../store/useGroups";

const props = defineProps<{
  group: Group
}>()

const emit = defineEmits<{(e: 'clicked'): void}>()

const { generateGroupUrl } = useGroups()

const { url, pckg, category } = generateGroupUrl(props.group)
</script>