import styled from '@emotion/styled';
import { font, mq } from 'theme';

const styles = {
  title: {
    color: font.highEmphasisColor,
    fontSize: '2rem',
    [mq.mobile]: {
      fontSize: '1rem',
    },
  },
  subtitle: {
    color: font.highEmphasisColor,
    fontSize: '1.5rem',
    [mq.mobile]: {
      fontSize: '0.9rem',
    },
  },
  body: {
    color: font.mediumEmphasisColor,
    fontSize: '1rem',
    [mq.mobile]: {
      fontSize: '0.8rem',
    },
  },
  quote: {
    color: font.mediumEmphasisColor,
    fontSize: '1rem',
    marginLeft: '2.5rem',
    [mq.mobile]: {
      fontSize: '0.8rem',
    },
  },
};

const getStylesForType = type => styles[type];

export const Typography = styled.p(
  {
    fontFamily: font.fontFamily,
  },
  ({ type, bold, color }) => {
    const styles = getStylesForType(type);
    return {
      ...styles,
      ...(bold && { fontWeight: 'bold' }),
      ...(color && { color }),
    };
  }
);

Typography.defaultProps = {
  type: 'body',
};
