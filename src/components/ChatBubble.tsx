import { styled, Typography } from '@mui/material';

interface Props {
  sender: 'user' | 'bot';
  children: React.ReactNode;
}

const StyledTypography = styled(Typography)<Props>`
  display: flex;
  alignitems: center;
  background: ${(props) =>
    props.sender === 'user' ? 'cornflowerblue' : 'darkcyan'};
  color: white;
  padding: 0.5em 1em;
  margin-right: 1em;
  border-radius: 0.2em 1em 1em 1em;
`;

export const ChatBubble = ({ children, sender }: Props) => (
  <StyledTypography variant="body2" sender={sender}>
    {children}
  </StyledTypography>
);
