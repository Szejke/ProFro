import React from 'react';
import styled from 'styled-components';
import { Drawer, ListItem, List, ListItemIcon, ListItemText, SvgIcon } from '@material-ui/core';
import { Mail, Settings, Shuffle } from '@material-ui/icons';

const StyledWrapper = styled.div`
  && .root {
    width: '100%';
    max-width: 360;
  }
`;
const StyledDrawer = styled(Drawer)`
  && .MuiDrawer-paper {
    margin-top: 80px;
  }
`;

const DrawerLeft = () => {
  const itemsList = [
    {
      text: 'System Compare PDF',
      icon: Shuffle,
    },
    {
      text: 'Mail',
      icon: Mail,
    },
    {
      text: 'Settings',
      icon: Settings,
    },
  ];

  return (
    <StyledWrapper>
      <StyledDrawer variant="permanent">
        <List>
          {itemsList.map(({ text, icon }) => (
            <ListItem button key={text}>
              {icon && (
                <ListItemIcon>
                  <SvgIcon component={icon} />
                </ListItemIcon>
              )}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
    </StyledWrapper>
  );
};

export default DrawerLeft;
