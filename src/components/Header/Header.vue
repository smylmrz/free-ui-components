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
              </NavLink>
              <Dropdown v-if="page.subpages" :pages="page.subpages" />
            </li>
          </ul>
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
          <ul class="flex flex-col gap-2">
            <li
                v-for="page in pages"
                :key="page.label"
            >
              <NavLink
                  :to="page.to"
                  @click="closeMobileMenu"
              >
                {{ page.label }}
              </NavLink>
              <div class="pl-5 mt-2" v-if="page.subpages">
                <ul class="flex flex-col gap-2">
                  <li v-for="subpage in page.subpages" :key="subpage.label">
                    <NavLink
                        :to="subpage.to"
                        @click="closeMobileMenu"
                    >
                      {{ subpage.label }}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <p class="text-sm text-gray-600">&copy; 2023 UILand. All rights reserved.</p>
        </div>
      </div>
    </SlideTransition>
  </Modal>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { pages } from "./pages";
import NavLink from "./NavLink.vue";
import Btn from "../UIComponent/Btn.vue";
import Hamburger from "../Icons/Hamburger.vue"
import Logo from "./Logo.vue";
import Container from "../Container.vue";
import Modal from "../Modal/Modal.vue";
import SlideTransition from "../Modal/SlideTransition.vue";
import Dropdown from "./Dropdown.vue";

const mobileMenuIsOpen = ref(false)

const closeMobileMenu = () => {
  mobileMenuIsOpen.value = false
}
</script>
