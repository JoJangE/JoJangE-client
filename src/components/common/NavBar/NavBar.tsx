import { useRouter } from 'next/router';
import { paths } from '../../../constants/paths';
import UserIcon from '../UserIcon';
import * as S from './NavBar.styles';

interface NavBarProps {
  beforeUrl?: string;
}

export function NavBar({ beforeUrl = '/' }: NavBarProps) {
  const router = useRouter();

  const moveUrl = (url: string) => {
    void router.push(url);
  };

  return (
    <>
      <S.Navbar>
        <S.BackButton
          onClick={() => {
            moveUrl(beforeUrl);
          }}
        >
          &#60;
          {/* <S.BackIcon src='https://cdn.icon-icons.com/icons2/1369/PNG/512/-navigate-before_90417.png' /> */}
        </S.BackButton>
        <S.LogoBox
          onClick={() => {
            moveUrl(paths.root);
          }}
        >
          Logo
        </S.LogoBox>
        <div
          onClick={() => {
            void router.push('/users/ohjaehokor');
          }}
        >
          <UserIcon />
        </div>
      </S.Navbar>
    </>
  );
}

// 임시작성
// 로그인 api 적용후에, navbar 수정 필요
export default NavBar;
