<template>
  <div>
    <div class="relative flex flex-col items-center text-center relative space-y-8 z-10">
      <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold">
        Build your next idea <br> even faster.
      </h1>
      <p class="md:text-lg max-w-lg text-slate-700">
        Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.
      </p>
    </div>

    <div class="mt-20 lg:mt-40 grid grid-cols-4 md:grid-cols-12 gap-10">

      <div class="col-span-4 md:col-span-5">
        <Card is-dark class="space-y-10">
          <template #title>
            Customizable components you can drop into your Tailwind projects
          </template>
          <RouterLink class="block text-blue-300 font-semibold" to="/components">
            Browse all components
            <span class="sm:inline">→</span>
          </RouterLink>
        </Card>
      </div>

      <div class="col-span-4">
        <Card class="space-y-10">
          <template #title>
            Various generators to help you save some time or become productive
          </template>
          <RouterLink class="block text-blue-500 font-semibold" to="/password-generator">
            See all generators
            <span class="sm:inline">→</span>
          </RouterLink>
        </Card>
      </div>

      <div class="col-span-4 md:col-span-3">
        <Card is-dark class="flex flex-col items-center justify-center !bg-blue-500 space-y-5">
          <template #title>
            Fake APIs
          </template>
          <span class="block text-blue-100 font-semibold">
            Coming soon
          </span>
        </Card>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Card from "../components/Card.vue";

</script>