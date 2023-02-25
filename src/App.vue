<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
import Modal from "./components/Component/Modal.vue";
import { computed, ref } from "vue";
import Search from "./components/icons/Search.vue";
import { useGroups } from "./store/useGroups";
import SearchResult from "./components/SearchResult.vue";

const isSearchOpen = ref(false)
const key = ref('')
const { filterGroups, generateGroupUrl } = useGroups()
const groups = computed(() => filterGroups(key.value))
const closeSearch = () => {
  isSearchOpen.value = false
  key.value = ''
}

const hasResults = computed(() => key.value && groups.value.length >= 0)

const hasNoResults = computed(() => key.value && groups.value.length === 0)
</script>

<template>
  <Modal @close="closeSearch" :is-open="isSearchOpen">
    <div class="w-1/2 lg:w-1/4 mx-auto mt-40">
      <div
          class="flex items-center  p-4 justify-between bg-white border rounded-lg"
          :class="hasResults && 'rounded-b-none'"
      >
        <input v-model="key" placeholder="Search..." autofocus class="text-sm outline-none w-full" type="text">
        <Search class="opacity-50" />
      </div>
      <div v-if="key" class="bg-white rounded-b-lg max-h-[13.75rem] overflow-y-auto">
        <ul class="">
          <SearchResult @clicked="closeSearch" v-for="group in groups" :key="group.id" :group="group" />
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
  <Header @search="isSearchOpen = true" class="relative z-10" />
  <div class="py-10 md:py-20">
    <RouterView />
  </div>
  <Footer class="relative z-10" />
</template>
