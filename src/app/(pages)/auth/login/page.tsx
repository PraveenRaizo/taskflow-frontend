'use client';

import { Button, Card, Grid, IconButton, TextField, Typography, useTheme } from '@mui/material';
import { loadFull } from 'tsparticles';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { Container, Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { ThemeContext } from '@/context/ThemeProvider';
import { Brightness4, Brightness7, Height } from '@mui/icons-material';
import TaskFlowLogo from '../../../../../public/task_flow_bg_removed.png';
import Image from 'next/image';

const LoginPage = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const muiTheme = useTheme();
  const [init, setInit] = useState(false);

  useEffect(()=>{
    initParticlesEngine(async(engine: Engine)=>{
      await loadSlim(engine);
    }).then(()=>{
      setInit(true);
    })
  },[]);

  const particlesLoaded = useCallback(async(container: Container | undefined)=>{
    console.log('particles loaded:--', container)
  },[])
  
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
    {init && (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          background: {
            color: { value: muiTheme.palette.background.default }, // Dark blue background
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: 'push' },
              // onHover: { enable: true, mode: 'repulse' },
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: muiTheme.palette.text.primary },
            links: {
              color: muiTheme.palette.text.primary,
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: { default: 'bounce' },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                width: 800, // Replacing area with width
                height: 800, // Adding height
              },
              value: 80,
            },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
          resize: true, // Fixed resize property placement
        }}
      />
    )}
    
    {/* Centered Grid Container */}
    <Grid
      container 
      justifyContent="center" 
      alignItems="center" 
      style={{ height: '100vh', position: 'absolute', width: '100%' }}
      sx={{ backgroundColor: 'transparent' }}
    >
      <Card sx={{ padding: 4, textAlign: 'center', backgroundColor: muiTheme.palette.background.paper }}>
        {/* <Typography variant="h5" sx={{ color: muiTheme.palette.text.primary, fontWeight:'bold', marginBottom:'1rem' }}>
          TaskFlow
        </Typography> */}
        <Grid container justifyContent="center">
            <Image src={TaskFlowLogo} alt="TaskFlow Logo" width={150} height={150} />
        </Grid>
        
        <Grid container spacing={2} direction={'column'}>
          <Grid size={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              sx={{ backgroundColor: muiTheme.palette.background.default }}
            />
          </Grid>

          <Grid size={12}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              sx={{ backgroundColor: muiTheme.palette.background.default }}
            />
          </Grid>

          <Grid size={12}>
            <Button 
            variant="contained" 
            color="primary" 
            fullWidth
            sx={{ textTransform: 'none', fontWeight: 'bold' }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Card>  
    </Grid>

    {/* Theme Toggle Button */}
    <IconButton
      onClick={toggleTheme}
      sx={{ position: 'absolute', top: 16, right: 16, color: muiTheme.palette.text.primary }}
    >
        {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>

  </div>
  );
};

export default LoginPage;
