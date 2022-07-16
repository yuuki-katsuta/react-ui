import { ChangeEvent, useState, VFC } from 'react';
import styled, { css } from 'styled-components';
import { color, fontSize, radius, space } from './constants';

type Props = {
  width?: number;
  maxLength?: number;
};
export const Textarea: VFC<Props> = ({ maxLength, width = 300 }) => {
  const [count, setCount] = useState<number>(0);
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCount(e.currentTarget.value.length);
  };
  return (
    <>
      <Wrapper width={width} onChange={handleChange} />;
      {maxLength && <Count>残り{Math.max(maxLength - count, 0)}</Count>}
    </>
  );
};

const Count = styled.p`
  margin: 0;
  font-size: ${fontSize.m};
`;

const Wrapper = styled.textarea<{ width: number }>`
  height: 120px;
  padding: ${space.m};
  border-radius: ${radius.m};
  border: solid 1px ${color.gray};
  font-ize: ${fontSize.m};
  ${(props) =>
    css`
      width: ${props.width};
    `}
`;
