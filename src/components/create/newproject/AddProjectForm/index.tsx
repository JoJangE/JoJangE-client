import React, { useCallback, useRef } from 'react';
import Button from '../../../common/Button/Button';
import Input from '../../../common/Input/Input';
import validate from '../../../../utils/validate/AuthValidate';
import useForm from '../../../../hooks/common/useForm';
import * as S from './AddProjectForm.styles';

// import signUpPost from '../../../hooks/auth/signUpPost';

export function SignUpForm() {
  const { values, errors, handleChange, handleSubmit, submitting } = useForm({
    initialValues: {
      title: '',
      startdate: '',
      enddate: '',
    },
    onSubmit: () => {
      alert(
        `방 생성 시도:::'title :', ${values.title}, 'startdate :', ${values.startdate}, enddate : ${values.enddate}`,
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
            className='startdate'
            data-placeholder='기간(시작)'
            value={values.startdate}
            onChange={handleChange}
            name='startdate'
            //                errorMessage={errors.nickname}
          />
          ㅡ
          <S.DateInput
            required
            type='date'
            className='enddate'
            data-placeholder='기간(마감)'
            value={values.enddate}
            onChange={handleChange}
            name='enddate'
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

export default SignUpForm;
