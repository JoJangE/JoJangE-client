import { StringType } from '../../types';

export default function validate(values: StringType): StringType {
  const errors: StringType = {};
  const startDate = new Date(values.startDate);
  const endDate = new Date(values.endDate);

  if (values.title === '') {
    errors.title = '프로젝트 제목을 입력해주세요.';
  }
  if (startDate > endDate) {
    errors.date = '마감일을 시작날 이후 날짜로 선택해주세요.';
  }

  return errors;
}
