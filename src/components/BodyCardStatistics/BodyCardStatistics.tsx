import { CardIfoStatistics } from "@components/CardInfoStatistics/CardInfoStatistics";
import { BottomCardStat, ContainerBottom, TitleStatistics } from "./StylesBodyCardStatistics";

export function BodyCardStatistics(){
  return(
    <ContainerBottom>
      <TitleStatistics>Estatísticas gerais</TitleStatistics>
      <CardIfoStatistics width={100} type="TERTIARY" number={20} text="melhor sequência de pratos dentro da dieta"/>
      <CardIfoStatistics width={100} type="TERTIARY" number={109} text="refeições registradas"/>
      <BottomCardStat> 
        <CardIfoStatistics width={49} type="PRIMARY" number={10} text="refeições dentro da dieta"/>
        <CardIfoStatistics width={49}type="SECONDARY" number={99} text="refeições fora da dieta"/>
      </BottomCardStat>
    </ContainerBottom>
  );
}