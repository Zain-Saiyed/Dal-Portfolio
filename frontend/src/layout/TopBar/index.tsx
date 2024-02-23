import { FC, ReactNode } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

interface Props {
  endNode?: ReactNode;
  startNode?: ReactNode;
}

const TopBar: FC<Props> = ({ endNode, startNode, ...restOfProps }) => {
  return (
    <AppBar
      component="div"
      sx={{
        background: "transparent",
        boxShadow: "none",
      }}
      {...restOfProps}
    >
      <Toolbar disableGutters sx={{ paddingX: 1 }}>
        {startNode}

        <Typography
          variant="h6"
          sx={{
            marginX: 1,
            flexGrow: 1,
            textAlign: 'center',
            whiteSpace: 'nowrap',
          }}
        >
        </Typography>

        {endNode}
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
