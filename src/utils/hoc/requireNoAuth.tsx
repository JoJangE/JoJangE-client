import { useRouter } from 'next/router';
import { paths } from '../../constants/paths';
import useTokenCheck from '../../hooks/auth/useTokenCheck';
import { ValueOf } from '../../types';

type Props = {
  path?: ValueOf<typeof paths>;
  children: JSX.Element;
};

export const RequireNoAuth = ({ path = paths.root, children: element }: Props): JSX.Element => {
  const router = useRouter();
  const { isAuthority } = useTokenCheck();

  if (typeof window !== 'undefined' && isAuthority === true) {
    void router.replace(path);
  }

  return isAuthority ?? false ? <div></div> : element;
};
