<template>
  <div>
    <Heading class="text-center">
      Javascript <span class="text-blue-500">Key Code</span> Event Tool

      <template #body>
        <p class="text-lg md:text-xl lg:text-2xl text-gray-500 font-medium">
          Press any key and instantly get the JavaScript Key information.
        </p>
      </template>
    </Heading>

<!--    <div class="text-center text-xl" v-if="!pressedKey">-->
<!--      Press any key to get the JavaScript event keycode info-->
<!--    </div>-->
    <div v-if="pressedKey">
      <div class="mb-20 flex gap-10 items-center justify-center">
        <KeyComponent :pressed-key="pressedKey"/>
      </div>
      <div class="border-t pt-20 grid gap-10 grid-cols-3 md:grid-cols-12">
        <div class="col-span-3">
          <KeyCard>
            <template #title>
              e.key
            </template>
            <template #body>
              {{ pressedKey.key }}
            </template>
          </KeyCard>
        </div>
        <div class="col-span-3">
          <KeyCard>
            <template #title>
              e.location
            </template>
            <template #body>
              {{ keyLocation }}
            </template>
          </KeyCard>
        </div>
        <div class="col-span-3">
          <KeyCard>
            <template #title>
              e.code
            </template>
            <template #body>
              {{ pressedKey.code }}
            </template>
          </KeyCard>
        </div>
        <div class="col-span-3">
          <KeyCard>
            <template #title>
              e.keyCode
            </template>
            <template #body>
              {{ pressedKey.keyCode }}
            </template>
          </KeyCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import Heading from "../../components/Heading.vue";
import KeyCard from "./KeyCard.vue";
import KeyComponent from "./Key.vue";
import { Key as KeyInterface } from "../../models/Key";

const pressedKey = ref<KeyInterface | null>(null)

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    e.preventDefault()
    pressedKey.value = {
      code: e.code,
      key: e.key,
      keyCode: e.keyCode,
      which: e.which,
      location: e.location,
    }
  })
})

const keyLocation = computed(() => {
  if (!pressedKey.value) {
    return
  }

  switch (pressedKey.value.location){
    case 1:
      return 'Left side';

    case 2:
      return 'Right side';

    default:
      return 'General'
  }
})
</script>