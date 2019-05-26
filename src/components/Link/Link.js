import React from 'react';
import { Link as InternalLink } from 'gatsby';
import styled from '@emotion/styled';
import { font } from 'theme';

export const Link = styled(InternalLink)({
  fontFamily: font.fontFamily,
});
