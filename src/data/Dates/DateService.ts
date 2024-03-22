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

  static async CalculateAllStatisticsOfUserDiet(): Promise<number>{
    try{
      const allDates = await this.GetAllData();
      
      let totalSnacks = 0;
      let onDietSnacks = 0;

      allDates.forEach(date => {
        date.snacks.forEach(snack => {
          totalSnacks++;
          if (snack.onDiet) {
            onDietSnacks++;
          }
        });
      });
      
      const percentage = (onDietSnacks / totalSnacks) * 100;
      return percentage;
    } catch(error){
        throw error;
    }
  }

  static async CalculateTotalOfSnacks(): Promise<number>{
    try{
      const allDates = await this.GetAllData();
      
      let totalSnacks = 0;

      allDates.forEach(date => {
        let total = date.snacks.length;
        totalSnacks = totalSnacks + total;
      });

      return totalSnacks;
    } catch(error){
        throw error;
    }
  }

  static async CalculateOnDietAnNotOnDietSnacks(): Promise<number[]>{
    try{
      const allDates = await this.GetAllData();
      
      let snacksOnDiet = 0;
      let snacksNotOnDiet = 0;

      allDates.forEach(date => {
        date.snacks.forEach(snack => {
          if (snack.onDiet) {
            snacksOnDiet++;
          }else if(!snack.onDiet){
            snacksNotOnDiet++;
          }
        });
      });
      return [snacksOnDiet, snacksNotOnDiet];
    } catch(error){
        throw error;
    }
  }

  static async CalculateBestSequenceOnDietSnacks(): Promise<number>{
    try{
      const allDates = await this.GetAllData();
      
      let bestSequence = 0;
      let currentSequence = 0;

      allDates.forEach(date => {
        date.snacks.forEach(snack => {
          if (snack.onDiet) {
            currentSequence++;
            bestSequence = Math.max(bestSequence, currentSequence);
          } else {
            currentSequence = 0;
          }
        });
      });

      return bestSequence;
    } catch(error){
      throw error;
    }
}

}