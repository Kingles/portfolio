import * as React from 'react';
import { forwardRef } from 'react';
import styled from 'styled-components';

const ForkStyles = styled.svg`
  height: 50px;
`

export const Fork = forwardRef((props, ref) => {
  return (
    <ForkStyles viewBox="0 0 53 96.625" enable-background="new 0 0 53 77.3">
      <path d="M47.4,23.2c0-4.4-3.6-7.9-7.9-7.9s-7.9,3.6-7.9,7.9c0,3.1,1.8,5.7,4.3,7.1C34.7,36,30,38.6,23.4,41.6  c-1.6,0.7-3.2,1.5-4.7,2.3V20.6c2.7-1.2,4.7-4,4.7-7.2c0-4.4-3.6-7.9-7.9-7.9c-4.4,0-7.9,3.6-7.9,7.9c0,3.2,1.9,6,4.7,7.2l0,35.4  l0-6v7.7c-2.7,1.2-4.7,4-4.7,7.2c0,4.4,3.6,7.9,7.9,7.9c4.4,0,7.9-3.6,7.9-7.9c0-3.2-1.9-6-4.7-7.2V53c0-2,2.8-3.4,7.4-5.5  c6.4-2.9,14.8-6.8,16.4-16.9C45.4,29.4,47.4,26.6,47.4,23.2z M15.5,9.5c2.2,0,3.9,1.8,3.9,3.9c0,2.2-1.8,3.9-3.9,3.9  c-2.2,0-3.9-1.8-3.9-3.9C11.6,11.3,13.3,9.5,15.5,9.5z M15.5,68.8c-2.2,0-3.9-1.8-3.9-3.9c0-2.2,1.8-3.9,3.9-3.9  c2.2,0,3.9,1.8,3.9,3.9C19.4,67.1,17.6,68.8,15.5,68.8z M39.5,27.2L39.5,27.2c-2.2,0-3.9-1.8-3.9-3.9c0-2.2,1.8-3.9,3.9-3.9  s3.9,1.8,3.9,3.9C43.4,25.4,41.7,27.2,39.5,27.2z" />
    </ForkStyles>
  );
});
