import moment from "moment/moment";

export const getCurrentDate = (timeformat) => {
   return moment().format(timeformat);
};