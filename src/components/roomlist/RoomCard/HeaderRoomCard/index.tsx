import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ChangeSettingsModal from '../../changeSettingsModal';

import UpdateProjectList from '../../../../hooks/roomList/UpdateProjectList';
import { headerProps } from '../../../../types/roomListType';
import * as S from './HeaderRoomCard.styles';

export default function RoomCardHeader({ headerProp }: { headerProp: headerProps }) {
  const { id, startDate, endDate } = headerProp;

  const {
    handleClick,
    anchorEl,
    contents,
    inputModal,
    setInputModal,
    handleClose,
    changeSetting,
    exitRoom,
    deleteProject,
  } = UpdateProjectList();

  const open = Boolean(anchorEl);

  return (
    <>
      {inputModal && (
        <>
          <S.Overlay
            onClick={() => {
              setInputModal(false);
            }}
          ></S.Overlay>
          <ChangeSettingsModal setInputModal={setInputModal} contents={contents} />
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
              <MenuItem
                onClick={() => {
                  changeSetting(id);
                }}
              >
                설정 바꾸기
              </MenuItem>
              <MenuItem
                onClick={() => {
                  exitRoom(id);
                }}
              >
                나가기
              </MenuItem>
              {/* 조건문: 방장일 경우 추가 예정 */}
              <MenuItem
                onClick={() => {
                  deleteProject(id);
                }}
                data-id={id}
              >
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
