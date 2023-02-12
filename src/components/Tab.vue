<script setup lang="ts">

import Tab from "./Tab.vue";

defineProps<{
  tab: Tab;
  isActive: boolean
}>()

</script>

<template>
    <div
        class="-mt-0.5 cursor-pointer border-t-2 border-gray-200 pt-10"
        :class="isActive && '!border-sky-500'"
    >
      <h3 class="font-semibold"
        :class="isActive && 'text-sky-500'"
      >
        <button>
          <span>
            {{ tab.title }}
          </span>
        </button>
      </h3>
      <p class="mt-2 hidden text-sm leading-6 text-slate-700 md:block pr-10">
        {{ tab.body }}
      </p>
    </div>
</template>

