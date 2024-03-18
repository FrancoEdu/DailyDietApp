import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
  onDiet: boolean;
}

export const Container = styled(TouchableOpacity)`
  flex: 1;
  max-height: 60px;
  min-height: 60px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  border-radius: 6px;
  border-color: ${({ theme }) =>  theme.COLORS.GRAY_200};
  border-width: 2px;
  border-style: solid;
  padding: 10px;
  justify-content: space-between;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const SnackName = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const HourView = styled.View`
  border-right-color: ${({ theme }) => theme.COLORS.GRAY_200};
  border-right-width: 2px;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
`;

export const SnackHourView = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`


export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, onDiet }) => ({
  size: 24,
  color: onDiet  ? theme.COLORS.GREEN : theme.COLORS.RED
}))``;