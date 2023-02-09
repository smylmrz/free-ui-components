<script lang="ts" setup>
import Section from "../components/Section.vue";

import { useSections } from "../store/useSections";

const { sections } = useSections()
</script>

<template>
  <Section
    v-for="section in sections"
    :key="section.id"
    :section="section"
  ></Section>
</template>
