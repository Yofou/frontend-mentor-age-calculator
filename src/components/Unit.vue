<template>
  <p class="heading-l italic font-extrabold text-black flex gap-2">
    <span class="text-purple">
      <template v-if="props.value == null">- -</template>
      <template v-else>{{props.value}}</template>
    </span>
    <slot />
  </p>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

///// props/emits /////
const props = defineProps<{
  value?: number;
}>();

///// refs, provide or inject then variables /////

///// computed /////

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
