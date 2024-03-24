import { DateManeger } from "@data/Dates/DateService";
import { SnackDTO } from "./SnackDTO";
import { DateDTO } from "@data/Dates/DateDTO";
import { AppError } from "@utils/AppError";

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

  static async FindSnackById(id: string): Promise<SnackDTO>{
    try {
      let snack;
      const allData = await DateManeger.GetAllData();
      allData.forEach((d) => {
        d.snacks.forEach((s) => {
          if(s.id === id){
            snack = s;
          }
        })
      });

      if(snack === null || snack === undefined){
        throw new AppError("Não encontramos nenhuma refeição com essa identificação...");
      }

      return snack;
    } catch (error) {
      throw error
    }
  }
}