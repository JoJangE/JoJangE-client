import useForm from '../../../hooks/common/useForm';
import { roomListProps } from '../../../types/roomListType';
import validate from '../../../utils/validate/createRoomValidate';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import * as S from './ChangeSettingsModal';
import { onHandleSubmit } from '../../../hooks/roomList/handleSubmit';

interface ChangeSettingsModalProps {
  contents: roomListProps[];
  setInputModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChangeSettingsModal({ contents, setInputModal }: ChangeSettingsModalProps) {
  const { values, handleChange, handleSubmit, submitting } = useForm({
    initialValues: {
      id: contents[0].id,
      title: contents[0].title,
      startDate: contents[0].startDate,
      endDate: contents[0].endDate,
      profile: '',
    },
    onSubmit: () => {
      ChangeSettingSubmit();
      setInputModal(false);
    },
    validate,
  });
  const { ChangeSettingSubmit } = onHandleSubmit({ values, contents });

  console.log('전달받은 contents', contents);

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
