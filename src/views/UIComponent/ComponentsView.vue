<template>
  <div>
    <Heading class="text-center">
      Build your next idea <br> even faster.

      <template #body>
        <p class="md:text-lg mx-auto max-w-lg text-slate-700">
          Beautifully designed, expertly crafted components. The perfect starting point for your next project.
        </p>

        <div class="w-full lg:w-1/2 mx-auto flex items-center  p-4 justify-between bg-white border rounded-lg">
          <input v-model="key" placeholder="Search..." autofocus class="text-sm outline-none w-full" type="text">
          <Search class="opacity-50" />
        </div>

      </template>
    </Heading>
    <div class="grid grid-cols-4 md:grid-cols-12 gap-10">
      <div
          v-for="group in filteredGroups"
          :key="group.id"
          class="col-span-4"
      >
        <ComponentGroup v-if="getComponentCount(group.id) > 0" :group="group"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useGroups } from "../../store/useGroups";
import { useHead } from "@vueuse/head";
import ComponentGroup from "../../components/UIComponent/ComponentGroup.vue";
import Search from "../../components/Icons/Search.vue";
import Heading from "../../components/Heading.vue";

const key = ref('')
const { filterGroups, getComponentCount } = useGroups()

const filteredGroups = computed(() => {
  return filterGroups(key.value)
})

useHead({
  title: 'Tailwind UI Components',
  meta: [
    {
      name: 'description',
      content: 'Beautifully designed, expertly crafted components. The perfect starting point for your next project.'
    }
  ]
})
</script>
