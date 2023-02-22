import { ButtonHTMLAttributes } from 'react';
import * as S from './TextLink.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function TextLink({ children, ...props }: ButtonProps) {
  return (
    <S.TextLink type='button' {...props}>
      {children}
    </S.TextLink>
  );
}
