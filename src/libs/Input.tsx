import { InputHTMLAttributes, VFC } from 'react';
import styled from 'styled-components';
import { color, space } from './constants';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: boolean;
  type?: 'text' | 'number' | 'password';
  className?: string;
};

export const Input: VFC<Props> = ({
  type,
  value,
  onChange,
  className = '',
  error = false,
  ...props
}) => {
  return (
    <Wrapper
      type={type}
      value={value}
      onChange={onChange}
      className={`${error ? 'error' : ''}`}
      {...props}
    />
  );
};

const Wrapper = styled.input`
  height: 42px;
  padding: ${space.m};
  &.error {
    color: ${color.red};
    border: solid 1px ${color.red};
  }
`;
