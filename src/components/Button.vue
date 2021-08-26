<template>
  <button
    :class="[
      'text-center text-white py-2 px-10 rounded-3xl shadow-sm transition',
      custom,
    ]"
    @click="$emit('clickHandle')"
  >
    {{ content }}
  </button>
</template>

<script setup>
import { defineProps, ref } from "vue";

emits: ["clickHandle"];

defineProps({
  content: {
    type: String,
    default: "",
  },
  custom: {
    type: String,
    default: "",
  },
});
</script>
