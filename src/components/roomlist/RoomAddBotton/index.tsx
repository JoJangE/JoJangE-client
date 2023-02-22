import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

export default function RoomButton() {
  return (
    <IconButton sx={{ backgroundColor: '#004D40', width: '48px', height: '48px' }}>
      <AddIcon sx={{ color: 'white', width: '28px', height: '28px ' }} />
    </IconButton>
  );
}
