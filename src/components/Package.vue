<script setup lang="ts">
import { useCategories } from "../store/useCategories";
import { Package } from "../models/Package";
import Category from "./Category.vue";

const props = defineProps<{
  pckg: Package
}>()

const { getCategories } = useCategories()

const categories = getCategories(props.pckg.id)
</script>

<template>
  <div>
    <div class="border-b space-y-4 border-slate-100 py-10">
      <h2 class="text-2xl font-semibold">
        {{ pckg.name }}
      </h2>
      <p class="text-sm text-slate-500">
        {{ pckg.description }}
      </p>
    </div>
    <Category
        v-for="category in categories"
        :key="category.id"
        :category="category"
    />
  </div>
</template>

