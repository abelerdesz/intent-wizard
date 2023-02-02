import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  styled,
  Typography as Text
} from '@mui/material';
import { SyntheticEvent } from 'react';
import { Intent, IntentId } from '../types/Intent';
import { ChatBubble } from './ChatBubble';

interface Props {
  intent: Intent;
  isExpanded?: boolean;
  isSelected?: boolean;
  onExpand: (intentId: IntentId) => void;
  onSelect: (intentId: IntentId) => void;
}

const StyledAccordionSummary = styled(AccordionSummary)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  > .MuiAccordionSummary-content {
    align-items: center;
  }
`;

export const SelectableIntent = ({
  intent,
  isExpanded,
  isSelected,
  onExpand,
  onSelect
}: Props) => {
  const onAccordionChange = (e: SyntheticEvent, intentId: IntentId) => {
    if ((e.target as HTMLInputElement).type === 'checkbox') {
      onSelect(intentId);
    } else {
      onExpand(intentId);
    }
  };

  return (
    <Accordion
      expanded={isExpanded}
      onChange={(e) => onAccordionChange(e, intent.id)}
    >
      <StyledAccordionSummary
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
            checked={isSelected}
            data-testid={`checkbox-${intent.id}`}
          />
        </Box>
      </StyledAccordionSummary>

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
  );
};
