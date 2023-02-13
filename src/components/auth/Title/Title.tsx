import * as S from './Title.styles'

export interface TitleProps {
  children: React.ReactNode
}

const Title = ({ children, ...props }: TitleProps) => {
  return <S.Title {...props}>{children}</S.Title>
}

export default Title
