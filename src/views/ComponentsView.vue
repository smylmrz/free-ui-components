<script lang="ts" setup>
import { useSections } from "../store/useSections";
import Section from "../components/Section.vue";
import Container from "../components/Component/Container.vue";

const { sections } = useSections();
</script>

<template>
  <Container>
    <Section
      v-for="section in sections"
      :key="section.id"
      :section="section"
    ></Section>
  </Container>
</template>
