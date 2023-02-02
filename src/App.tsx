import { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Container,
  Grid,
  styled,
  Typography as Text
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { intents } from './constants/intents';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

const ChatBubble = styled(Text)`
  display: flex;
  alignitems: center;
  background: blue;
  color: white;
  padding: 0.5em 1em;
  border-radius: 0.2em 1em 1em 1em;
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box py={5}>
      <Container maxWidth="md">
        <Text variant="h1" mb={4}>
          Intents
        </Text>
        <Grid container>
          <Grid item xs={6}>
            <Text component="p" mt={2}>
              <strong>In order to understand what the user wants</strong>, our
              AI is trained to recognize different intents. Most of the intents
              are specific to the client's business. Some intents, however, are
              used by almost all of our clients.
            </Text>
            <Text component="p" mt={2}></Text>
            <Text component="p" mt={2}>
              You can choose to make use of these pretrained intents in your AI
              Bot, and so save time and effort.
            </Text>
          </Grid>
          <Grid item xs={6}>
            <Box width="100%" height="100%" position="relative">
              <img
                src="chat162.svg"
                style={{
                  position: 'absolute',
                  inset: 0,
                  objectFit: 'cover',
                  objectPosition: '33% 73%',
                  width: '105%',
                  height: '100%',
                  opacity: 0.5
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Box mt={6}>
          <Box mb={2} display="flex" justifyContent="flex-end">
            <Button>Select all</Button>
          </Box>
          {intents.map((intent) => (
            <Accordion
              expanded={false}
              onChange={(e) => {
                if ((e.target as HTMLInputElement).type === 'checkbox') {
                  console.log('acco clicked', e.target);
                } else {
                  console.log('not a checkboc');
                }
              }}
            >
              <AccordionSummary
                sx={{
                  display: 'flex',
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  '& .MuiAccordionSummary-content': {
                    alignItems: 'center'
                  }
                }}
                expandIcon={
                  <Box mr={1} display="flex" alignItems="center">
                    <ExpandMore />
                  </Box>
                }
                aria-controls={`panel-intent-${intent.name}-content`}
                id={`panel-intent-${intent.name}-header`}
              >
                <Box display="flex" alignItems="center" width="33%">
                  <Text>
                    <strong>{intent.name}</strong>
                  </Text>
                </Box>
                <ChatBubble variant="body2">
                  {intent.trainingData.expressions[0].text}
                </ChatBubble>
                <Box flexGrow={1} display="flex" justifyContent="flex-end">
                  <Checkbox
                    onChange={(e) => {
                      e.stopPropagation();
                    }}
                  />
                </Box>
              </AccordionSummary>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default App;
