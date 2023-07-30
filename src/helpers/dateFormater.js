import { format } from "date-fns";

export const dateFormater = (isoDate) => {
  const date = new Date(isoDate);

  return format(date, "dd/MM/yyyy");
};
