import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { roomListState } from '../../recoil/rooms/atoms';
import { roomListProps } from '../../types/roomListType';

export default function UpdateProjectList() {
  const [mockDate, setMockDate] = useRecoilState(roomListState);
  const [contents, setContents] = useState<roomListProps[]>([]);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [inputModal, setInputModal] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openInputModal = () => {
    setInputModal(true);
  };

  const changeSetting = (clickedId: any) => {
    setContents(mockDate.filter((project: roomListProps) => project.id === clickedId));
    openInputModal();
    handleClose();
  };

  const exitRoom = (clickedId: string) => {
    handleClose();
    const newProjectList = mockDate.filter((project: roomListProps) => project.id !== clickedId);
    setMockDate(newProjectList);
  };

  const deleteProject = (clickedId: string) => {
    handleClose();
    const newProjectList = mockDate.filter((project: roomListProps) => project.id !== clickedId);
    setMockDate(newProjectList);
  };

  return {
    handleClick,
    anchorEl,
    contents,
    inputModal,
    setInputModal,
    handleClose,
    openInputModal,
    changeSetting,
    exitRoom,
    deleteProject,
  };
}
