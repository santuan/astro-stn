<template>
  <div class="lg:hidden">
    <button
      class="fixed inset-0 bg-white/80 dark:bg-gray-900/80 duration-300 backdrop-blur-md"
      @click="show = !show"
      :class="[show ? '  opacity-0 select-none z-0 ' : ' opacity-100 z-[998] ']"
    />
    <button
      class="fixed dark:bg-gray-900 opacity-80 hover:opacity-100 p-2 dark:text-gray-100 bg-gray-100 text-gray-900 right-0 z-[999] flex top-2"
      @click="show = !show"
    >
      <span>Menú</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
    <div
      class="fixed right-0 top-0 bottom-0 bg-white dark:bg-gray-900 dark:text-white duration-700 w-64 p-3 z-[1000] flex flex-col"
      :class="[show ? '  translate-x-full ' : ' translate-x-0  ']"
    >
      <a id="home" href="/"> <span>Inicio</span> </a>
      <a id="home" href="/blog"> <span>Blog</span> </a>
      <a id="home" href="/about"> <span>Contacto</span> </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const show = ref(true);
</script>
