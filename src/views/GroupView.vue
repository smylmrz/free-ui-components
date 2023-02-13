<script lang="ts" setup>
import { useGroups } from "../store/useGroups";
import { useRoute } from "vue-router";
import ComponentGroup from "../components/ComponentGroup.vue";
import Container from "../components/Component/Container.vue";

const route = useRoute();
const { getGroupBySlug } = useGroups();
const group = getGroupBySlug(route.params.group as string);
</script>
<template>
  <Container>
      <ComponentGroup :group="group" />
  </Container>
</template>
