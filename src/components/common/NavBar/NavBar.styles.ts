import styled from '@emotion/styled';

export const Navbar = styled.div`
  //  background-color: black;
  margin-top: 20px;
  width: 100vw;
  display: flex;
  //    justify-content: space-around;
  align-items: center;
  //  position: fixed;

  //  top: 0;
  height: 50px;

  // justify-content: center로 바꾸고 추가 //
  justify-content: space-between;
  text-align: center;

  > div:nth-child(3) {
    // UserIcon
    margin-right: 50px;
    &:hover {
      cursor: pointer;
      filter: brightness(0.9);
    }
  }
`;

export const BackButton = styled.button`
  //  font-size: 100%;
  //  font-size: 20px;
  //  line-height: 0px;
  border: none;
  background-color: inherit;
  width: 16px;
  height: 30px;

  font-size: 17px;
  font-weight: bold;

  margin-left: 50px;
  &:hover {
    cursor: pointer;
    color: #495057;
    filter: brigtness(0.8);
  }
`;
export const BackIcon = styled.img`
  //  width: 100%;
  //  height: 100%;
  //  width: 55px;
  //  height: 75px;
  //  width: 8px;
  //  height: 16px;
  width: 100%;
  height: 100%;
`;

export const LogoBox = styled.div`
  /* width: 68px;
  height: 29px;
  font-size: 30px; */
  width: 56px;
  height: 29px;
  left: 167px;
  top: 60px;
  padding-left: 30px; // 가운데 정렬을 위함

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  /* identical to box height */

  color: #000000;
`;
export const Profile = styled.div`
  margin-right: 50px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    overflow: hidden;
  }
`;
