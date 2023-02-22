import styled from '@emotion/styled'

export const Input = styled.input`
  padding-right: 100px;
  width: 320px;
  height: 48px;
  border: 1px solid rgba(0, 137, 123, 0.1);
  margin-bottom: 20px;
  border-radius: 2px;

  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  padding-left: 16px;
  box-sizing: border-box;

  &::placeholder {
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    box-sizing: border-box;
  }
  &:focus::placeholder {
    color: transparent;
    box-sizing: border-box;
    line-height: 29px;
  }
`
