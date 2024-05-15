import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts({type, msg}) {

   
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={type}>{msg}</Alert>
    </Stack>
  );
}