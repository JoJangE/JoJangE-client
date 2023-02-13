import styled from '@emotion/styled'

export const Navbar = styled.div`
  //  background-color: black;
  margin-top: 20px;
  width: 100%;
  display: flex;
  //    justify-content: space-around;
  align-items: center;
  //  position: fixed;

  //  top: 0;
  height: 50px;

  // justify-content: center로 바꾸고 추가 //
  justify-content: center;
  text-align: center;
  & > div:nth-child(2) {
    margin-left: 100px;
    margin-right: 100px;
  }
`

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
  &:hover {
    cursor: pointer;
    filter: darkness(1.5);
    color: #495057;
  }
`
export const BackIcon = styled.img`
  //  width: 100%;
  //  height: 100%;
  //  width: 55px;
  //  height: 75px;
  //  width: 8px;
  //  height: 16px;
  width: 100%;
  height: 100%;
`

export const LogoBox = styled.div`
  /* width: 68px;
  height: 29px;
  font-size: 30px; */

  width: 56px;
  height: 29px;
  left: 167px;
  top: 60px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  /* identical to box height */

  color: #000000;
`
export const Profile = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    overflow: hidden;
  }
`
