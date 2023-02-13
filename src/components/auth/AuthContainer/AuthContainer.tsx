import * as S from './AuthContainer.styles'

type Props = {
  children: React.ReactNode
}

export function AuthContainer({ children }: Props) {
  return (
    <S.AuthContainer>
      <>{children}</>
    </S.AuthContainer>
  )
}

export default AuthContainer
