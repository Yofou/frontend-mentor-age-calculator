<template>
  <section
    class="max-w-[52.5rem] w-full p-14 bg-white flex flex-col gap-8 md:gap-0 rounded-[1.5rem] rounded-br-[6.25rem] md:rounded-br-[12.5rem]"
  >
    <div class="w-full grid grid-cols-[repeat(3,minmax(0,5.47rem))] md:grid-cols-[repeat(3,minmax(0,10rem))] gap-4 md:gap-8">
      <Input 
        v-model.number="day" 
        :min="0" 
        :max="31" 
        :errorMessage="errors.isDayValid.value"
        placeholder="DD"
      >
        Day
      </Input>
      <Input 
        v-model.number="month" 
        :min="0" 
        :max="12" 
        :errorMessage="errors.isMonthValid.value"
        placeholder="MM"
      >
        Month
      </Input>
      <Input 
        v-model.number="year" 
        :min="0" 
        :errorMessage="errors.isYearValid.value"
        placeholder="YYYY"
      >
        Year
      </Input>
    </div>

    <div class="w-full h-24 relative grid grid-cols-[1fr,max-content] items-center">
      <div class="w-full h-[1px] bg-line" />

      <button
        class="w-16 h-16 md:w-24 md:h-24 rounded-full grid bg-purple hover:bg-black transition-colors place-items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:static"
      >
        <Arrow class="w-6 h-6 md:w-11 md:h-11" />
      </button>
    </div>

    <div class="flex flex-col">
      <Unit :value="birthday?.years()">years</Unit>
      <Unit :value="birthday?.months()">months</Unit>
      <Unit :value="birthday?.days()">days</Unit>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps, ref } from "vue";
import { useBirthday } from "../hooks/useBirthday";
import Input from "./Input.vue";
import Unit from "./Unit.vue";
import Arrow from "./icons/Arrow.vue";
import { useErrors } from "../hooks/useErrors";

///// props/emits /////
defineProps();

///// refs, provide or inject then variables /////
const day = ref<number>();
const month = ref<number>();
const year = ref<number>();

///// computed /////
const birthday = useBirthday(day, month, year);
const errors = useErrors(day, month, year)

///// methods /////

///// watchers /////

///// lifecycle /////
</script>
