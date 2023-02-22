import { StringType } from '../../types';

export default function validate(values: StringType): StringType {
  const errors: StringType = {};
  const emailRule =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (values.email === '') {
    errors.email = '이메일이 입력되지 않았습니다.';
  }
  //! /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  else if (!emailRule.test(values.email)) {
    errors.email = '입력된 이메일이 유효하지 않습니다.';
  }

  if (values.password === '') {
    errors.password = '비밀번호가 입력되지 않았습니다.';
  } else if (values.password.length < 8) {
    errors.password = '8자 이상의 패스워드를 사용해야 합니다.';
  }

  // input창이 2개 === 로그인페이지
  // input창이 3개이상 === 회원가입 페이지
  if (Object.keys(values).length > 2 && values.nickname === '') {
    errors.nickname = '닉네임이 입력되지 않았습니다.';
  } else if (Object.keys(values).length > 2 && values.nickname === 'Jho') {
    errors.nickname = 'Jho는 중복된 닉네임입니다.';
  }

  if (Object.keys(values).length > 2 && values.passwordConfirmed === '') {
    errors.passwordConfirmed = '비밀번호 확인이 입력되지 않았습니다.';
  } else if (Object.keys(values).length > 2 && values.password !== values.passwordConfirmed) {
    errors.passwordConfirmed = '비밀번호가 일치하지 않습니다.';
  }
  //  console.log('errors', errors);

  return errors;
}
