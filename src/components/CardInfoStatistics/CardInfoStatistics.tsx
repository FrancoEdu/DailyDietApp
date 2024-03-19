import { Text } from "react-native";
import { Container, NumberInfo, TextInfo, ViewTypeStyleProps } from "./StyleCardInfoStatistics";

type Props = {
  type: ViewTypeStyleProps;
  number: number;
  text: string;
  width: number
};

export function CardIfoStatistics({ type = 'TERTIARY', number, text, width }: Props){
  return(
    <Container width={width} type={type}>
      <NumberInfo>{number}</NumberInfo>
      <TextInfo>{text}</TextInfo>
    </Container>
  )
}