import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { paths } from '../../constants/paths/index';
import { roomListState } from '../../recoil/rooms/atoms';
import { StringType } from '../../types';
import { roomListProps } from '../../types/roomListType';

interface handleSumbitProps {
  values?: StringType;
  contents?: roomListProps[];
}

export function onHandleSubmit({ values, contents }: handleSumbitProps) {
  const router = useRouter();
  const [mockData, setMockData] = useRecoilState(roomListState);

  const AddProjectSubmit = () => {
    // 임시 mock 데이터. 후에 서버에서 처리
    const newProject = {
      id: Math.random().toString(36).substring(2, 11), // 랜덤 문자열 생성용도 -> 후에 서버에서 처리
      title: values?.title,
      leader: '리더',
      startDate: values?.startDate,
      endDate: values?.endDate,
      participant: ['리더', '팀원'],
      profile: '',
    };

    setMockData([newProject, ...mockData]);

    router.push(paths.root).catch((err) => {
      console.log(err);
    });
  };

  const ChangeSettingSubmit = () => {
    const targetIndex: number = mockData.findIndex(
      (project: roomListProps) => project.id === contents?.[0].id,
    );

    // 임시 mock 데이터. 후에 서버에서 처리
    const newProject = {
      id: values?.id,
      title: values?.title,
      leader: '리더',
      startDate: values?.startDate,
      endDate: values?.endDate,
      participant: ['리더', '팀원'],
      profile: '',
    };

    const oldList = [...mockData];
    setMockData([...oldList.slice(0, targetIndex), newProject, ...oldList.slice(targetIndex + 1)]);

    router.push(paths.root).catch((err) => {
      console.log(err);
    });
  };

  return { AddProjectSubmit, ChangeSettingSubmit };
}
