import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";


export type SelectedOnDietProp = {
  onDiet?: boolean
  selected?: boolean
}

export const Container = styled(TouchableOpacity)<SelectedOnDietProp>`
  border-radius: 6px;
  height: 56px;
  width: 100%;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  ${({ selected, onDiet, theme }) => selected && css`
    border: 2px solid ${onDiet ? theme.COLORS.GREEN : theme.COLORS.RED};
  `}
  ${({ selected, onDiet, theme }) => selected && css`
    background-color: ${onDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  `}
`;

export const Answer = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const Icon = styled(MaterialIcons).attrs<SelectedOnDietProp>(({ theme, onDiet, selected }) => ({
  size: 12,
  color: onDiet  ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))``;