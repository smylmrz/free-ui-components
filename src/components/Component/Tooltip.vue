<script lang="ts" setup>

const responses = [
    'Copied!', 'Ready to go!', 'Enjoy!', 'That was easy!', 'Yay!'
]

const response = responses.at(Math.floor(Math.random() * responses.length));
</script>


<template>
  <Transition>
    <div class="alert whitespace-nowrap min-w-fit rounded-md text-xs py-1 px-2 absolute -top-6 left-1/2 -translate-x-1/2 bg-sky-500 text-white">
      <slot>
        {{ response }}
      </slot>
    </div>
  </Transition>
</template>


<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translate(-50%, 10px);
}

.alert::after {
  position: absolute;
  content: '';
  @apply border-4 border-sky-500 border-t-transparent border-r-transparent -rotate-45 top-full -translate-y-1 left-1/2 -translate-x-1/2;
}
</style>