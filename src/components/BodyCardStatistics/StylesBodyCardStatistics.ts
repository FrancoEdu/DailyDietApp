import { styled } from "styled-components/native";

export const ContainerBottom = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 200px;
  left: 0;
  z-index: 2;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 20px 20px;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme}) => theme.COLORS.WHITE};
  padding: 24px;
  gap: 10px;
`;

export const TitleStatistics = styled.Text`
  margin-top: 16px;
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  margin-bottom: 20px;
`

export const BottomCardStat = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`