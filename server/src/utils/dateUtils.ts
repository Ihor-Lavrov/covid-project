import { parseISO, isAfter, isBefore } from "date-fns";

export const filterDataByDateRange = (
  data: any[],
  from?: string,
  to?: string
) => {
  if (from && to) {
    const startDate = parseISO(from);
    const endDate = parseISO(to);
    return data.filter(
      (dataItem: any) =>
        isAfter(parseISO(dataItem.date), startDate) &&
        isBefore(parseISO(dataItem.date), endDate)
    );
  } else {
    return data;
  }
};
