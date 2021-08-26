<template>
  <div>
    <Card
      :icon="sectionData.icon"
      :title="sectionData.title"
      :placeholder="sectionData.placeholder"
      v-model:content="sectionData.key.value"
      readonly
    />
    <div class="flex justify-evenly mt-4">
      <Button
        content="複製"
        custom="bg-green-400 hover:bg-green-500"
        @clickHandle="copy"
      />
      <Button
        content="下載"
        custom="bg-green-400 hover:bg-green-500"
        @clickHandle="download"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import Card from "./Card.vue";
import Button from "./Button.vue";

const props = defineProps({
  sectionData: {
    type: Object,
    default: () => ({}),
  },
});

const copy = async () => {
  navigator.clipboard
    .writeText(props.sectionData.key.value)
    .then(() => alert("複製成功"))
    .catch(() => alert("複製失敗"));
};

const download = () => {
  console.log(4);
};
</script>
