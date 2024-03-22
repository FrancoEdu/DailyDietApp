import AsyncStorage from "@react-native-async-storage/async-storage";
import { DateDTO } from "./DateDTO";
import { SNACK_COLLECTION } from "@data/StorageConfig";
import { AppError } from "@utils/AppError";

export class DateManeger{
  static async CreateNewDate(date: DateDTO){
    try{
      const data = await this.GetAllData();
      if(data.some(x => x.date === date.date)){
        throw new AppError("Já existe uma data cadastrada no banco...")
      }
      await AsyncStorage.setItem(SNACK_COLLECTION, JSON.stringify([...data, date]));
    }catch(error){
      error
    }
  }

  static async GetAllData(): Promise<DateDTO[]>{
    try{
      const allData = await AsyncStorage.getItem(SNACK_COLLECTION);
      const data: DateDTO[] = allData ? JSON.parse(allData) : []
      return data;
    }catch(error){
      throw error;
    }
  }

  static async GetByDate(date: string): Promise<DateDTO | undefined>{
    try {
      const data = await this.GetAllData();
      return data.find(x => x.date === date);
    } catch (error) {
      throw error;
    }
  }

  static async EditSnacksOnDate(date: DateDTO){
    try{
      const allDates = await this.GetAllData();
      const selectedDate = allDates.findIndex(x => x.date === date.date);
      allDates[selectedDate] = date;
      await AsyncStorage.setItem(SNACK_COLLECTION, JSON.stringify(allDates));
    }catch(error){
      error
    }
  }
}