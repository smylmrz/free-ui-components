<script lang="ts" setup>
import { ref } from "vue";
import { pages } from "./pages";
import NavLink from "./NavLink.vue";
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


</script>

<template>
  <header v-bind="$attrs" class="py-3 sm:py-5">
    <Container>
      <div class="flex items-center justify-between">
        <Logo/>
        <div class="flex items-center gap-8">
          <ul class="hidden sm:flex items-center gap-8">
            <li
              v-for="page in pages"
              :key="page.label"
              class="relative group py-5"
            >
              <NavLink :to="page.to">
                {{ page.label }}
                <div v-if="page.subpages" class="rounded-md border w-60 shadow hidden group-hover:block absolute top-full left-0">
                  <ul>
                    <li v-for="subpage in page.subpages" :key="subpage.label">
                      <NavLink
                          class="block px-3 py-2 hover:bg-gray-100 hover:text-blue-500"
                          :to="subpage.to"
                      >
                        {{ subpage.label }}
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </NavLink>
            </li>
          </ul>
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
            <NavLink
                v-for="page in pages"
                :key="page.label"
                :to="page.to"
                @click="closeMobileMenu"
            >
              {{ page.label }}
            </NavLink>
          </div>
        </div>

        <div>
          <p class="text-sm text-gray-600">&copy; 2023 UILand. All rights reserved.</p>
        </div>
      </div>
    </SlideTransition>
  </Modal>
</template>
