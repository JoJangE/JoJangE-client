import React, { useEffect, useState } from 'react';
import { StringType } from '../../types';

interface FormProps {
  initialValues: StringType;
  onSubmit: (value: StringType) => void;
  validate: (value: StringType) => StringType;
}

export interface IFormReturns {
  values: StringType;
  errors: StringType;
  submitting: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  //  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function useForm({ initialValues, onSubmit, validate }: FormProps): IFormReturns {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target; // name = email 또는 password 등등
    setValues({ ...values, [name]: value });
  };

  useEffect(() => {
    if (submitCount > 0) {
      setErrors(validate(values));
    }
  }, [values]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setSubmitCount((prev) => prev + 1);
    setErrors(validate(values));

    setTimeout(() => {
      //      console.log('서버에 데이터 전송 시도');
      setSubmitting(false);
      /*       if (Object.keys(errors).length === 0) {
        console.log('시도 성공');
        //  로그인 axios 함수
      } else {
        console.log('시도 실패');
      } */
    }, 1000);
    // Promise 대신, 서버에 전송하는 코드 필요 : axios.post(values ...)
  };

  useEffect(() => {
    if (submitting) {
      if (Object.keys(errors).length === 0) {
        //        console.log('에러없음. submit 성공');
        onSubmit(values);
      } else {
        //      console.log('에러 발견');
        //        console.log(errors);
        alert(JSON.stringify(errors));
      }
    }
  }, [submitting, errors]);

  return {
    values,
    errors,
    submitting,
    handleChange,
    handleSubmit,
  };
}

export default useForm;
