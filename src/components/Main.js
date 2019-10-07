import React from 'react';

import Container from '@material-ui/core/Container';

export default function Main({ children }) {
  return <Container 
            style={{color: 'black', 
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '93vh',
                    alignItems: 'center'}}>
                    { children }
          </Container>
}