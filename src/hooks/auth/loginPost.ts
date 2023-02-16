import axios from 'axios';
import { useRouter } from 'next/router';
import token from '../../api/token';
import { paths } from '../../constants/paths';
import { ACCESS_TOKEN_KEY } from '../../constants/token/token.constant';

export const loginPost = (values: any) => {
  const router = useRouter();

  axios
    .post('http://localhost:8080/users/login', {
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
