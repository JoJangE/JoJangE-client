import { useRouter } from 'next/router';
import { paths } from '../../constants/paths';
import useTokenCheck from '../../hooks/auth/useTokenCheck';
import { ValueOf } from '../../types';

type Props = {
  path?: ValueOf<typeof paths>;
  children: JSX.Element;
};
export const RequireAuth = ({ path = paths.login, children: element }: Props): JSX.Element => {
  const router = useRouter();
  const { isAuthority } = useTokenCheck();

  if (typeof window !== 'undefined' && isAuthority === false) {
    // ssr을 하는 next.js특성상, router.push가 서버에서 작동하지 않도록 조건 추가.
    // 처음에 isAuthority= undefined라서 false로 지정을 해야 작동함.
    void router.replace(path);
  }

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  return isAuthority ? (
    element
  ) : (
    //    <button onClick={() => router.push(paths.login)}>로그인해 주세요</button>
    <div></div>
  );
};
