import styled from "styled-components/native";

type Props = {
  onDiet: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Header = styled.View<Props>`
  flex: 1;
  max-height: 25%;
  min-height: 25%;
  background-color: ${({ theme, onDiet }) => onDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  justify-content: center;
  align-items: center;
  padding: 24px;
`;