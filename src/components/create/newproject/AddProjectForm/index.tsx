import Button from '../../../common/Button/Button';
import Input from '../../../common/Input/Input';
import validate from '../../../../utils/validate/createRoomValidate';
import useForm from '../../../../hooks/common/useForm';
import * as S from './AddProjectForm.styles';
import { useRecoilState } from 'recoil';
import { roomListState } from '../../../../recoil/rooms/atoms';
import { useRouter } from 'next/router';
import { paths } from '../../../../constants/paths';

export function AddProjectForm() {
  const router = useRouter();

  const [mockData, setMockData] = useRecoilState(roomListState);

  const { values, handleChange, handleSubmit, submitting } = useForm({
    initialValues: {
      title: '',
      startDate: '',
      endDate: '',
      profile: '',
    },
    onSubmit: () => {
      const newProject = {
        id: Math.random().toString(36).substring(2, 11),
        title: values.title,
        leader: '리더',
        startDate: values.startDate,
        endDate: values.endDate,
        participant: ['리더', '팀원'],
        profile: '',
      };
      setMockData([newProject, ...mockData]);
      router.push(paths.root).catch((err) => {
        console.log(err);
      });
    },
    validate,
  });

  return (
    <S.AddProjectForm onSubmit={handleSubmit}>
      <S.InputLayout>
        <Input
          placeholder='프로젝트 제목'
          type='text'
          spellCheck='false'
          name='title'
          onChange={handleChange}
        />
        <S.InputTitle>
          <span>진행기간</span>
          <S.DateInput
            required
            type='date'
            data-placeholder='기간(시작)'
            value={values.startDate}
            onChange={handleChange}
            name='startDate'
          />
          ㅡ
          <S.DateInput
            required
            type='date'
            data-placeholder='기간(마감)'
            value={values.endDate}
            onChange={handleChange}
            name='endDate'
          />
        </S.InputTitle>
      </S.InputLayout>
      <Button type='submit' disabled={submitting}>
        방 만들기
      </Button>
    </S.AddProjectForm>
  );
}

export default AddProjectForm;
