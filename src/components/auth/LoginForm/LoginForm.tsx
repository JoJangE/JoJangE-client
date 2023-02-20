import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import validate from '../../../utils/validate/AuthValidate';
import useForm from '../../../hooks/common/useForm';
import * as S from './LoginForm.styles';

export function LoginForm() {
  const { values, errors, handleChange, handleSubmit, submitting } = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {
      // api 도입후, loginPost로 변경
      // loginPost
      alert(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `로그인 시도:::'email :', ${values.email}, 'password :', ${values.password}`,
      );
    },
    validate,
  });
  console.log('error', Object.keys(errors).length !== 0);

  return (
    <S.AuthForm onSubmit={handleSubmit}>
      {Object.keys(errors).length !== 0 && (
        <S.ErrorMessage>잘못된 이메일 혹은 비밀번호입니다</S.ErrorMessage>
      )}
      <S.InputLayout>
        <Input
          placeholder='이메일'
          type='text'
          name='email'
          spellCheck='false'
          value={values.email}
          onChange={handleChange}
          Error={Object.keys(errors).length !== 0}
        />
        <Input
          placeholder='비밀번호'
          type='password'
          value={values.password}
          onChange={handleChange}
          name='password'
          Error={Object.keys(errors).length !== 0}
        />
      </S.InputLayout>
      <Button type='submit' disabled={submitting}>
        로그인 하기
      </Button>
    </S.AuthForm>
  );
}

export default LoginForm;
