import { VFC } from 'react';
import styled from 'styled-components';
import { Text } from './Text';

export const LargeText: VFC<{ text: string }> = ({ text }) => {
  return <StyledText text={text} />;
};

const StyledText = styled(Text)`
  font-size: 2rem;
  color: red;
`;
