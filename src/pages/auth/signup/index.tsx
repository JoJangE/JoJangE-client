import { RequireNoAuth } from '../../../utils/hoc';
import Navbar from '../../../components/common/NavBar/NavBar';
import BoxContainer from '../../../components/common/BoxContainer/BoxContainer';
import Title from '../../../components/auth/Title/Title';
import SignUpForm from '../../../components/auth/SignUpForm/SignUpForm';

function SignUp() {
  return (
    <RequireNoAuth>
      <>
        <Navbar beforeUrl='/auth/login' />
        <BoxContainer>
          <Title>회원가입</Title>
          <SignUpForm />
        </BoxContainer>
      </>
    </RequireNoAuth>
  );
}

export default SignUp;
