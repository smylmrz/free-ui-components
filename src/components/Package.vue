<script setup lang="ts">
import { useCategories } from "../store/useCategories";
import { Package } from "../models/Package";
import Category from "./Category.vue";

const props = defineProps<{
  package: Package
}>()

const { getCategories } = useCategories()

const categories = getCategories(props.package.id)
</script>

<template>
  <div>
    <div class="border-b space-y-4 border-slate-100 py-10">
      <h2 class="text-2xl font-semibold">
        {{ package.name }}
      </h2>
      <p class="text-sm text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, ipsam!</p>
    </div>
    <Category
        v-for="category in categories"
        :key="category.id"
        :category="category"
    />
  </div>
</template>

