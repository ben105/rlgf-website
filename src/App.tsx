import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import './App.css';

function App() {
  const theme = useTheme();
  return (
    <div>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex' }}>
            <Typography gutterBottom sx={{ color: theme.palette.text.secondary, fontSize: 14 }}>
              Word of the Day
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
