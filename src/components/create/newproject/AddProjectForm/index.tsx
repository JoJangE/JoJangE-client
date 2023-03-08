import Button from '../../../common/Button/Button';
import Input from '../../../common/Input/Input';
import validate from '../../../../utils/validate/createRoomValidate';
import useForm from '../../../../hooks/common/useForm';
import { onHandleSubmit } from '../../../../hooks/roomList/handleSubmit';
import * as S from './AddProjectForm.styles';

export function AddProjectForm() {
  const { values, handleChange, handleSubmit, submitting } = useForm({
    initialValues: {
      title: '',
      startDate: '',
      endDate: '',
      profile: '',
    },
    onSubmit: () => {
      AddProjectSubmit();
    },
    validate,
  });
  const { AddProjectSubmit } = onHandleSubmit({ values });

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
