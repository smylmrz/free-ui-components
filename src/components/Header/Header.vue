<script lang="ts" setup>
import { ref } from "vue";
import Navlink from "./Navlink.vue";
import Btn from "../Component/Btn.vue";
import Search from "../icons/Search.vue";
import Hamburger from "../icons/Hamburger.vue"
import Logo from "./Logo.vue";
import Container from "../Component/Container.vue";
import Modal from "../Component/Modal/Modal.vue";
import SlideTransition from "../Component/Modal/SlideTransition.vue";

const emit = defineEmits<{(e: 'search'): void}>()

const mobileMenuIsOpen = ref(false)

const closeMobileMenu = () => {
  mobileMenuIsOpen.value = false
}
const pages = [
  {
    label: "Components",
    to: "/components",
  },
  {
    label: "Password Generator",
    to: "/password-generator",
  },
  {
    label: "Sentence Generator",
    to: "/sentence-generator",
  },
  // {
  //   label: "Donate",
  //   to: "/donate",
  // }
]
</script>

<template>
  <header v-bind="$attrs" class="py-5 sm:py-10">
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

  <Modal :is-open="mobileMenuIsOpen" @close="closeMobileMenu">
    <SlideTransition>
    <div class="w-2/3 absolute top-0 left-0 py-5 bg-white pl-5 h-full justify-between flex flex-col">
        <div>
          <div class="w-2/3 flex mb-4">
            <Logo />
          </div>
          <div class="flex flex-col gap-2">
            <Navlink
                v-for="page in pages"
                :key="page.label"
                :to="page.to"
                @click="closeMobileMenu"
            >
              {{ page.label }}
            </Navlink>
          </div>
        </div>

        <div>
          <p class="text-sm text-gray-600">&copy; 2023 UILand. All rights reserved.</p>
        </div>
      </div>
    </SlideTransition>
  </Modal>
</template>
