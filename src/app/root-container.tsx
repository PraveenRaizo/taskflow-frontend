'use client';
import { ThemeProvider } from "@/context/ThemeProvider";
import { Container } from "@mui/material";
import React from "react";

interface RootContainerProps {
    children: React.ReactNode
}

const RootContainer: React.FC<RootContainerProps>=({children})=>{
    return (
        <Container maxWidth={false} style={{ backgroundColor: 'grey', height: '100vh', width: '100%', padding: '0px', margin: 0 }}>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </Container>
    )
}

export default RootContainer;