<template>
  <RouterLink
    :to="url"
    class="hover:bg-gray-50 p-2 block rounded-lg space-y-2"
  >
    <span class="border block rounded-lg overflow-hidden">
      <img :src="group.previewSource" :alt="group.name" />
    </span>
    <h6 class="text-sm text-semibold">{{ group.name }}</h6>
<!--    <span class="text-xs font-semibold text-slate-500">{{ componentCount }} Components</span>-->
  </RouterLink>
</template>

<script lang="ts" setup>
import { Group as GroupInterface } from "../../models/Group";
import { RouterLink } from "vue-router";
import { useGroups } from "../../store/useGroups";

const props = defineProps<{
  group: GroupInterface;
}>();

const { generateGroupUrl, getComponentCount } = useGroups()
const { url } = generateGroupUrl(props.group)
</script>