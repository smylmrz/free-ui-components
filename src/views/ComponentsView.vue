<script lang="ts" setup>
import { useCategories } from "../store/useCategories";
import Category from "../components/Category.vue";
import Container from "../components/Component/Container.vue";

const { categories } = useCategories();
</script>

<template>
  <Container>
    <Category
      v-for="category in categories"
      :key="category.id"
      :category="category"
    />
  </Container>
</template>
