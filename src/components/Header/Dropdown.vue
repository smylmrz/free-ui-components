<template>
<div class="rounded-md overflow-hidden border w-60 shadow hidden group-hover:block absolute top-full left-0">
    <ul>
      <li v-for="page in pages" :key="page.label">
          <NavLink
              class="block px-3 py-2 bg-white hover:bg-gray-100"
              :to="page.to"
          >
          {{ page.label }}
          </NavLink>
      </li>
    </ul>
</div>
</template>

<script lang="ts" setup>
import { Page } from './pages';
import NavLink from './NavLink.vue';

defineProps<{
    pages: Page[]
}>()

</script>