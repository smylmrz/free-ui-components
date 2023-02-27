<script lang="ts" setup>
import Navlink from "./Navlink.vue";
import Btn from "../Component/Btn.vue";
import Search from "../icons/Search.vue";
import Hamburger from "../icons/Hamburger.vue"
import Logo from "./Logo.vue";
import Container from "../Component/Container.vue";
import Modal from "../Component/Modal.vue";
import { ref } from "vue";

const emit = defineEmits<{(e: 'search'): void}>()

const mobileMenuIsOpen = ref(false)

const pages = [
  {
    label: "Components",
    to: "/components",
  },
  {
    label: "Password Generator",
    to: "/password-generator",
  },
  // {
  //   label: "Donate",
  //   to: "/donate",
  // }
]
</script>

<template>
  <header class="py-5 sm:py-10">
    <Container>
      <div class="flex items-center justify-between">
        <Logo/>
        <div class="flex items-center gap-8">
          <div class="hidden sm:flex items-center gap-8">
            <Navlink 
              v-for="page in pages" 
              :key="page.label" 
              :to="page.to"
            >
              {{ page.label }}
            </Navlink>
          </div>
          <Btn :is-active="false" class="!p-0">
            <Search @click="emit('search')" />
          </Btn>
          <Btn :is-active="false" class="!p-0 block sm:hidden">
            <Hamburger @click="mobileMenuIsOpen = true" />
          </Btn>
        </div>
      </div>
    </Container>
  </header>

  <Modal :is-open="mobileMenuIsOpen" @close="mobileMenuIsOpen = false">
    <div class="w-2/3 mx-auto mt-20 py-5 bg-white rounded-md flex items-center flex-col">
      <Navlink 
        v-for="page in pages" 
        :key="page.label" 
        :to="page.to"
      >
        {{ page.label }}
      </Navlink>
    </div>
  </Modal>
</template>