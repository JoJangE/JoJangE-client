import * as S from './ProfileContents.styles';

// type User = { nickname: string; email: string };
type User = { nickname: string | string[] | undefined; email: string };

interface userProfileProps {
  user: User;
}

function ProfileContents({ user }: userProfileProps) {
  return (
    <>
      <S.ProfileNickName>{user.nickname}</S.ProfileNickName>
      <S.ProfileEmail>{user.email}</S.ProfileEmail>
    </>
  );
}

export default ProfileContents;
