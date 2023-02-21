import styled from '@emotion/styled';
import RoomCard from '../../components/roomlist/RoomCard';
import RoomAddButton from '../../components/roomlist/RoomAddBotton';
import { headerProps, bottomProps, roomListProps } from '../../types/roomListType';

// const headerProps = { startdate, enddate, participant, profile };
// const bottombarProp = { id, leader };

const RoomContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export default function RoomList() {
  const data = [
    {
      id: 'JOJANGE1',
      leader: ' dlwngur',
      startdate: '2023.01.29',
      enddate: '2023.02.15',
      participant: ['dlwngur', 'dhwogh'],
      profile: '',
    },
    {
      id: 'JOJANGE1',
      leader: ' dlwngur',
      startdate: '2023.01.29',
      enddate: '2023.02.15',
      participant: ['dlwngur', 'dhwogh'],
      profile: '',
    },
    {
      id: 'JOJANGE1',
      leader: ' dlwngur',
      startdate: '2023.01.29',
      enddate: '2023.02.15',
      participant: ['dlwngur', 'dhwogh'],
      profile: '',
    },
    {
      id: 'JOJANGE1',
      leader: ' dlwngur',
      startdate: '2023.01.29',
      enddate: '2023.02.15',
      participant: ['dlwngur', 'dhwogh'],
      profile: '',
    },
    {
      id: 'JOJANGE1',
      leader: ' dlwngur',
      startdate: '2023.01.29',
      enddate: '2023.02.15',
      participant: ['dlwngur', 'dhwogh'],
      profile: '',
    },
    {
      id: 'JOJANGE1',
      leader: ' dlwngur',
      startdate: '2023.01.29',
      enddate: '2023.02.15',
      participant: ['dlwngur', 'dhwogh'],
      profile: '',
    },
  ];
  return (
    <RoomContainer>
      {data.map((element: roomListProps, i: number) => {
        const { id, leader, startdate, enddate, participant, profile }: roomListProps = element;
        const headerProp: headerProps = { startdate, enddate, profile };
        const bottombarProp: bottomProps = { id, leader, participant };
        return <RoomCard key={i} headerProps={headerProp} bottombarProp={bottombarProp} />;
      })}

      <RoomAddButton />
    </RoomContainer>
  );
}
