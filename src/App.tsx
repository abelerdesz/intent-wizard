import { SyntheticEvent, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
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
import { IntentId } from './types/Intent';
import { ChatBubble } from './components/ChatBubble';
import { CoverImage } from './components/CoverImage';

function App() {
  const allIntentIds = intents.map((intent) => intent.id);
  const [expandedIntent, setExpandedIntent] = useState<string | null>(null);
  const [selectedIntents, setSelectedIntents] =
    useState<IntentId[]>(allIntentIds);
  const selectAllButtonText = selectedIntents.length
    ? 'Unselect all'
    : 'Select all';

  const onAccordionChange = (e: SyntheticEvent, intentId: IntentId) => {
    if ((e.target as HTMLInputElement).type === 'checkbox') {
      const idIndex = selectedIntents.indexOf(intentId);
      if (idIndex > -1) {
        setSelectedIntents([
          ...selectedIntents.slice(0, idIndex),
          ...selectedIntents.slice(idIndex + 1, selectedIntents.length)
        ]);
      } else {
        setSelectedIntents([...selectedIntents, intentId]);
      }
    } else {
      if (expandedIntent === intentId) {
        setExpandedIntent(null);
      } else {
        setExpandedIntent(intentId);
      }
    }
  };

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
            <Text component="p" mt={2}>
              You can choose to make use of these pretrained intents in your AI
              Bot, and so save time and effort.
            </Text>
          </Grid>
          <Grid item xs={6}>
            <CoverImage src="chat162.svg" width="105%" position="33% 73%" />
          </Grid>
        </Grid>

        <Box mt={7}>
          <Box mb={2} display="flex" justifyContent="flex-end">
            <Button
              onClick={() => {
                if (selectedIntents.length) {
                  setSelectedIntents([]);
                } else {
                  setSelectedIntents(allIntentIds);
                }
              }}
            >
              {selectAllButtonText}
            </Button>
          </Box>

          {intents.map((intent) => (
            <Accordion
              expanded={expandedIntent === intent.id}
              onChange={(e) => onAccordionChange(e, intent.id)}
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
                expandIcon={<ExpandMore />}
                aria-controls={`panel-intent-${intent.name}-content`}
                id={`panel-intent-${intent.name}-header`}
              >
                <Box display="flex" alignItems="center" width="33%" pl={2}>
                  <Text>
                    <strong>{intent.name}</strong>
                  </Text>
                </Box>
                <ChatBubble sender="user">
                  {intent.trainingData.expressions[0].text}
                </ChatBubble>
                <Box flexGrow={1} display="flex" justifyContent="flex-end">
                  <Checkbox
                    checked={selectedIntents.includes(intent.id)}
                    onChange={(e) => {
                      e.stopPropagation();
                    }}
                  />
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <Text>{intent.description}</Text>
                <Box mt={3} mb={1}>
                  <Text variant="overline">Other examples</Text>
                </Box>
                <Box display="flex">
                  <ChatBubble sender="user">
                    {intent.trainingData.expressions[1].text}
                  </ChatBubble>
                  <ChatBubble sender="user">
                    {intent.trainingData.expressions[2].text}
                  </ChatBubble>
                </Box>
                <Box mt={3} mb={1}>
                  <Text variant="overline">Example response</Text>
                </Box>
                <Box display="flex">
                  <ChatBubble sender="bot">{intent.reply.text}</ChatBubble>
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default App;
