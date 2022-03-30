import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

import React from 'react'

function Footer() {
  return (
    <footer>
      <Box>
        <Container maxWidth='lg'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Ayuda</Box>
              <Box>
                <Link to='#' className='link-footer'>Contacto</Link>
              </Box>
              <Box>
                <Link to='#' className='link-footer'>Soporte</Link>
              </Box>
              <Box>
                <Link to='#' className='link-footer'>Privacidad</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Cuenta</Box>
              <Box>
                <Link to='#' className='link-footer'>Logueo</Link>
              </Box>
              <Box>
                <Link to='#' className='link-footer'>Registro</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Informacion</Box>
              <Box>
                <Link to='#' className='link-footer'>Historia</Link>
              </Box>
              <Box>
                <Link to='#'  className='link-footer'>Sobre Nosotros</Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer