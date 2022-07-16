import { ChangeEvent, useCallback, useEffect, useState, VFC } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { fontSize, space } from './constants';
import { Input } from './Input';

type Props = {
  onSubmit: (password: string) => void;
};

export const PasswordForm: VFC<Props> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        onSubmit(value);
      }
    },
    [value]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
  return (
    <Wrapper>
      <Label htmlFor='password'>Password:</Label>
      <InputForm
        id='password'
        type='password'
        onChange={(e) => handleChange(e)}
        error={value.length < 8 && value !== ''}
      />
      <Button onClick={() => onSubmit(value)} title='実行' type='primary' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Label = styled.label`
  margin: 0 ${space.m} 0 0;
  font-size: ${fontSize.m};
  line-height: 42px;
`;

const InputForm = styled(Input)`
  margin-right: ${space.m};
`;
