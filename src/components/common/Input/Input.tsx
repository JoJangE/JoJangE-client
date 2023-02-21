import type { InputHTMLAttributes } from 'react';
import * as S from './Input.styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error: boolean;
}

const Input = ({ name, error, ...props }: InputProps) => {
  return <S.Input name={name} error={error} {...props} />;
};

export default Input;
