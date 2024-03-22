import { CardIfoStatistics } from "@components/CardInfoStatistics/CardInfoStatistics";
import { BottomCardStat, ContainerBottom, TitleStatistics } from "./StylesBodyCardStatistics";

type Props = {
  totalOfSnacks: number;
  bestSequence: number;
  onDietAndOnNotDiet: number[];
}

export function BodyCardStatistics({ totalOfSnacks, bestSequence, onDietAndOnNotDiet}: Props){
  return(
    <ContainerBottom>
      <TitleStatistics>Estatísticas gerais</TitleStatistics>
      <CardIfoStatistics width={100} type="TERTIARY" number={bestSequence} text="melhor sequência de pratos dentro da dieta"/>
      <CardIfoStatistics width={100} type="TERTIARY" number={totalOfSnacks} text="refeições registradas"/>
      <BottomCardStat> 
        <CardIfoStatistics width={49} type="PRIMARY" number={onDietAndOnNotDiet[0]} text="refeições dentro da dieta"/>
        <CardIfoStatistics width={49}type="SECONDARY" number={onDietAndOnNotDiet[1]} text="refeições fora da dieta"/>
      </BottomCardStat>
    </ContainerBottom>
  );
}