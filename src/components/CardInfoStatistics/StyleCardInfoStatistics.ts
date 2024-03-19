import { View } from "react-native";
import styled from "styled-components/native";

export type ViewTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY';

type Props = {
  type: ViewTypeStyleProps;
  width: number;
};

export const Container = styled(View)<Props>`
  height: 90px;
  width: ${({ theme, width }) => width}%;
  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'PRIMARY':
        return theme.COLORS.GREEN_LIGHT;
      case 'SECONDARY':
        return theme.COLORS.RED_LIGHT;
      case 'TERTIARY':
        return theme.COLORS.GRAY_200;
      default:
        return theme.COLORS.GRAY_200;
    }
  }};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const NumberInfo = styled.Text`
   font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
   font-size: ${({ theme }) => theme.FONT_SIZE.XXL};
`
export const TextInfo = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  text-align: center;
`;