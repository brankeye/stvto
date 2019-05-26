import React from 'react';
import styled from '@emotion/styled';
import { font } from 'theme';

const isTitle = type => type === 'title';

const getStylesForType = type => {
  switch (type) {
    case 'title':
      return {
        color: font.highEmphasisColor,
        fontSize: '2rem',
      };
    case 'subtitle':
      return {
        color: font.highEmphasisColor,
        fontSize: '1.5rem',
      };
    case 'body':
      return {
        color: font.mediumEmphasisColor,
        fontSize: '1rem',
      };
  }
};

export const Typography = styled.p(
  {
    fontFamily: font.fontFamily,
  },
  ({ type }) => getStylesForType(type)
);

Typography.defaultProps = {
  type: 'body',
};
