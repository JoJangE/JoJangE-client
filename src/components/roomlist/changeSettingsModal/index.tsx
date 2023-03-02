import router from 'next/router';
import { useRecoilState } from 'recoil';
import { paths } from '../../../constants/paths';
import useForm from '../../../hooks/common/useForm';
import { roomListState } from '../../../recoil/rooms/atoms';
import { roomListProps } from '../../../types/roomListType';
import validate from '../../../utils/validate/createRoomValidate';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import * as S from './ChangeSettingsModal';

interface ChangeSettingsModalProps {
  contents: roomListProps[];
  setInputModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChangeSettingsModal({ contents, setInputModal }: ChangeSettingsModalProps) {
  const [mockData, setMockData] = useRecoilState(roomListState);

  const { values, handleChange, handleSubmit, submitting } = useForm({
    initialValues: {
      id: contents[0].id,
      title: contents[0].title,
      startDate: contents[0].startDate,
      endDate: contents[0].endDate,
      profile: '',
    },
    onSubmit: () => {
      const targetIndex: number = mockData.findIndex(
        (project: roomListProps) => project.id === contents[0].id,
      );

      const newProject = {
        id: values.id, // 랜덤 문자열 생성용도 -> 후에 서버에서 처리
        title: values.title,
        leader: '리더',
        startDate: values.startDate,
        endDate: values.endDate,
        participant: ['리더', '팀원'],
        profile: '',
      };

      const oldList = [...mockData];
      setMockData([
        ...oldList.slice(0, targetIndex),
        newProject,
        ...oldList.slice(targetIndex + 1),
      ]);

      router.push(paths.root).catch((err) => {
        console.log(err);
      });

      setInputModal(false);
    },
    validate,
  });

  return (
    <S.InputModal>
      <S.ModalTopColorbar>
        <span>●</span>
        <span>●</span>
      </S.ModalTopColorbar>

      <form onSubmit={handleSubmit}>
        <Input
          placeholder='프로젝트 타이틀'
          name='title'
          value={values.title}
          spellCheck='false'
          onChange={handleChange}
          paddingRight='10px'
        />
        <Input
          required
          type='date'
          data-placeholder='기간(시작)'
          value={values.startDate}
          onChange={handleChange}
          name='startDate'
          paddingRight='10px'
        />
        <Input
          required
          type='date'
          data-placeholder='기간(마감)'
          value={values.endDate}
          onChange={handleChange}
          name='endDate'
          paddingRight='10px'
        />
        <Button type='submit' disabled={submitting}>
          프로젝트 변경
        </Button>
      </form>
    </S.InputModal>
  );
}

export default ChangeSettingsModal;
