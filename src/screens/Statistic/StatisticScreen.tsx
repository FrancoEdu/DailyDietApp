import { HeaderCardStatistics } from "@components/HeaderCardStatistics/HeaderCardStatistics";
import { Container } from "./StyleStatisticsScreen";
import { BodyCardStatistics } from "@components/BodyCardStatistics/BodyCardStatistics";
import { DateManeger } from "@data/Dates/DateService";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";


export function StatisticScreen(){

  const [statistics, setStatistics] = useState<number>(0);
  const [totalOfSnacks, setTotalOfSnacks] = useState<number>(0);
  const [bestSequence, setBestSequence] = useState<number>(0);
  const [onDietAndOnNotDiet, setOnDietAndOnNotDiet] = useState<number[]>([]);

  async function fetchStatistics() {
    try {
      setStatistics(await DateManeger.CalculateAllStatisticsOfUserDiet());
      setTotalOfSnacks(await DateManeger.CalculateTotalOfSnacks());
      setBestSequence(await DateManeger.CalculateBestSequenceOnDietSnacks());
      setOnDietAndOnNotDiet(await DateManeger.CalculateOnDietAnNotOnDietSnacks());
    } catch (error) {
      throw error;
    }
  }

	useFocusEffect(useCallback(() => {
    fetchStatistics();
	}, []))

  return(
    <Container>
      <HeaderCardStatistics percentage={statistics}/>
      <BodyCardStatistics 
        totalOfSnacks={totalOfSnacks}
        bestSequence={bestSequence}
        onDietAndOnNotDiet={onDietAndOnNotDiet}
      />
    </Container>
  );
}