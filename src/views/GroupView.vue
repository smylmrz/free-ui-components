<script lang="ts" setup>
import { useGroups } from "../store/useGroups";
import { useRoute } from "vue-router";
import ComponentGroup from "../components/ComponentGroup.vue";
import Container from "../components/Component/Container.vue";
import { ref, watch } from "vue";

const route = ref(useRoute());
const { getGroupBySlug } = useGroups();

const group = ref(getGroupBySlug(route.value.params.group as string))

watch(route, (newRoute) => {
  group.value = getGroupBySlug(newRoute.params.group as string)
})

</script>
<template>
  <Container>
      <ComponentGroup :group="group" />
  </Container>
</template>
