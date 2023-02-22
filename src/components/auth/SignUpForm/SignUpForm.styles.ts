import styled from '@emotion/styled'

export const SignUpForm = styled.form``

export const InputLayout = styled.div`
  width: 333px;
`
export const ConfirmButton = styled.button`
  position: relative;
  top: -62px;
  left: 250px;

  width: 64px;
  height: 36px;
  background: #004d40;
  border-radius: 8px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;

  color: #ffffff;

  &:hover {
    filter: brightness(0.9);
  }
`
export const InputTitle = styled.label`
  box-sizing: border-box;
  margin-bottom: 10px;

  width: 120px;
  height: 17px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: #505050;

  position: relative;
  left: -50px;
  &:hover {
    cursor: pointer;
  }
`
