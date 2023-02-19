import Card from '@mui/material/Card';

import RoomCardHeader from './HeaderRoomCard';
import BottomBarRoomCard from './BottomBarRoomCard';
import { IheaderProp, IbottomProp } from '../../../types/roomListType';

export default function RoomCard(prop: { headerProp: IheaderProp; bottombarProp: IbottomProp }) {
  const { headerProp, bottombarProp } = prop;
  return (
    <>
      <Card
        sx={{
          width: '320px',
          height: '150px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingBottom: '8px',
          borderRadius: '8px',
          marginBottom: '40px',
        }}
      >
        <RoomCardHeader headerProp={headerProp} />
        <BottomBarRoomCard bottombarProp={bottombarProp} />
      </Card>
    </>
  );
}
