import { ChangeEvent, FC, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Icon } from 'components';
import { LinkToPage } from 'utils/type';

interface Props {
  items: Array<LinkToPage>;
}

const BottomBar: FC<Props> = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onNavigationChange = useCallback(
    (event: ChangeEvent<{}>, newValue: string) => {
      navigate(newValue);
    },
    [navigate]
  );

  return (
    <BottomNavigation
      value={location.pathname}
      showLabels
      onChange={onNavigationChange}
    >
      {items.map(({ title, path, icon }) => (
        <BottomNavigationAction
          key={`${title}-${path}`}
          label={title}
          value={path}
          icon={<Icon name={icon} />}
        />
      ))}
    </BottomNavigation>
  );
};

export default BottomBar;
