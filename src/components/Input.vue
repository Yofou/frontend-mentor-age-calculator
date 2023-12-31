<template>
  <label class="flex flex-col gap-1 md:gap-2 w-full">
    <span
      class="heading-s font-bold text-grey uppercase"
      :class="{ 'text-red': hasError }"
    >
      <slot />
    </span>

    <input
      v-model="modelValue"
      class="py-3 px-4 md:py-3 md:px-6 bg-white text-black placeholder:text-black/50 heading-m font-bold border border-line rounded-[.5rem]"
      :class="{ 'border-red': hasError }"
      type="number"
      :placeholder="props.placeholder"
      :min="min"
      :max="max"
    />

    <span v-if="hasError" class="body text-red italic">{{
      props.errorMessage
    }}</span>
  </label>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

///// props/emits /////
const props = defineProps<{
  placeholder?: string;
  min?: number;
  max?: number;
  errorMessage?: string | null;
}>();

///// refs, provide or inject then variables /////
const modelValue = defineModel<number>();

///// computed /////
const hasError = computed(() => {
  return props.errorMessage != null;
});

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
