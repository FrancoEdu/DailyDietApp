import { Button } from "@components/Button/Button";
import { Container, DateText, FoodText } from "./StyleScreen";
import { CardStatistics } from "@components/CardStatistics/CardStatistics";
import { AccountHeader } from "@components/AccountHeader/AccountHeader";
import { SnackCard } from "@components/SnackCard/SnackCard";
import { EmptyList } from "@components/EmptyList/EmptyList";
import { FlatList, View } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { DateDTO } from "@data/Dates/DateDTO";
import { DateManeger } from "@data/Dates/DateService";
import { Text } from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage";

export function HomeScreen(){

  const [statistics, setStatistics] = useState<number>(0);
  const [dates, setDates] = useState<DateDTO[]>([]);
  const navigation = useNavigation();

  const renderDates = ({item} : {item: DateDTO}) => (
    <View>
      <DateText>{item.date}</DateText>
      {item.snacks.map((snack) => (
        <SnackCard 
          key={snack.id} 
          name={snack.name} 
          onDiet={snack.onDiet} 
          hour={snack.hour} 
          onPress={() => handleOpenInfoAboutSnack(snack.id)}
        />
      ))}
    </View>
	);

  useFocusEffect(useCallback(() => {
    fetchDates();
    fetchStatistics();
  }, []))

  async function fetchDates(): Promise<void>{
		try {
			const data = await DateManeger.GetAllData();
      setDates(data);
		} catch (error) {
			throw error;
		}
	}

  async function fetchStatistics() {
    try {
      const percentage = await DateManeger.CalculateAllStatisticsOfUserDiet();
      setStatistics(percentage)
    } catch (error) {
      throw error;
    }
  }

  function handleNavigateStatistics(): void{
    navigation.navigate('statistic')
  }

  function handleNavigateNewSnack(): void{
    navigation.navigate('creation')
  }

  function handleOpenInfoAboutSnack(id: string): void{
    navigation.navigate('meal', { mealId: id})
  }

  return(
    <Container>
      <AccountHeader/>
      <CardStatistics percentage={statistics} onPress={handleNavigateStatistics}/>
      <FoodText>Refeições</FoodText>
      <Button title="Nova refeição" onPress={handleNavigateNewSnack} icon="add"/>
      <FlatList
				data={dates}
				keyExtractor={(item) => item.date}
				showsVerticalScrollIndicator={false}
				renderItem={renderDates}
				contentContainerStyle={dates.length === 0 && {
					flex: 1
				}}
				ListEmptyComponent={() => (
					<EmptyList message="Nenhuma refeição registrada, que tal adicionar..."/>
				)}
			/>
    </Container>
  );
}