import { type Ref, computed } from "vue";
import dayjs from "dayjs";

export const useBirthday = (
  day: Ref<number | undefined>,
  month: Ref<number | undefined>,
  year: Ref<number | undefined>
) => {
  const diff = computed(() => {
    if (day.value == null || month.value == null || year.value == null) {
      return null;
    }

    const birthday = dayjs(`${year.value}-${month.value}-${day.value}`);
    const now = dayjs();

    if (!birthday.isValid()) {
      return null;
    }

    return dayjs.duration(now.diff(birthday));
  });

  return diff;
};
