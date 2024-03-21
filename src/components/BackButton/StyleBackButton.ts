import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import styled from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECUNDARY' | 'TERTIARY' | 'QUATERNARY'
export type ButtonTypeIconProps = 'arrow-back' | 'arrow-outward' | 'add' | 'restore-from-trash' | 'edit'

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
  background-color: ${({ theme, type }) => {
    switch (type) {
      case 'PRIMARY':
        return theme.COLORS.WHITE;
      case 'SECUNDARY':
        return theme.COLORS.GRAY_700;
      case 'TERTIARY':
        return theme.COLORS.RED_LIGHT;
      case 'QUATERNARY':
        return theme.COLORS.GREEN_LIGHT;
      default:
        return theme.COLORS.WHITE;
    }
  }};
`

export const TitleStatistics = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const IconBackButton = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 34,
  color: (() => {
    switch (type) {
      case 'PRIMARY':
        return theme.COLORS.WHITE;
      case 'SECUNDARY':
        return theme.COLORS.GRAY_700;
      case 'TERTIARY':
        return theme.COLORS.RED_DARK;
      case 'QUATERNARY':
        return theme.COLORS.GREEN_DARK;
      default:
        return theme.COLORS.GRAY_700;
    }
  })()
}))`
  position: absolute;
  left: 0;
`;
