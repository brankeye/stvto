import React from 'react';
import styled from '@emotion/styled';
import { font } from 'theme';

const isTitle = type => type === 'title';

export const Typography = styled.p(
  {
    fontFamily: font.fontFamily,
  },
  ({ type }) => ({
    color: isTitle(type) ? font.highEmphasisColor : font.mediumEmphasisColor,
    fontSize: isTitle(type) ? '2rem' : '1rem',
  })
);

Typography.defaultProps = {
  type: 'body',
};
