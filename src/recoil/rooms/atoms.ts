import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom: projectList } = recoilPersist();

export const roomListState = atom({
  key: 'roomListState',
  default: [
    {
      id: 'JOJANGE1',
      title: '재호의 프로젝트',
      leader: '재호',
      startDate: '2023-01-20',
      endDate: '2023-01-25',
      participant: ['명균', '주혁'],
      profile: '',
    },
    {
      id: 'JOJANGE2',
      title: '주혁의 프로젝트',
      leader: '주혁',
      startDate: '2023-01-25',
      endDate: '2023-02-01',
      participant: ['명균', '진영'],
      profile: '',
    },
    {
      id: 'JOJANGE3',
      title: '명균의 프로젝트',
      leader: '명균',
      startDate: '2023-02-01',
      endDate: '2023-02-05',
      participant: ['진영', '은채'],
      profile: '',
    },
    {
      id: 'JOJANGE4',
      title: '진영의 프로젝트',
      leader: '진영',
      startDate: '2023-02-06',
      endDate: '2023-02-10',
      participant: ['은채', '성혁'],
      profile: '',
    },
    {
      id: 'JOJANGE5',
      title: '은채의 프로젝트',
      leader: '은채',
      startDate: '2023-02-11',
      endDate: '2023-02-15',
      participant: ['성혁', '재호'],
      profile: '',
    },
    {
      id: 'JOJANGE6',
      title: '성혁의 프로젝트',
      leader: '성혁',
      startDate: '2023-02-16',
      endDate: '2023-02-20',
      participant: ['재호', '주혁'],
      profile: '',
    },
  ],
  effects_UNSTABLE: [projectList],
});
