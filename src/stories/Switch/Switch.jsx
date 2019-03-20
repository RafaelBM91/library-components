import React from 'react';
import { withDocs } from 'storybook-readme';
import readme from './Switch.md';
import {
  Switch
} from '../../components/Switch';

import { WithPropTypes } from '../../commond/WithPropTypes';

import styled from 'styled-components';

const Cover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
`;

const Wrapper = () => {
  return (
    <Cover>
      <Switch update={(checked) => console.log(checked)} />
      <br />
      <Switch size={1.2} update={(checked) => console.log(checked)} />
    </Cover>
  );
}

export default () => {
  return withDocs(
    readme,
    WithPropTypes({
      Component: Switch,
      RenderComponent: Wrapper,
      showProp: false
    })
  );
}
