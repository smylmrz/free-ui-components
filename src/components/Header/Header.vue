<script lang="ts" setup>
import Navlink from "./Navlink.vue";
import Btn from "../Component/Btn.vue";
import Search from "../icons/Search.vue";
import Logo from "./Logo.vue";
</script>

<template>
  <header class="py-10">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center justify-between">
        <Logo/>
        <div class="flex items-center gap-8">
          <Navlink to="/components">Components</Navlink>
          <Navlink to="/components">Donate</Navlink>
          <Btn :is-active="false" class="!p-0">
            <Search />
          </Btn>
        </div>
      </div>
    </div>
  </header>
</template>