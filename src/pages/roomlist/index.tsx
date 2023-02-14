import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import { CardActionArea } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import AvatarGroup from '@mui/material/AvatarGroup';

// import Button from '@mui/material/Button';

// import { makeStyles } from '@material-ui/core/styles';
// import { Add } from '@material-ui/icons';

export default function RecipeReviewCard() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const MyOptions = ['설정 바꾸기', '나가기', '프로젝트 삭제하기'];

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Card
        sx={{
          width: '320px',
          height: '150px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingBottom: '8px',
          borderRadius: '8px',
        }}
      >
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
          subheader='September 14, 2016'
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0 20px',
          }}
        >
          <Typography color='black' sx={{ fontWeight: 700, marginBottom: 0, fontSize: 20 }}>
            프로젝트 1
          </Typography>
          <AvatarGroup max={2}>
            <Avatar alt={'abcd'[0]} src='/static/images/avatar/2.jpg' />
            <Avatar alt='dhwogh' src='/static/images/avatar/2.jpg' />
            <Avatar alt='rlaaudrbs' src='/static/images/avatar/3.jpg' />
            <Avatar alt='ehdmsco' src='/static/images/avatar/4.jpg' />
            <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
            <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
            <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
          </AvatarGroup>
        </div>
      </Card>
      {/* <IconButton>
        <Add/>
      </IconButton> */}
    </div>
  );
}
