import { useRouter } from 'next/router';
import client from '../../api/axios/axios';
import token from '../../api/token';
import { paths } from '../../constants/paths';
import { ACCESS_TOKEN_KEY } from '../../constants/token/token.constant';
import { StringType } from '../../types';

export const signUpPost = (values: StringType) => {
  const router = useRouter();

  client
    .post('/users/create', {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      token.setToken(ACCESS_TOKEN_KEY, response.data.token);
      void router.push(paths.root);
    })
    .catch((err) => {
      console.error('err', err);
      alert('오류 : 회원가입에 실패했습니다.');
    });
};

export default signUpPost;
