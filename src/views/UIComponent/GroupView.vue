<template>
  <div>
    <ComponentGroup :group="group" />
  </div>
</template>

<script lang="ts" setup>
import { useGroups } from "../../store/useGroups";
import { useRoute } from "vue-router";
import ComponentGroup from "../../components/UIComponent/ComponentGroup.vue";
import { ref, watchEffect } from "vue";

const route = ref(useRoute());
const { getGroupBySlug } = useGroups();

const group = ref(getGroupBySlug(route.value.params.group as string))

watchEffect(() => {
  group.value = getGroupBySlug(route.value.params.group as string)
})
</script>

