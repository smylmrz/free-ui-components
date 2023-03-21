<template>
  <div class="space-y-8 mb-10 lg:mb-20">
    <h1 class="text-4xl md:text-5xl lg:text-6xl lg:leading-tight font-extrabold">
      <slot></slot>
    </h1>
    <slot name="body"></slot>
  </div>
</template>