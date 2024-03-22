import { DateManeger } from "@data/Dates/DateService";
import { SnackDTO } from "./SnackDTO";
import { DateDTO } from "@data/Dates/DateDTO";

export class SnackManager{

  static async CreateNewSnack(newSnack: SnackDTO){
    try {
      const date = await DateManeger.GetByDate(newSnack.date);
      if(date){
        date.snacks.push(newSnack);
        DateManeger.EditSnacksOnDate(date);
        return;
      }
      const newDateObject: DateDTO = {
        date: newSnack.date,
        snacks: [newSnack]
      }
      DateManeger.CreateNewDate(newDateObject);
    } catch (error) {
      throw error;
    }
  }
}