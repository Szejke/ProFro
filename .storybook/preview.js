import { addDecorator } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import { Provider } from 'react-redux';
import store from 'store';

addDecorator((storyFn) => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
      </Provider>
    </>
  );
});
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
