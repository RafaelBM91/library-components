import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { create } from '@storybook/theming/create';
import { createGlobalStyle } from "styled-components";

import * as Loader from "../assets/loader.svg";

const storyBookTheme = create({
    brandTitle: 'RBM91',
    brandImage: Loader,
    brandUrl: '/',
});

addParameters({
    grid: { cellSize: 10 },
    options: {
        theme: storyBookTheme,
    },
});

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
