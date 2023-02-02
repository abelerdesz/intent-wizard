import { Box, styled } from '@mui/material';

interface Props {
  src: string;
  width: string;
  position: string;
}

const StyledImg = styled('img')<Props>`
  position: absolute;
  inset: 0;
  width: ${(props) => props.width};
  height: 100%;
  object-fit: cover;
  object-position: ${(props) => props.position};
  opacity: 0.5;
`;

export const CoverImage = (props: Props) => {
  return (
    <Box width="100%" height="100%" position="relative">
      <StyledImg {...props} />
    </Box>
  );
};
