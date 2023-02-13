import { RequireNoAuth } from '../../../utils/hoc'
import Navbar from '../../../components/common/NavBar/NavBar'
import AuthContainer from '../../../components/auth/AuthContainer/AuthContainer'
import Title from '../../../components/auth/Title/Title'
import SignUpForm from '../../../components/auth/SignUpForm/SignUpForm'

function SignUp() {
  return (
    <RequireNoAuth>
      <>
        <Navbar beforeUrl='/auth/login' />
        <AuthContainer>
          <Title>회원가입</Title>
          <SignUpForm />
        </AuthContainer>
      </>
    </RequireNoAuth>
  )
}

export default SignUp
