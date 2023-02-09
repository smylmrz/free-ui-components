<script lang="ts" setup>
import { Group } from "../models/Group";
import { useComponents } from "../store/useComponents";
import UIComponent from "./Component/UIComponent.vue";

const props = defineProps<{
  group: Group;
}>();

const { getComponents } = useComponents()

const components = getComponents(props.group.id);
</script>

<template>
  <div>
    <h2 class="text-3xl font-extrabold mb-10">{{ group.name }}</h2>
    <UIComponent
      v-for="component in components"
      :key="component.id"
      :component="component"
    >
    </UIComponent>
  </div>
</template>
