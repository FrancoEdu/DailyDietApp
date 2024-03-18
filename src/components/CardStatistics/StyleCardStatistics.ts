import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECUNDARY'

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(View)<Props>`
  height: 130px;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const HeaderCardStatistics = styled(TouchableOpacity)`
  width: 100%;
  align-items: flex-end;
`;

export const PorcentageText = styled.Text`
   font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
   font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
`

export const IconCardStatistics = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))``;
