import { type Ref, computed } from "vue";
import zod from "zod";
import dayjs from "dayjs";

const today = dayjs();

const dayVal = zod
  .number({ invalid_type_error: 'This field is required' })
  .min(1, "Must be a valid day")
  .max(31, "Must be a valid day");
const monthVal = zod
  .number({ invalid_type_error: 'This field is required' })
  .min(1, "Must be a valid month")
  .max(12, "Must be a valid month");
const yearVal = zod
  .number({ invalid_type_error: 'This field is required' })
  .min(0, "Must be in the future")
  .max(today.year(), "Must be in the past");

export const useErrors = (
  day: Ref<number | undefined>,
  month: Ref<number | undefined>,
  year: Ref<number | undefined>
) => {
  const isDayValid = computed(() => {
    if (day.value == null) {
      return null;
    }

    const result = dayVal.safeParse(day.value);
    if (!result.success) {
      return result.error.errors[0].message;
    }

    return null;
  });

  const isMonthValid = computed(() => {
    if (month.value == null) {
      return null;
    }

    const result = monthVal.safeParse(month.value);
    if (!result.success) {
      return result.error.errors[0].message;
    }

    return null;
  });

  const isYearValid = computed(() => {
    if (year.value == null) {
      return null;
    }

    const result = yearVal.safeParse(year.value);
    if (!result.success) {
      return result.error.errors[0].message;
    }

    return null;
  });

  return {
    isDayValid,
    isMonthValid,
    isYearValid,
  }
};
