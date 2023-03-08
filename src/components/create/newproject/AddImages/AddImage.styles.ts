import styled from '@emotion/styled';

export const AddImage = styled.div`
  width: 320px;
  height: 150px;

  background: #e9ecef;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  span {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: #505050;
  }
`;

export const AddButton = styled.button`
  position: relative;
  top: 35%;
  left: 30%;

  width: 24px;
  height: 24px;

  background: #004d40;
  border-radius: 24px;

  color: white;
  font-size: 17px;
`;
