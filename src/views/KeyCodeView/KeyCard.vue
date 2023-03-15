<template>
  <div class="shadow rounded-md overflow-hidden">
    <div class="bg-blue-500 text-white p-3 text-center">
      <slot name="title"></slot>
    </div>
    <div class="px-3 h-40 font-medium text-xl flex items-center justify-center">
      <slot name="body"></slot>
    </div>
  </div>
</template>

