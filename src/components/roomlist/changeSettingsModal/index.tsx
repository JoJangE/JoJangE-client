import router from 'next/router';
import { useRecoilState } from 'recoil';
import { paths } from '../../../constants/paths';
import useForm from '../../../hooks/common/useForm';
import { roomListState } from '../../../recoil/rooms/atoms';
import { roomListProps } from '../../../types/roomListType';
import validate from '../../../utils/validate/createRoomValidate';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import * as S from './changeSettingsModal';

interface ChangeSettingsModalProps {
  id: string;
  contents: roomListProps[];
  setInputModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChangeSettingsModal({ id, contents, setInputModal }: ChangeSettingsModalProps) {
  const [mockData, setMockData] = useRecoilState(roomListState);

  const { values, handleChange, handleSubmit, submitting } = useForm({
    initialValues: {
      title: contents[0].title,
      startDate: contents[0].startDate,
      endDate: contents[0].endDate,
      profile: '',
    },
    onSubmit: () => {
      const targetIndex = mockData.findIndex((project: roomListProps) => project.id === id);

      const newProject = {
        id: Math.random().toString(36).substring(2, 11),
        title: values.title,
        leader: '리더',
        startDate: values.startDate,
        endDate: values.endDate,
        participant: ['리더', '팀원'],
        profile: '',
      };

      const oldList = [...mockData];
      console.log('contents', contents);
      console.log('이전', ...oldList.slice(0, targetIndex));
      console.log('추가', newProject);
      console.log('이후', ...oldList.slice(targetIndex + 1));

      setMockData([
        ...oldList.slice(0, targetIndex),
        newProject,
        ...oldList.slice(targetIndex + 1),
      ]);

      console.log('mockData', mockData);

      router.push(paths.root).catch((err) => {
        console.log(err);
      });

      setInputModal(false);
    },
    validate,
  });

  return (
    <S.InputModal>
      임시 UI - 배포전에 변경예정
      <form onSubmit={handleSubmit}>
        <Input
          placeholder='프로젝트 타이틀'
          name='title'
          value={values.title}
          spellCheck='false'
          onChange={handleChange}
        />
        <Input
          required
          type='date'
          data-placeholder='기간(시작)'
          value={values.startDate}
          onChange={handleChange}
          name='startDate'
        />
        <Input
          required
          type='date'
          data-placeholder='기간(마감)'
          value={values.endDate}
          onChange={handleChange}
          name='endDate'
        />
        <Button type='submit' disabled={submitting}>
          프로젝트 변경
        </Button>
      </form>
    </S.InputModal>
  );
}

export default ChangeSettingsModal;
