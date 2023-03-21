<script lang="ts" setup>
defineProps<{
  code: string;
}>();
</script>

<template>
  <div class="overflow-x-auto bg-slate-900">
    <pre class="flex">
        <code v-html="code" class="p-4 text-white"></code>
    </pre>
  </div>
</template>
