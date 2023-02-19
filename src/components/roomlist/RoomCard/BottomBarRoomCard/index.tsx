import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AvatarGroup from '@mui/material/AvatarGroup';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { IbottomProp } from '../../../../types/roomListType';

const BottomBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;
`;

export default function BottomBarRoomCard({ bottombarProp }: { bottombarProp: IbottomProp }) {
  const router = useRouter();
  const { leader, participant } = bottombarProp;
  return (
    <BottomBarContainer
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
        프로젝트 1
      </Typography>
      <AvatarGroup max={participant.length}>
        <Avatar alt={`${leader}`} />
        {participant.map((element, i) => {
          return <Avatar key={i} alt={`${element}`} />;
        })}
      </AvatarGroup>
    </BottomBarContainer>
  );
}
