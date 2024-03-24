import { DateManeger } from "@data/Dates/DateService";
import { SnackDTO } from "./SnackDTO";
import { DateDTO } from "@data/Dates/DateDTO";
import { AppError } from "@utils/AppError";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SNACK_COLLECTION } from "@data/StorageConfig";

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

  static async DeleteSnackById(id: string): Promise<void>{
    try {
      let allData = await DateManeger.GetAllData();
      const snack = await this.FindSnackById(id);
      const currentDate = allData.find(x => x.date === snack.date);

      if (currentDate) {
        currentDate.snacks = currentDate.snacks.filter(x => x.id !== snack.id);
        if(currentDate.snacks.length <= 0){
          allData = allData.filter(x => x.date !== currentDate.date);
        }
        await AsyncStorage.setItem(SNACK_COLLECTION, JSON.stringify(allData));
      } else {
        throw new AppError('Falha ao tentar excluir');
      }
    } catch (error) {
      throw error;
    }
  }

  static async EditSnack(snack: SnackDTO): Promise<void>{
    try {
      await this.DeleteSnackById(snack.id);
      await this.CreateNewSnack(snack);
    } catch (error) {
      throw error;
    }
  }
}