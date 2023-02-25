<script setup lang="ts">
import { Tab } from "../models/Tab";

defineProps<{
  tab: Tab;
  isActive: boolean
}>()

</script>

<template>
    <div
        class="pt-5 md:pt-10 w-full duration-300 -mt-0.5 cursor-pointer border-t-2 border-gray-200"
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
      <p class="pr-5 md:pr-10 mt-2 text-xs md:text-sm sm:leading-10 text-slate-700">
        {{ tab.body }}
      </p>
    </div>
</template>

