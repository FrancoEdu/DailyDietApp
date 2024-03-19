import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 56px;
  max-height: 56px;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 20px;

  ${({theme}) => css`
    background-color: ${theme.COLORS.WHITE};
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border-color: ${theme.COLORS.GRAY_200};
    border-width: 2px;
    border-style: solid;
  `};
`;