<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink class="flex text-xl lg:text-2xl group font-bold" to="/">
    <span class="duration-300 text-blue-500 group-hover:animate-[float_2s_linear_infinite]">UI</span>
    <span class="duration-300 text-gray-600 group-hover:animate-[float2_2s_linear_infinite]">Land</span>
  </RouterLink>
</template>

