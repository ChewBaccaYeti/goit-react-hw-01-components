import styled from 'styled-components';
import { getRandomHexColor } from 'components/utils/RandomColor';

export const Container = styled.section`
  /* display: flex;
  flex-direction: column;
  gap: 20px; */
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  color: #2236f0;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100px;
  height: 100px;
  background-color: ${getRandomHexColor};
  color: #ffffff;
  border: 1px solid white;
`;

export const Label = styled.span`
  font-size: 16px;
`;

export const Percentage = styled.span`
  font-size: 24px;
`;
