<template>
  <div class="space-y-2">
    <div class="font-semibold">
      Generated Password:
    </div>
    <div class="relative flex items-center w-full text-xl md:text-2xl lg:text-4xl bg-slate-100 rounded-md relative p-3 whitespace-nowrap overflow-hidden">
      <slot></slot>
      <slot name="right"></slot>
    </div>
  </div>
</template>
