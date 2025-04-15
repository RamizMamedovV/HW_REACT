import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function MyButtons({onClick, children}) {

  const handleClick = () => {
    onClick(true);
  };
  return (
    <Stack spacing={2} direction="row">
      {/* <Button variant="text">Text</Button> */}
      <Button onClick={handleClick} variant="contained">{children}</Button>
      {/* <Button variant="outlined">Outlined</Button> */}
    </Stack>
  );
}
