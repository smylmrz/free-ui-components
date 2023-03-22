<template>
  <div class="space-y-20" v-if="components">
    <div class="space-y-20" v-if="components.length">
      <UIComponent v-for="component in components" :component="component" :key="component.id" />
    </div>
    <div v-else class="text-center space-y-10">
      <p class="font-medium text-xl">
        No Components Found
      </p>
      <CTA to="/components">Back to components</CTA>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { useGroups } from "../../store/useGroups";
import { useRoute } from "vue-router";
import { ref, watchEffect } from "vue";
import { useHead } from "@vueuse/head";
import { useComponents } from "../../store/useComponents";
import UIComponent from "../../components/UIComponent/UIComponent.vue";
import CTA from "../../components/CTA.vue";

const route = ref(useRoute());
const { getGroupBySlug } = useGroups();

const group = ref(getGroupBySlug(route.value.params.group as string))
const { getComponents } = useComponents()

const components = getComponents(group.value?.id)

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

