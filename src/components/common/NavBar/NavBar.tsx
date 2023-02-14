import { useRouter } from 'next/router';
import UserIcon from '../UserIcon';
import * as S from './NavBar.styles';

interface NavBarProps {
  beforeUrl?: string;
}

export function NavBar({ beforeUrl = '/' }: NavBarProps) {
  const router = useRouter();

  return (
    <>
      <S.Navbar>
        <S.BackButton
          onClick={() => {
            void router.push(beforeUrl);
          }}
        >
          &#60;
          {/* <S.BackIcon src='https://cdn.icon-icons.com/icons2/1369/PNG/512/-navigate-before_90417.png' /> */}
        </S.BackButton>
        <S.LogoBox>Logo</S.LogoBox>
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

export default NavBar;
