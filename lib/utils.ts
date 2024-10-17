import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge/es5";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
 

dayjs.extend(customParseFormat);
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateFormatter(dateStr:Date){
  const formattesDate = dayjs(dateStr).format('DD/MM/YYYY')
  return formattesDate

}

export function dateTimeFormatter(dateStr:string){

  console.log(dateStr,"new");
  const formattesDateTime = dayjs(dateStr).format('DD/MM/YYYY, hh:mm:ss A');



  return formattesDateTime

}