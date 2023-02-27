import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { headerProps } from '../../../../types/roomListType';
import styled from '@emotion/styled';

export default function RoomCardHeader({ headerProp }: { headerProp: headerProps }) {
  const { startdate, enddate } = headerProp;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [inputModal, setInputModal] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openInputModal = () => {
    setInputModal(true);
  };

  const changeSetting = () => {
    openInputModal();
    handleClose();
  };
  const exitRoom = () => {
    handleClose();
  };
  const deleteProject = () => {
    handleClose();
  };

  const InputModal = styled.div`
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
  const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #292727;
    opacity: 0.4;
    z-index: 40;
  `;

  return (
    <>
      {inputModal && (
        <>
          <Overlay
            onClick={() => {
              setInputModal(false);
            }}
          ></Overlay>
          <InputModal>
            <form>
              <input placeholder='프로젝트 타이틀' />
              <input placeholder='시작 날짜' />
              <input placeholder='마감 날짜' />
            </form>
          </InputModal>
        </>
      )}
      <CardHeader
        action={
          <div>
            <IconButton
              aria-label='more'
              onClick={handleClick}
              aria-haspopup='true'
              aria-controls='long-menu'
            >
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} keepMounted onClose={handleClose} open={open}>
              <MenuItem key='changeSetting' onClick={changeSetting}>
                설정 바꾸기
              </MenuItem>
              <MenuItem key='exitRoom' onClick={exitRoom}>
                나가기
              </MenuItem>
              {/* 조건문: 방장일 경우 추가 예정 */}
              <MenuItem key='deleteProject' onClick={deleteProject}>
                프로젝트 삭제하기
              </MenuItem>
            </Menu>
          </div>
        }
        subheader={`${startdate} ~ ${enddate}`}
      />
    </>
  );
}
