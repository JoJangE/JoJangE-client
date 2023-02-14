import * as S from './BoxContainer.styles';

type Props = {
  children: React.ReactNode;
};

function BoxContainer({ children }: Props) {
  return (
    <S.BoxContainer>
      <>{children}</>
    </S.BoxContainer>
  );
}

export default BoxContainer;
