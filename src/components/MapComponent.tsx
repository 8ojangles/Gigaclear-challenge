import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LoadingSpinner from './LoadingSpinner';

interface Props {
    countryName: string;
    mapError: boolean;
    setMapError: Function;
}

const MapComponent: React.FC<Props> = ({ countryName, mapError, setMapError }) => {
    const [position, setPosition] = useState<[number, number] | null>(null);

    useEffect(() => {
        const fetchCoordinates = async () => {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?country=${countryName}&format=json&limit=1`);
            const data = await response.json();
            if (data.length > 0) {
                const { lat, lon } = data[0];
                setPosition([parseFloat(lat), parseFloat(lon)]);
            }
            if (data.length === 0) {
                setMapError(true);
            }
        };

        try {
            fetchCoordinates();
        } catch (error) {
            setMapError(true);
        };
    }, [countryName]);

    if (mapError) {
        return null;
    }

    return (
        <>
            {!position && !mapError && (
                <LoadingSpinner height={32} />
            )}
            {!mapError && position && (
                <MapContainer center={position} zoom={1} style={{ height: '150px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        // @ts-ignore
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position}>
                        <Popup>{countryName}</Popup>
                    </Marker>
                </MapContainer>
            )}
        </>
    );
};

export default MapComponent;