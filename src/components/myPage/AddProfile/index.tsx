import { useRef } from 'react';
import * as S from './AddProfile.styles';

function AddProfile() {
  const profileImgInput = useRef<HTMLInputElement>(null);

  const onAddImgBtnClick = () => {
    if (profileImgInput.current != null) {
      profileImgInput.current.click();
    }
  };
  const onImgChange = async (event: any) => {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    //    const response = await apiClient.post('url', formData)
  };
  return (
    <>
      <S.AddInput
        ref={profileImgInput}
        type='file'
        accept='image/*'
        name='file'
        onChange={() => onImgChange}
      />
      <S.AddButton
        onClick={() => {
          onAddImgBtnClick();
        }}
      >
        <span>+</span>
      </S.AddButton>
    </>
  );
}

export default AddProfile;
