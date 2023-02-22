<script lang="ts" setup>
import { Group } from "../models/Group";
import { useComponents } from "../store/useComponents";
import UIComponent from "./Component/UIComponent.vue";
import { ref, watchEffect } from "vue";

const props = defineProps<{
  group: Group;
}>();

const { getComponents } = useComponents();

const components = ref(getComponents(props.group.id));

watchEffect(() => {
  components.value = getComponents(props.group.id);
})
</script>

<template>
  <div>
    <h2 class="text-3xl font-extrabold mb-10">{{ group.name }}</h2>
      <div class="space-y-20" v-if="components.length">
        <UIComponent
            v-for="component in components"
            :key="component.id"
            :component="component"
        />
      </div>
    <div class="font-semibold text-sm text-gray-500" v-else>This group has no components yet</div>
  </div>
</template>
