<script lang="ts" setup>
import { getGroups } from "../store/groups/getGroups";

const groups = getGroups(1);
</script>
<template>
  <ComponentGroup
    v-for="group in groups"
    :key="group.id"
    :group="group"
  ></ComponentGroup>
</template>
