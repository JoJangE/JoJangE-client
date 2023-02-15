import {
  RoomContainer,
  RoomTitle,
  RoomMemberImage,
  RoomActionButton,
  RoomAddButton,
} from './room.style'

export function Room() {
  return (
    <div css={RoomContainer}>
      <div css={RoomTitle}>{'room1'}</div>
      <button css={RoomMemberImage}>{'...'}</button>
      <button css={RoomActionButton}>{'...'}</button>
      <button css={RoomAddButton}>{'+'}</button>
    </div>
  )
}
