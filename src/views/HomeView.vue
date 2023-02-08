<script lang="ts" setup>
import Section from "../components/Section.vue";
import { groups } from "../store/groups/groups";
import { sections } from "../store/sections";
</script>

<template>
  <Section
    v-for="section in sections"
    :key="section.id"
    :section="section"
  ></Section>
</template>
