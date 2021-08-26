<template>
  <Card
    :icon="sectionData.icon"
    :title="sectionData.title"
    :placeholder="sectionData.placeholder"
    v-model:remark="sectionData.remark.value"
    v-model:content="sectionData.key.value"
  />
</template>

<script setup>
import { defineProps } from "vue";

import Card from "./Card.vue";

defineProps({
  sectionData: {
    type: Object,
    default: () => ({}),
  },
});
</script>
