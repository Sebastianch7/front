import React, { useEffect, useState } from 'react';
import apiClient from '../api/apiClient';
import { Location } from '../models/Locations';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Box,
    Paper,
    IconButton,
    Divider,
    Stack,
} from '@mui/material';
import { blue, green, grey } from '@mui/material/colors';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CodeIcon from '@mui/icons-material/Code';

const LocationList: React.FC = () => {
    const [locations, setLocations] = useState<Location[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        apiClient
            .get<Location[]>('/locations')
            .then((response) => setLocations(response.data))
            .catch(() => setError('Error fetching locations'));
    }, []);

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <Box sx={{ padding: 3 }}>
            <Grid container spacing={3}>
                {locations.map((location) => (
                    <Grid item xs={12} sm={6} md={4} key={location.code}>
                        <Paper elevation={4} sx={{ borderRadius: 3, overflow: 'hidden' }}>
                            <Card
                                sx={{
                                    boxShadow: 3,
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        transition: 'transform 0.3s',
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={location.image}
                                    alt={location.name}
                                    sx={{
                                        objectFit: 'cover',
                                        borderBottom: `5px solid ${blue[500]}`,
                                    }}
                                />
                                <CardContent sx={{ padding: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: blue[700] }}>
                                        <LocationOnIcon sx={{ marginRight: 1 }} />
                                        {location.name}
                                    </Typography>

                                    <Divider sx={{ margin: '10px 0' }} />

                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <CodeIcon color="primary" />
                                        <Typography variant="body2" color="text.secondary">
                                            Código: {location.code}
                                        </Typography>
                                    </Stack>

                                    <Stack direction="row" alignItems="center" spacing={1} sx={{ marginTop: 1 }}>
                                        <CalendarTodayIcon color="action" />
                                        <Typography variant="body2" color="text.secondary">
                                            Fecha de Creación: {location.creationDate}
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default LocationList;
