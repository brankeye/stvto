import React from 'react';
import styled from '@emotion/styled';
import { mq } from 'theme';

export const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  padding: '0 25%',
  [mq.mobile]: {
    padding: '0 1rem',
  },
});
