import styled from '@emotion/styled';
import RoomCard from '../components/roomlist/RoomCard';
import RoomAddButton from '../components/roomlist/RoomAddBotton';
import { headerProps, bottomProps, roomListProps } from '../types/roomListType';
import { useRecoilValue } from 'recoil';
import { roomListState } from '../recoil/rooms/atoms';

const RoomContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export default function Home() {
  const mockData = useRecoilValue(roomListState);

  return (
    <RoomContainer>
      {mockData.map((element: roomListProps, i: number) => {
        const { id, leader, startDate, endDate, participant, profile, title }: roomListProps =
          element;
        const headerProp: headerProps = { id, startDate, endDate, profile };
        const bottombarProp: bottomProps = { id, leader, participant, title };
        return <RoomCard key={i} headerProp={headerProp} bottombarProp={bottombarProp} />;
      })}
      <RoomAddButton />
    </RoomContainer>
  );
}
