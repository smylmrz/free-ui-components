<script lang="ts" setup>
import { useGroups } from "../store/useGroups";
import { useRoute } from "vue-router";
import Container from "../components/Component/Container.vue";
import GroupCard from "../components/GroupCard.vue";
import { usePackages } from "../store/usePackages";

const { getGroupsByPackage } = useGroups()
const route = useRoute()
const packageId = parseInt(route.params.packageId as string)
const { getPackage } = usePackages()
const pckg = getPackage(packageId)

const groups = getGroupsByPackage(pckg.id)


</script>

<template>
  <Container>
    <div class="space-y-4 mb-10">
      <h2 class="text-2xl font-semibold">
        {{ pckg.name }}
      </h2>
      <p class="text-sm text-slate-500">
        {{ pckg.description }}
      </p>
    </div>
    <div class="grid grid-cols-4 gap-5">
      <GroupCard v-for="group in groups" :key="group.id" :group="group" />
    </div>
  </Container>
</template>
