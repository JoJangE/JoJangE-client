import styled from '@emotion/styled';
import RoomCard from '../../components/roomlist/RoomCard';
import RoomAddButton from '../../components/roomlist/RoomAddBotton';
import { IheaderProp, IbottomProp, IroomList } from '../../types/roomListType';

// const headerProp = { startdate, enddate, participant, profile };
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
      {data.map((element: IroomList, i: number) => {
        const { id, leader, startdate, enddate, participant, profile }: IroomList = element;
        const headerProp: IheaderProp = { startdate, enddate, profile };
        const bottombarProp: IbottomProp = { id, leader, participant };
        return <RoomCard key={i} headerProp={headerProp} bottombarProp={bottombarProp} />;
      })}

      <RoomAddButton />
    </RoomContainer>
  );
}
