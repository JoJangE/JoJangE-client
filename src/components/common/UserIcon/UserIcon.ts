import styled from '@emotion/styled';

export const Profile = styled.div<{ size: string; borderRadius: string }>`
  //  margin-right: 50px;

  img {
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    //    border-radius: 10px;
    border-radius: ${(props) => props.borderRadius};
    overflow: hidden;
  }

  &:hover {
    cursor: pointer;
    //    filter: brightness(0.9);
  }
`;
