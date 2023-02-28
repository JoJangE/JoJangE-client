import styled from '@emotion/styled';

export const InputModal = styled.div`
  position: fixed;
  transform: translate(-50%, 0);
  top: 10%;
  left: 50%;

  width: 60%;
  height: 80%;
  background-color: #00897b;
  opacity: 1;
  z-index: 40;

  display: flex;
  justify-content: center;

  > form {
    padding-top: 20%;
    display: flex;
    flex-direction: column;
    width: 50%;
    > input {
      margin-bottom: 20px;
    }
  }
`;
