import Card from '@mui/material/Card';

import RoomCardHeader from './HeaderRoomCard';
import BottomBarRoomCard from './BottomBarRoomCard';
import { headerProps, bottomProps } from '../../../types/roomListType';

export default function RoomCard(prop: { headerProps: headerProps; bottombarProp: bottomProps }) {
  const { headerProps, bottombarProp } = prop;
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
        <RoomCardHeader headerProps={headerProps} />
        <BottomBarRoomCard bottombarProp={bottombarProp} />
      </Card>
    </>
  );
}
