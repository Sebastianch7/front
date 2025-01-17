import React from 'react';
import LocationList from './components/LocationList';
import { Container, Typography, AppBar, Toolbar, Button, Box } from '@mui/material';

const App: React.FC = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <AppBar position="sticky" sx={{ marginBottom: 2 }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Lista de Sedes
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

            <Container>
                <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
                    Explora nuestras Sedes
                </Typography>
                <LocationList />
            </Container>
        </Box>
    );
};

export default App;
