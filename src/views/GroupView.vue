<script lang="ts" setup>
import { useGroups } from "../store/useGroups";
import { useRoute } from "vue-router";
import ComponentGroup from "../components/ComponentGroup.vue";

const route = useRoute();
const { getGroupBySlug } = useGroups()
const group = getGroupBySlug(route.params.group as string);
</script>
<template>
  <div class="py-10">
    <ComponentGroup :group="group"></ComponentGroup>
  </div>
</template>
