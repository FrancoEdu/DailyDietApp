import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from "styled-components/native";

export type SelectedOnDietProp = {
  onDiet?: boolean
}

export const Container = styled.View`
  margin-top: 20px;
  height: 34px;
  width: 140px;
  padding: 5px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme}) => theme.COLORS.GRAY_200};
  border-radius: 30px;
`

export const Answer = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const Icon = styled(MaterialIcons).attrs<SelectedOnDietProp>(({ theme, onDiet }) => ({
  size: 12,
  color: onDiet  ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))``;