import styled from '@emotion/styled';

export const InputModal = styled.div`
  position: fixed;
  transform: translate(-50%);
  top: 10%;
  left: 50%;

  width: 550px;
  height: 80%;
  opacity: 1;
  z-index: 40;

  display: flex;

  background-color: whitesmoke;
  border-radius: 15px;

  z-index: 99;

  display: flex;
  flex-direction: column;
  align-items: center;

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

export const ModalTopColorbar = styled.div`
  color: white;
  // text-align: end;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;

  display: flex;
  justify-content: space-between;

  background-color: #004d40;
  height: 30px;
  width: 100%;
  border-radius: 10px 10px 0% 0%;
`;
