import { Title } from './../Button/ButtonStyle';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from "react-native";
import styled from "styled-components/native";

type Props = {
  onDiet: boolean
}

export const ContainerHeader = styled(View)<Props>`
  background-color: ${({ theme, onDiet }) => onDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 210px;
  padding: 24px;
  position: relative;
  z-index: 1;
`

export const IconView = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
`

export const PorcentageText = styled.Text`
   font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
   font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
`

export const IconCardStatistics = styled(MaterialIcons).attrs<Props>(({ theme, onDiet }) => ({
  size: 32,
  color: onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))``;
