import { css } from '@emotion/react'
// import React from 'react'

// { children }: { children: React.ReactNode }

export const RoomContainer = css`
  border: black 1px solid;
  border-radius: 8px;
  width: 320px;
  height: 150px;
`

export const RoomTitle = css`
  font-weight: bold;
  font-size: 20px;
`

export const RoomMemberImage = css`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`

export const RoomActionDropdownButton = css`
  border-radius: 50%;
  width: 32px;
  height: 32px;
`

export const RoomActionDropdownContainer = css`
  display: flex;
  justify-content: center;
  border-radius: 8px;
  border: gray 1px solid;
`

export const RoomActionButton = css`
  width: 136px;
  text-align: center;
`

export const RoomAddButton = css`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: white;
  font-weight: bolder;
  background-color: #004d40;
  font-size: 30px;
`
