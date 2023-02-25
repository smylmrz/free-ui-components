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
  <div class="grid sm:grid-cols-4 relative border-b border-slate-100 py-10">
    <div class="col-span-1">
      <h3 class="text-md font-semibold sm:sticky sm:top-5">
        {{ category.name }}
      </h3>
    </div>
    <div
      v-if="getGroups(category.id).length"
      class="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
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
