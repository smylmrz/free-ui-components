<script lang="ts" setup>
import { useTabs } from "../store/useTabs";
import { useGroups } from "../store/useGroups";
import { ref, watchEffect } from "vue";
import { Group } from "../models/Group";
import CTA from "../components/CTA.vue";
import Container from "../components/Component/Container.vue";
import Tab from "../components/Tab.vue";
import GroupCard from "../components/GroupCard.vue";

const { tabs, setCurrentTab, currentTab, isCurrentTab } = useTabs()
const { getGroupsByPackage } = useGroups()

const groups = ref<Group[]>([])

watchEffect(() => {
  groups.value = getGroupsByPackage(currentTab.value.id).slice(0, 12)
})

</script>

<template>
  <Container>
    <div class="relative">
      <div class=" flex flex-col items-center text-center relative space-y-8 z-10">
        <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-light">
          Build your next idea <br> even faster.
        </h1>
        <p class="md:text-lg max-w-lg text-slate-700">
          Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.
        </p>
        <CTA to="/components" type="primary">
          Start exploring
          <span class="hidden ml-1 text-slate-400 sm:inline">→</span>
        </CTA>
      </div>
    </div>

    <div class="py-20">
      <div class="flex gap-5 border-t-2 border-slate-200">
        <Tab
            @click="setCurrentTab(tab)"
            v-for="tab in tabs" :tab="tab" :key="tab.id"
            :is-active="isCurrentTab(tab)"
        />
      </div>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
      <GroupCard v-for="group in groups" :key="group.id" :group="group" />
    </div>

    <div class="max-w-fit mt-10 mx-auto">
      <CTA type="primary" :to="`/${currentTab.slug}/${currentTab.id}`">Show all</CTA>
    </div>
  </Container>
</template>
