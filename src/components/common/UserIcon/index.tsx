import React from 'react';
import * as S from './UserIcon';

interface UserIconProps {
  size?: string;
  borderRadius?: string;
  src?: string;
}

function UserIcon({ src, size = '50px', borderRadius = '10px' }: UserIconProps) {
  return (
    <S.Profile size={size} borderRadius={borderRadius}>
      {src != null ? (
        <img src={src} alt='profile' />
      ) : (
        <img
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973461_960_720.png'
          alt='profile'
        />
      )}
    </S.Profile>
  );
}

export default UserIcon;
