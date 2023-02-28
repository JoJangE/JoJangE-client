import Button from '../../../common/Button/Button';
import Input from '../../../common/Input/Input';
import validate from '../../../../utils/validate/createRoomValidate';
import useForm from '../../../../hooks/common/useForm';
import * as S from './AddProjectForm.styles';

// import signUpPost from '../../../hooks/auth/signUpPost';

export function AddProjectForm() {
  const { values, handleChange, errors, handleSubmit, submitting } = useForm({
    initialValues: {
      title: '',
      startDate: '',
      endDate: '',
    },
    onSubmit: () => {
      alert(
        `방 생성 시도:::'title :', ${values.title}, 'startDate :', ${values.startDate}, endDate : ${values.endDate}`,
      );
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
            //                errorMessage={errors.nickname}
          />
          ㅡ
          <S.DateInput
            required
            type='date'
            data-placeholder='기간(마감)'
            value={values.endDate}
            onChange={handleChange}
            name='endDate'
            //                errorMessage={errors.password}
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
