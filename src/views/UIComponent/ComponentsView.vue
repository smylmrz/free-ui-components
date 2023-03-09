<script lang="ts" setup>
import Package from "../../components/Package.vue";
import { usePackages } from "../../store/usePackages";

const { packages } = usePackages()
</script>

<template>
  <div>
    <Package v-for="pckg in packages" :key="pckg.id" :pckg="pckg"/>
  </div>
</template>
