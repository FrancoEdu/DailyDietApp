import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

type Props = {
  onDiet: boolean
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<Props>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme, onDiet }) => onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-bottom: 10px;
`

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  margin-bottom: 20px;
`
export const Logo = styled.Image`
  width: 250px;
  height: 350px;
  margin-bottom: 20px;
`;