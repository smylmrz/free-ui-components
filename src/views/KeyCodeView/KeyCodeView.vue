<template>
  <div>
    <Heading class="text-center">
      <span class="text-blue-500">Key</span> Code

<!--      <template #body>-->
<!--        <p class="text-lg md:text-xl lg:text-2xl text-gray-500 font-medium">-->
<!--          Free fake API for testing and prototyping.-->
<!--        </p>-->
<!--      </template>-->
    </Heading>

    <div class="text-center" v-if="!pressedKey">
      Press any key to get the JavaScript event keycode info
    </div>
    <div v-else>
      <div class="mb-20 flex gap-10 items-center justify-center">
        <KeyComponent :pressed-key="pressedKey"/>
      </div>
      <div class="grid gap-10 grid-cols-3 md:grid-cols-12">
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
              {{ pressedKey.location }}
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
import { ref, onMounted } from "vue";
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

</script>