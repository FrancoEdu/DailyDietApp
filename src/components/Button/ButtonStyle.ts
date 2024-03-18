import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons"


export type ButtonTypeStyleProps = 'PRIMARY' | 'SECUNDARY'
export type ButtonTypeIconProps = 'arrow-back' | 'arrow-outward' | 'add' | 'restore-from-trash' | 'edit'

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 56;
  max-height: 56;
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: row;
  gap: 20px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700
}))``;