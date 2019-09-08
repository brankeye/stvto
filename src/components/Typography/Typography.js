import React from 'react';
import styled from '@emotion/styled';
import { font, mq } from 'theme';

const isTitle = type => type === 'title';

const getStylesForType = type => {
  switch (type) {
    case 'title':
      return {
        color: font.highEmphasisColor,
        fontSize: '2rem',
        [mq.mobile]: {
          fontSize: '1rem',
        },
      };
    case 'subtitle':
      return {
        color: font.highEmphasisColor,
        fontSize: '1.5rem',
        [mq.mobile]: {
          fontSize: '0.9rem',
        },
      };
    case 'body':
      return {
        color: font.mediumEmphasisColor,
        fontSize: '1rem',
        [mq.mobile]: {
          fontSize: '0.8rem',
        },
      };
    case 'quote':
      return {
        color: font.mediumEmphasisColor,
        fontSize: '1rem',
        marginLeft: '2.5rem',
        [mq.mobile]: {
          fontSize: '0.8rem',
        },
      };
  }
};

export const Typography = styled.p(
  {
    fontFamily: font.fontFamily,
  },
  ({ type, bold }) => {
    const styles = getStylesForType(type);
    return {
      ...styles,
      ...(bold && { fontWeight: 'bold' }),
    };
  }
);

Typography.defaultProps = {
  type: 'body',
};
