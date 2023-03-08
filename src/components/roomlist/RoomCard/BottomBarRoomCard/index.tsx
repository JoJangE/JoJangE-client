import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AvatarGroup from '@mui/material/AvatarGroup';
import { useRouter } from 'next/router';
import { bottomProps } from '../../../../types/roomListType';
import * as S from './BottomBarContainer.styles';

export default function BottomBarRoomCard({ bottombarProp }: { bottombarProp: bottomProps }) {
  const router = useRouter();
  const { leader, participant, title } = bottombarProp;

  return (
    <S.BottomBarContainer
      onClick={(e: any) => {
        e.preventDefault();
        // 추후 id로 이동
        router.push('/project').catch((err) => {
          console.log(err);
        });
      }}
    >
      <Typography color='black' sx={{ fontWeight: 700, marginBottom: 0, fontSize: 20 }}>
        {/* title */}
        {title}
      </Typography>
      <AvatarGroup max={participant.length}>
        <Avatar alt={`${leader}`} />
        {participant.map((element, i) => {
          return <Avatar key={i} alt={`${element}`} />;
        })}
      </AvatarGroup>
    </S.BottomBarContainer>
  );
}
