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
import { useHead } from "@vueuse/head";

const route = ref(useRoute());
const { getGroupBySlug } = useGroups();

const group = ref(getGroupBySlug(route.value.params.group as string))

watchEffect(() => {
  group.value = getGroupBySlug(route.value.params.group as string)
})

useHead({
  title: `${group.value.name} components`,
  meta: [
    {
      name: 'description',
      content: `Beautifully designed, expertly crafted ${group.value.name} components`
    }
  ]
})
</script>

