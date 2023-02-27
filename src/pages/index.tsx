import styled from '@emotion/styled';
import RoomCard from '../components/roomlist/RoomCard';
import RoomAddButton from '../components/roomlist/RoomAddBotton';
import { headerProps, bottomProps, roomListProps } from '../types/roomListType';

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

export default function Home() {
  const data = [
    {
      id: 'JOJANGE1',
      title: '재호의 프로젝트',
      leader: '재호',
      startdate: '2023.01.20',
      enddate: '2023.01.25',
      participant: ['명균', '주혁'],
      profile: '',
    },
    {
      id: 'JOJANGE2',
      title: '주혁의 프로젝트',
      leader: '주혁',
      startdate: '2023.01.25',
      enddate: '2023.02.01',
      participant: ['명균', '진영'],
      profile: '',
    },
    {
      id: 'JOJANGE3',
      title: '명균의 프로젝트',
      leader: '명균',
      startdate: '2023.02.01',
      enddate: '2023.02.05',
      participant: ['진영', '은채'],
      profile: '',
    },
    {
      id: 'JOJANGE4',
      title: '진영의 프로젝트',
      leader: '진영',
      startdate: '2023.02.06',
      enddate: '2023.02.10',
      participant: ['은채', '성혁'],
      profile: '',
    },
    {
      id: 'JOJANGE5',
      title: '은채의 프로젝트',
      leader: '은채',
      startdate: '2023.02.11',
      enddate: '2023.02.15',
      participant: ['성혁', '재호'],
      profile: '',
    },
    {
      id: 'JOJANGE6',
      title: '성혁의 프로젝트',
      leader: '성혁',
      startdate: '2023.02.16',
      enddate: '2023.02.20',
      participant: ['재호', '주혁'],
      profile: '',
    },
  ];
  return (
    <RoomContainer>
      {data.map((element: roomListProps, i: number) => {
        const { id, leader, startdate, enddate, participant, profile, title }: roomListProps =
          element;
        const headerProp: headerProps = { startdate, enddate, profile };
        const bottombarProp: bottomProps = { id, leader, participant, title };
        return <RoomCard key={i} headerProp={headerProp} bottombarProp={bottombarProp} />;
      })}
      <RoomAddButton />
    </RoomContainer>
  );
}
