import styled from '@emotion/styled';

export const AddProjectForm = styled.form`
  width: 320px;
`;

export const InputLayout = styled.div`
  width: 333px;
`;

export const InputTitle = styled.div`
  width: 320px;
  height: 45px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: white;
  border: 1px solid #00897b1a;

  span {
    white-space: nowrap;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    /* identical to box height */

    color: #505050;

    padding-left: 10px;
    padding-right: 5px;
  }
`;

export const DateInput = styled.input`
  position: relative;
  width: 90px;
  height: 36px;
  background: url('data:image/png;base64,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')
    no-repeat / 0px;
  background-color: #00897b1a;
  border-radius: 5px;
  border: none;
  text-align: center;

  &::-webkit-clear-button,
  &::-webkit-inner-spin-button {
    display: none;
  }

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 90px;
    height: 100%;
    background: transparent;
    color: transparent;
    cursor: pointer;
  }
  &::before {
    content: attr(data-placeholder);
    width: 100%;
  }
  &:valid::before {
    display: none;
  }
  &:focus {
    outline: none;
  }
`;
