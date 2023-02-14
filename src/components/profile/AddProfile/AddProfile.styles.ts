import styled from '@emotion/styled';

export const AddButton = styled.button`
  width: 48px;
  height: 48px;

  background: #004d40;
  border-radius: 24px;

  position: relative;
  bottom: 60px;
  left: 190px;
  &:hover {
    filter: brightness(0.9);
  }
  > span {
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
    font-size: 50px;
    font-weight: bold;
    margin: auto;
    width: 30px;
    height: 50px;
  }
`;

export const AddInput = styled.input`
  display: none;
`;
