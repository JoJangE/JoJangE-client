import { useRouter } from 'next/router';
import BoxContainer from '../../../components/common/BoxContainer/BoxContainer';
import LoginForm from '../../../components/auth/LoginForm/LoginForm';
import { TextLink } from '../../../components/auth/TextLink/TextLink';
import Title from '../../../components/auth/Title/Title';
import { RequireNoAuth } from '../../../utils/hoc';
import { paths } from '../../../constants/paths';
// import * as S from './styles'

function Login() {
  const router = useRouter();

  const goSignup = () => {
    void router.push(paths.signIn);
  };

  return (
    <RequireNoAuth>
      <>
        <BoxContainer>
          <Title>로그인</Title>
          <LoginForm />
          <TextLink type='button' onClick={goSignup}>
            회원가입
          </TextLink>
        </BoxContainer>
      </>
    </RequireNoAuth>
  );
}

export default Login;
