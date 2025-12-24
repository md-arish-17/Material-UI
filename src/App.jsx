import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

function App() {
  return (
    <div style={{ padding: 20 }}>
      <Button variant="contained" size='large'>Hello MUI</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
      <Typography variant='h4'>Arish</Typography>
      <Typography variant='body1'>I am from indore</Typography>
      <Typography variant='subtitle2'>Usman is living in Gudgaon</Typography>
      <Box sx={{ padding: 2, backgroundColor: "lightgray" }}>
        This is a Box
      </Box>

    </div>
  );
}

export default App;
