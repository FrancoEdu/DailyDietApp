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

export const Bottom = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 15%;
  left: 0;
  z-index: 2;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 20px 20px;
  flex-direction: column;
  background-color: ${({ theme}) => theme.COLORS.WHITE};
  padding: 24px;
  gap: 10px;
`;

export const Snack = styled.Text`
  margin-top: 40px;
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const HourDateTitle = styled.Text`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const HourDate = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`;