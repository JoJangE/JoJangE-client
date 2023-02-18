// URL :: post/[id]

import { useRouter } from 'next/router';
// import { RequireAuth } from '../../utils/hoc';
import BoxContainer from '../../components/common/BoxContainer/BoxContainer';
import Title from '../../components/auth/Title/Title';
import UserIcon from '../../components/common/UserIcon';
import AddProfile from '../../components/myPage/AddProfile';
import ProfileContents from '../../components/myPage/ProfileContents';

const MyProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  const user = { nickname: id, email: 'email@email.com' };

  // 이메일을 뗀 부분을 id로 넘기기
  // ex ohjaehokor@naver.com -> ohjaehokor

  return (
    // <RequireAuth>
    <>
      <BoxContainer>
        <Title>마이페이지</Title>
        <div>
          <UserIcon size='240px' borderRadius='120px'></UserIcon>
          <AddProfile />
        </div>
        <ProfileContents user={user} />
      </BoxContainer>
    </>
    //   </RequireAuth>
  );
};

export default MyProfile;
