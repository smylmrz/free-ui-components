<script lang="ts" setup>
import { getGroups } from "../store/groups/getGroups";
import { getGroup } from "../store/groups/getGroup";
import { useRoute } from "vue-router";
import ComponentGroup from "../components/ComponentGroup.vue";

const route = useRoute();

const group = getGroup(route.params.group as string);
</script>
<template>
  <div class="py-10">
    <ComponentGroup :group="group"></ComponentGroup>
  </div>
</template>
