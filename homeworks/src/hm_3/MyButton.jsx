import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function MyButtons({children, pushed}) {

  const[push, setPush] = React.useState(false);
  const handleClick = () => {
    pushed(push);
    console.log(push.toString());
    setPush(!push);
  };
  return (
    <Stack spacing={2} direction="row">
      {/* <Button variant="text">Text</Button> */}
      <Button onClick={handleClick} variant="contained">{children}</Button>
      {/* <Button variant="outlined">Outlined</Button> */}
    </Stack>
  );
}
