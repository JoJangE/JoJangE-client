import styled from '@emotion/styled';
import { InputProps } from './Input';

export const Input = styled.input<InputProps>`
  padding-right: 100px;
  width: 320px;
  height: 48px;
  //  border: 1px solid rgba(0, 137, 123, 0.1);
  border: ${(props) => (props.error ? '1px solid red' : '1px solid rgba(0, 137, 123, 0.1)')};

  margin-bottom: 20px;
  border-radius: 2px;

  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  padding-left: 16px;
  box-sizing: border-box;
  outline: none;

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
`;
