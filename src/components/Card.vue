<template>
  <section>
    <div class="flex items-center mb-4">
      <img :src="imgSrc(icon)" />
      <!-- <img :src="`./src/components/img/${icon}`" /> -->
      <h2 class="text-xl font-black ml-2">{{ title }}</h2>
      <slot name="subTitle"></slot>
    </div>
    <textarea
      class="
        w-full
        rounded-md
        outline-none
        p-4
        resize-none
        shadow-xl
        border border-transparent
        transition
        focus:border-blue-500
      "
      cols="30"
      :rows="rows"
      :placeholder="placeholder"
      :value="content"
      :readonly="readonly"
      @input="$emit('update:content', $event.target.value)"
    ></textarea>
    <p class="text-right h-6">{{ remark }}</p>
  </section>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: String,
    default: "10",
  },
  remark: {
    type: String,
    default: "",
  },
});

const imgSrc = (src) => {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*.svg");
  return modules[path].default;
};
</script>
