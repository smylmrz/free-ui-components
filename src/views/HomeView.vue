<template>
  <div>
    <Heading class="text-center">
      Your <span class="text-blue-500">One-Stop-Shop</span> for Productivity

      <template #body>
        <p class="w-full md:w-2/3 mx-auto text-base md:text-lg lg:text-xl lg:leading-normal text-gray-500 font-medium">
          Our tools are designed to enhance your productivity and efficiency, so you can focus on building amazing products without
          spending much time on dummy tasks.
        </p>
      </template>
    </Heading>

    <div class="mt-20 lg:mt-40 grid grid-cols-4 md:grid-cols-12 gap-5 md:gap-10">

      <div class="col-span-4 md:col-span-5">
        <RouterLink to="/components">
          <Card is-dark class="space-y-10">
            <template #title>
              Customizable components you can drop into your Tailwind projects
            </template>
          </Card>
        </RouterLink>
      </div>

      <div class="col-span-4">
        <RouterLink to="/password-generator">
          <Card class="space-y-10">
            <template #title>
              Various generators to help you save some time or become productive
            </template>
          </Card>
        </RouterLink>
      </div>

      <div class="col-span-4 md:col-span-3">
        <Card is-dark class="!bg-blue-500 space-y-5">
          <template #title>
            Fake APIs
          </template>
          <span class="block text-blue-100 font-semibold">
            Coming soon
          </span>
        </Card>
      </div>

      <div class="col-span-4 md:col-span-3">
        <RouterLink to="/json-formatter">
          <Card class="space-y-10">
            <template #title>
              Easily validate and format your JSON
            </template>
          </Card>
        </RouterLink>
      </div>

      <div class="col-span-4">
        <RouterLink to="/javascript-key-code-previewer">
          <Card is-dark class="space-y-5">
            <template #title>
              Javascript Key Code Previewer
            </template>
          </Card>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Card from "../components/Card.vue";
import Heading from "../components/Heading.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: 'Your One-Stop-Shop for Productivity',
  meta: [
    {
      name: 'description',
      content: 'Our tools are designed to enhance your productivity and efficiency, so you can focus on building amazing products without spending much time on dummy tasks.'
    }
  ]
})
</script>