import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChangeSettingsModal from '../../changeSettingsModal';

import { headerProps, roomListProps } from '../../../../types/roomListType';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { roomListState } from '../../../../recoil/rooms/atoms';

export default function RoomCardHeader({ headerProp }: { headerProp: headerProps }) {
  const { id, startDate, endDate } = headerProp;
  const [mockDate, setMockDate] = useRecoilState(roomListState);

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
    console.log(`${id} 프로젝트 삭제 요청`);
    const newProjectList = mockDate.filter((project: roomListProps) => project.id !== id);
    setMockDate(newProjectList);
  };

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

  const [contents, setContents] = useState<roomListProps[]>([]);

  useEffect(() => {
    setContents(mockDate.filter((project: roomListProps) => project.id === id));
  }, [mockDate]);

  return (
    <>
      {inputModal && (
        <>
          <Overlay
            onClick={() => {
              setInputModal(false);
            }}
          ></Overlay>
          <ChangeSettingsModal id={id} setInputModal={setInputModal} contents={contents} />
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
              <MenuItem key={`deleteProject-${id}`} onClick={deleteProject}>
                프로젝트 삭제하기
              </MenuItem>
            </Menu>
          </div>
        }
        subheader={`${startDate} ~ ${endDate}`}
      />
    </>
  );
}
