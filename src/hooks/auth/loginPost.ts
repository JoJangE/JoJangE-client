import { useRouter } from 'next/router';
import client from '../../api/axios/axios';
import token from '../../api/token';
import { paths } from '../../constants/paths';
import { ACCESS_TOKEN_KEY } from '../../constants/token/token.constant';
import { StringType } from '../../types';

export const loginPost = (values: StringType) => {
  const router = useRouter();

  client
    .post('/users/login', {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      token.setToken(ACCESS_TOKEN_KEY, response.data.token);

      // ts 에러
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      router.push(paths.root);
    })
    .catch((err) => {
      console.error('err', err);
    });
};

export default loginPost;
