import styled from '@emotion/styled';

export const AddProjectForm = styled.form`
  width: 320px;
`;

export const InputLayout = styled.div`
  width: 333px;
`;

export const InputTitle = styled.div`
  width: 320px;

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
  }
`;

export const DateInput = styled.input`
  width: 86px;
  height: 36px;

  background: rgba(0, 137, 123, 0.1);
  border-radius: 2px;
`;
