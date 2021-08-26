<template>
  <div>
    <Card
      :icon="sectionData.icon"
      :title="sectionData.title"
      :placeholder="sectionData.placeholder"
      v-model:content="sectionData.key.value"
      readonly
    />
    <div class="flex justify-evenly mt-2">
      <Button
        content="複製"
        custom="bg-green-400 hover:bg-green-500"
        @clickHandle="copy"
      />
      <a
        class="
          bg-green-400
          hover:bg-green-500
          text-center text-white
          py-2
          px-10
          rounded-3xl
          shadow-sm
          transition
        "
        :href="`data:text/plain;charset=utf-8,${sectionData.key.value}`"
        :download="titleContent"
        >下載</a
      >
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
  titleContent: {
    type: String,
    default: "",
  },
});

const copy = async () => {
  navigator.clipboard
    .writeText(props.sectionData.key.value)
    .then(() => alert("複製成功"))
    .catch(() => alert("複製失敗"));
};
</script>
