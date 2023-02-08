<script lang="ts" setup>
import { ComponentGroup } from "../models/ComponentGroup";
import { getComponents } from "../store/components/getComponents";
import UIComponent from "./Component/UIComponent.vue";

const props = defineProps<{
  group: ComponentGroup;
}>();

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
