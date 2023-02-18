import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import validate from '../../../utils/validate/AuthValidate';
import useForm from '../../../hooks/common/useForm';
import * as S from './SignUpForm.styles';

// import signUpPost from '../../../hooks/auth/signUpPost';

export function SignUpForm() {
  const { values, errors, handleChange, handleSubmit, submitting } = useForm({
    initialValues: {
      nickname: '',
      email: '',
      password: '',
      passwordConfirmed: '',
    },
    onSubmit: () => {
      // api 도입후, signUpPost로 변경
      //  signUpPost
      alert(
        `회원가입 시도:::'email :', ${values.email}, 'password :', ${values.password}, 닉네임 : ${values.nickname}`,
      );
    },
    validate,
  });

  const checkEmail = () => {
    alert(`이메일 중복 체크 : ${values.email}`);
  };

  return (
    <S.SignUpForm onSubmit={handleSubmit}>
      <S.InputLayout>
        <Input
          placeholder='이메일 입력'
          type='text'
          spellCheck='false'
          name='email'
          onChange={handleChange}
          //                errorMessage={errors.email}
        />
        <S.ConfirmButton type='button' onClick={checkEmail}>
          확인
        </S.ConfirmButton>
        <S.InputTitle htmlFor='nickname'>닉네임을 정해주세요</S.InputTitle>
        <Input
          id='nickname'
          placeholder='닉네임 입력'
          type='text'
          value={values.nickname}
          onChange={handleChange}
          name='nickname'
          //                errorMessage={errors.nickname}
        />
        <Input
          placeholder='비밀번호 입력'
          type='password'
          value={values.password}
          onChange={handleChange}
          name='password'
          //                errorMessage={errors.password}
        />
        <Input
          placeholder='비밀번호 확인'
          type='password'
          value={values.passwordConfirmed}
          onChange={handleChange}
          name='passwordConfirmed'
          //                errorMessage={errors.passwordConfirmed}
        />
      </S.InputLayout>
      <Button type='submit' disabled={submitting}>
        회원가입 하기
      </Button>
    </S.SignUpForm>
  );
}

export default SignUpForm;
