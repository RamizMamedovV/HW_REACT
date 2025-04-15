import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SaveIcon from '@mui/icons-material/Save';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button> */}
      <Button variant="contained" endIcon={<SaveIcon />}>
        SAVE
      </Button>
    </Stack>
  );
}



