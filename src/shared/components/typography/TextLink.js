import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.p`
  color: #2e71f8;
  cursor: pointer;
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
`;

export default function TextLink({ children, ...rest }) {
  return <TextWrapper {...rest}>{children}</TextWrapper>;
}
