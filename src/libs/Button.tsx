import { VFC } from 'react';
import styled, { css } from 'styled-components';
import { color, radius, space } from './constants';

type ButtonType = 'primary' | 'secondary' | 'error';
type Props = {
  title: string;
  onClick: () => void;
  type?: ButtonType;
  width?: number;
};
type AlertButtonProps = Omit<Props, 'type'>;

export const Button: VFC<Props> = ({
  title,
  onClick,
  width = 80,
  type = 'primary',
}) => {
  return (
    <Wrapper onClick={onClick} width={width} className={type}>
      {title}
    </Wrapper>
  );
};

export const AlertButton: VFC<AlertButtonProps> = ({
  title,
  onClick,
  width = 80,
}) => {
  return <Button title={title} onClick={onClick} width={width} type='error' />;
};

const Wrapper = styled.button<{ width: number }>`
  padding: ${space.m};
  border-radius: ${radius.m};
  border: solid 1px ${color.green};
  background: ${color.green};
  color: ${color.white};
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  ${(props) =>
    css`
      width: ${props.width};
    `}
  &.secondary {
    border: solid 1px ${color.gray};
    background: ${color.white};
    color: ${color.black};
  }
  &.error {
    border: none;
    background: ${color.red};
    color: ${color.white};
  }
`;
//  &.secondary=>secondaryクラスが付与されている場合(classNameでクラス追加)
