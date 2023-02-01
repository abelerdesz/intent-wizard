import { useState } from 'react';
import { Typography } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Typography variant="h1">Intents</Typography>
    </div>
  );
}

export default App;
