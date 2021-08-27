<template>
  <div
    class="
      fixed
      top-0
      left-0
      w-full
      min-h-full
      bg-black bg-opacity-50
      flex
      items-center
      justify-center
      text-white
      md:text-10xl
      text-9xl
    "
  >
    <span class="animate-ping">
      {{ displayCount }}
    </span>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  countdown: {
    type: Number,
    default: 5,
  },
});

const timer = ref("");

onMounted(() => {
  timer.value = setInterval(startCountdown, 1000);
});
onBeforeUnmount(() => {
  clearInterval(timer.value);
});

let displayCount = ref(props.countdown);
const startCountdown = () => {
  if (displayCount.value <= 0) {
    clearInterval(timer.value);
    return;
  }
  displayCount.value = displayCount.value - 1;
};
</script>
