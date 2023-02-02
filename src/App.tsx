import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography as Text
} from '@mui/material';
import { intents } from './constants/intents';
import { IntentId } from './types/Intent';
import { CoverImage } from './components/CoverImage';
import { SelectableIntent } from './components/SelectableIntent';

export const App = () => {
  const allIntentIds = intents.map((intent) => intent.id);
  const [expandedIntent, setExpandedIntent] = useState<string | null>(null);
  const [selectedIntents, setSelectedIntents] =
    useState<IntentId[]>(allIntentIds);
  const selectAllButtonText = selectedIntents.length
    ? 'Unselect all'
    : 'Select all';

  const onSelectIntent = (intentId: IntentId) => {
    const idIndex = selectedIntents.indexOf(intentId);

    if (idIndex > -1) {
      setSelectedIntents([
        ...selectedIntents.slice(0, idIndex),
        ...selectedIntents.slice(idIndex + 1, selectedIntents.length)
      ]);
    } else {
      setSelectedIntents([...selectedIntents, intentId]);
    }
  };

  const onExpandIntent = (intentId: IntentId) => {
    if (expandedIntent === intentId) {
      setExpandedIntent(null);
    } else {
      setExpandedIntent(intentId);
    }
  };

  const onSelectAllButtonClick = () => {
    if (selectedIntents.length) {
      setSelectedIntents([]);
    } else {
      setSelectedIntents(allIntentIds);
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
            <Button onClick={onSelectAllButtonClick}>
              {selectAllButtonText}
            </Button>
          </Box>

          {intents.map((intent) => (
            <SelectableIntent
              key={intent.id}
              intent={intent}
              isExpanded={expandedIntent === intent.id}
              isSelected={selectedIntents.includes(intent.id)}
              onExpand={onExpandIntent}
              onSelect={onSelectIntent}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};
