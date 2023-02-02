import { Grid, Typography as Text } from '@mui/material';
import { CoverImage } from './CoverImage';

export const StepIntroduction = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <Text component="p" mt={2}>
          <strong>In order to understand what the user wants</strong>, our AI is
          trained to recognize different intents. Most of the intents are
          specific to the client's business. Some intents, however, are used by
          almost all of our clients.
        </Text>
        <Text component="p" mt={2}>
          You can choose to make use of these pretrained intents in your AI Bot,
          and so save time and effort.
        </Text>
      </Grid>
      <Grid item xs={6}>
        <CoverImage src="chat162.svg" width="105%" position="33% 73%" />
      </Grid>
    </Grid>
  );
};
