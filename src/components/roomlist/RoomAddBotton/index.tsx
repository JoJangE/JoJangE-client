import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { useRouter } from 'next/router';
import { paths } from '../../../constants/paths';

export default function RoomButton() {
  const router = useRouter();

  const moveAddRoomPage = () => {
    router.push(paths.createNewProject).catch((err) => {
      console.log(err);
    });
  };

  return (
    <IconButton
      onClick={moveAddRoomPage}
      sx={{ backgroundColor: '#004D40', width: '48px', height: '48px' }}
    >
      <AddIcon sx={{ color: 'white', width: '28px', height: '28px ' }} />
    </IconButton>
  );
}
