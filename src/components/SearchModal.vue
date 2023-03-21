<template>
  <Modal @close="isOpen = false" :is-open="isOpen">
    <div class="w-full px-10 sm:px-0 sm:w-2/3 md:w-1/2 lg:w-1/4 mx-auto mt-40">
      <div
          class="flex items-center  p-4 justify-between bg-white border rounded-lg"
          :class="hasResults && 'rounded-b-none'"
      >
        <input v-model="key" placeholder="Search..." autofocus class="text-sm outline-none w-full" type="text">
        <Search class="opacity-50" />
      </div>
      <div v-if="key" class="bg-white rounded-b-lg max-h-[13.75rem] overflow-y-auto">
        <ul>
          <li class="px-4 py-3 hover:bg-gray-100">
            <RouterLink class="flex justify-between items-center" to="/">
              <span class="text-sm font-semibold">

              </span>
            </RouterLink>
          </li>
        </ul>
        <div class="gap-2 h-40 flex flex-col items-center justify-center" v-if="hasNoResults">
          <h6 class="font-bold">
            No results found
          </h6>
          <p class="text-slate-500 w-2/3 text-xs text-center">
            We can’t find anything with that term at the moment, try searching something else.
          </p>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import Modal from "./Modal/Modal.vue";
import Search from "./Icons/Search.vue";

const key = ref('')
const isOpen = ref(false)
const hasResults = ref(false)
const hasNoResults = computed(() => key.value && !hasResults.value)
</script>

