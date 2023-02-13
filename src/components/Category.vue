<script lang="ts" setup>
import { Category } from "../models/Category";
import { useGroups } from "../store/useGroups";
import GroupCard from "./GroupCard.vue";

defineProps<{
  category: Category;
}>();

const { getGroups } = useGroups()

</script>

<template>
  <div class="grid grid-cols-8 border-b border-slate-100 py-10">
    <div class="col-span-2">
      <h3 class="text-md font-semibold">
        {{ category.name }}
      </h3>
    </div>
    <div
      v-if="getGroups(category.id).length"
      class="col-span-6 grid grid-cols-3 gap-5"
    >
      <GroupCard
        class="col-span-1"
        v-for="group in getGroups(category.id)"
        :key="group.id"
        :group="group"
      />
    </div>
    <div class="col-span-6 text-sm font-semibold text-slate-500" v-else>
      This section has no groups yet
    </div>
  </div>
</template>
