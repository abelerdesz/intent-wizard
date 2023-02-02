import { useState } from 'react';
import { Box, Button, Container, Typography as Text } from '@mui/material';
import { intents } from './constants/intents';
import { IntentId } from './types/Intent';
import { SelectableIntent } from './components/SelectableIntent';
import { StepIntroduction } from './components/StepIntroduction';

export const App = () => {
  const allIntentIds = intents.map((intent) => intent.id);
  const [expandedIntent, setExpandedIntent] = useState<IntentId | null>(null);
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

  const onSelectAllIntents = () => {
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

        <StepIntroduction />

        <Box mt={7}>
          <Box mb={2} display="flex" justifyContent="flex-end">
            <Button onClick={onSelectAllIntents}>{selectAllButtonText}</Button>
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
