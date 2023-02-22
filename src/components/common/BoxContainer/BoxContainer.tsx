import { childrenProps } from '../../../types';
import * as S from './BoxContainer.styles';

function BoxContainer({ children }: childrenProps) {
  return (
    <S.BoxContainer>
      <>{children}</>
    </S.BoxContainer>
  );
}

export default BoxContainer;
