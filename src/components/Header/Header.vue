<script lang="ts" setup>
import Navlink from "./Navlink.vue";
import Btn from "../Component/Btn.vue";
import Search from "../icons/Search.vue";
import Logo from "./Logo.vue";
import Container from "../Component/Container.vue";

const emit = defineEmits<{(e: 'search'): void}>()
</script>

<template>
  <header class="py-10">
    <Container>
      <div class="flex items-center justify-between">
        <Logo/>
        <div class="flex items-center gap-8">
          <Navlink to="/components">Components</Navlink>
          <Navlink to="/components">Donate</Navlink>
          <Btn :is-active="false" class="!p-0">
            <Search @click="emit('search')" />
          </Btn>
        </div>
      </div>
    </Container>
  </header>
</template>