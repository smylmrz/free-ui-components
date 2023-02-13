<script lang="ts" setup>
import Container from "../components/Component/Container.vue";
import Package from "../components/Package.vue";
import { usePackages } from "../store/usePackages";

const { packages } = usePackages()
</script>

<template>
  <Container>
    <Package v-for="pckg in packages" :key="pckg.id" :package="pckg"/>
  </Container>
</template>
