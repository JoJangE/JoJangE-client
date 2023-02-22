import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { headerProps } from '../../../../types/roomListType';

export default function RoomCardHeader({ headerProp }: { headerProp: headerProps }) {
  const { startdate, enddate } = headerProp;

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const MyOptions = ['설정 바꾸기', '나가기', '프로젝트 삭제하기'];

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
            {MyOptions.map((option) => (
              <MenuItem key={option} onClick={handleClose}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      }
      subheader={`${startdate} ~ ${enddate}`}
    />
  );
}
