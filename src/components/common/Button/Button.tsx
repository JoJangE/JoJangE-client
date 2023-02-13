import type { ButtonHTMLAttributes } from 'react'
import * as S from './Button.styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  color?: string
  fullWidth?: boolean
}

const Button = ({ children, color = '#004d40;', ...props }: ButtonProps) => {
  return (
    <S.Button color={color} {...props}>
      {children}
    </S.Button>
  )
}

export default Button
