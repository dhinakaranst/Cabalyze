import React, { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { MapPin, Navigation, Car, Clock } from 'lucide-react';
import { getUberPriceEstimate } from '../services/uberService';

interface Location {
  lat: number;
  lng: number;
}

interface RidePrice {
  service: string;
  price: number;
  time: number;
  type: string;
  logo: string;
}

const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

if (!GOOGLE_MAPS_API_KEY) {
  console.error('Google Maps API key is missing. Please add it to your .env file.');
}

// Service logos
const SERVICE_LOGOS = {
  Uber: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NCAyNSI+PHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTI4LjYgMTIuM2MtLjYgMC0xLjEuNS0xLjEgMS4xIDAgLjYuNSAxLjEgMS4xIDEuMWgxLjVjLjYgMCAxLjEtLjUgMS4xLTEuMSAwLS42LS41LTEuMS0xLjEtMS4xaC0xLjV6bTQuMyAwYy0uNiAwLTEuMS41LTEuMSAxLjEgMCAuNi41IDEuMSAxLjEgMS4xaDEuNWMuNiAwIDEuMS0uNSAxLjEtMS4xIDAtLjYtLjUtMS4xLTEuMS0xLjFoLTEuNXptLTQuMyA0LjNjLS42IDAtMS4xLjUtMS4xIDEuMSAwIC42LjUgMS4xIDEuMSAxLjFoMS41Yy42IDAgMS4xLS41IDEuMS0xLjEgMC0uNi0uNS0xLjEtMS4xLTEuMWgtMS41em00LjMgMGMtLjYgMC0xLjEuNS0xLjEgMS4xIDAgLjYuNSAxLjEgMS4xIDEuMWgxLjVjLjYgMCAxLjEtLjUgMS4xLTEuMSAwLS42LS41LTEuMS0xLjEtMS4xaC0xLjV6Ii8+PHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTQxLjkgMTIuM2MtLjYgMC0xLjEuNS0xLjEgMS4xIDAgLjYuNSAxLjEgMS4xIDEuMWgxLjVjLjYgMCAxLjEtLjUgMS4xLTEuMSAwLS42LS41LTEuMS0xLjEtMS4xaC0xLjV6bTQuMyAwYy0uNiAwLTEuMS41LTEuMSAxLjEgMCAuNi41IDEuMSAxLjEgMS4xaDEuNWMuNiAwIDEuMS0uNSAxLjEtMS4xIDAtLjYtLjUtMS4xLTEuMS0xLjFoLTEuNXptLTQuMyA0LjNjLS42IDAtMS4xLjUtMS4xIDEuMSAwIC42LjUgMS4xIDEuMSAxLjFoMS41Yy42IDAgMS4xLS41IDEuMS0xLjEgMC0uNi0uNS0xLjEtMS4xLTEuMWgtMS41em00LjMgMGMtLjYgMC0xLjEuNS0xLjEgMS4xIDAgLjYuNSAxLjEgMS4xIDEuMWgxLjVjLjYgMCAxLjEtLjUgMS4xLTEuMSAwLS42LS41LTEuMS0xLjEtMS4xaC0xLjV6Ii8+PHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTU1LjIgMTIuM2MtLjYgMC0xLjEuNS0xLjEgMS4xIDAgLjYuNSAxLjEgMS4xIDEuMWgxLjVjLjYgMCAxLjEtLjUgMS4xLTEuMSAwLS42LS41LTEuMS0xLjEtMS4xaC0xLjV6bTQuMyAwYy0uNiAwLTEuMS41LTEuMSAxLjEgMCAuNi41IDEuMSAxLjEgMS4xaDEuNWMuNiAwIDEuMS0uNSAxLjEtMS4xIDAtLjYtLjUtMS4xLTEuMS0xLjFoLTEuNXptLTQuMyA0LjNjLS42IDAtMS4xLjUtMS4xIDEuMSAwIC42LjUgMS4xIDEuMSAxLjFoMS41Yy42IDAgMS4xLS41IDEuMS0xLjEgMC0uNi0uNS0xLjEtMS4xLTEuMWgtMS41em00LjMgMGMtLjYgMC0xLjEuNS0xLjEgMS4xIDAgLjYuNSAxLjEgMS4xIDEuMWgxLjVjLjYgMCAxLjEtLjUgMS4xLTEuMSAwLS42LS41LTEuMS0xLjEtMS4xaC0xLjV6Ii8+PC9zdmc+',
  Ola: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMjUiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0yMC4yIDUuM2MtLjYgMC0xLjEuNS0xLjEgMS4xIDAgLjYuNSAxLjEgMS4xIDEuMWgxLjVjLjYgMCAxLjEtLjUgMS4xLTEuMSAwLS42LS41LTEuMS0xLjEtMS4xaC0xLjV6bTQuMyAwYy0uNiAwLTEuMS41LTEuMSAxLjEgMCAuNi41IDEuMSAxLjEgMS4xaDEuNWMuNiAwIDEuMS0uNSAxLjEtMS4xIDAtLjYtLjUtMS4xLTEuMS0xLjFoLTEuNXptLTQuMyA0LjNjLS42IDAtMS4xLjUtMS4xIDEuMSAwIC42LjUgMS4xIDEuMSAxLjFoMS41Yy42IDAgMS4xLS41IDEuMS0xLjEgMC0uNi0uNS0xLjEtMS4xLTEuMWgtMS41em00LjMgMGMtLjYgMC0xLjEuNS0xLjEgMS4xIDAgLjYuNSAxLjEgMS4xIDEuMWgxLjVjLjYgMCAxLjEtLjUgMS4xLTEuMSAwLS42LS41LTEuMS0xLjEtMS4xaC0xLjV6Ii8+PC9zdmc+',
  Rapido: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMjUiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0yMC4yIDUuM2MtLjYgMC0xLjEuNS0xLjEgMS4xIDAgLjYuNSAxLjEgMS4xIDEuMWgxLjVjLjYgMCAxLjEtLjUgMS4xLTEuMSAwLS42LS41LTEuMS0xLjEtMS4xaC0xLjV6bTQuMyAwYy0uNiAwLTEuMS41LTEuMSAxLjEgMCAuNi41IDEuMSAxLjEgMS4xaDEuNWMuNiAwIDEuMS0uNSAxLjEtMS4xIDAtLjYtLjUtMS4xLTEuMS0xLjFoLTEuNXptLTQuMyA0LjNjLS42IDAtMS4xLjUtMS4xIDEuMSAwIC42LjUgMS4xIDEuMSAxLjFoMS41Yy42IDAgMS4xLS41IDEuMS0xLjEgMC0uNi0uNS0xLjEtMS4xLTEuMWgtMS41em00LjMgMGMtLjYgMC0xLjEuNS0xLjEgMS4xIDAgLjYuNSAxLjEgMS4xIDEuMWgxLjVjLjYgMCAxLjEtLjUgMS4xLTEuMSAwLS42LS41LTEuMS0xLjEtMS4xaC0xLjV6Ii8+PC9zdmc+'
};

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const pickupInputRef = useRef<HTMLInputElement>(null);
  const dropInputRef = useRef<HTMLInputElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [destinationInput, setDestinationInput] = useState('');
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [prices, setPrices] = useState<RidePrice[]>([]);
  const [distance, setDistance] = useState<string>('');
  const [duration, setDuration] = useState<string>('');

  useEffect(() => {
    const loader = new Loader({
      apiKey: GOOGLE_MAPS_API_KEY || '',
      version: 'weekly',
      libraries: ['places', 'marker']
    });

    loader.load().then(() => {
      if (mapRef.current) {
        const mapInstance = new google.maps.Map(mapRef.current, {
          center: { lat: 0, lng: 0 },
          zoom: 2,
          mapId: 'map_style',
          styles: [
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
            },
            {
              featureType: 'landscape',
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f5' }, { lightness: 20 }]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.fill',
              stylers: [{ color: '#ffffff' }, { lightness: 17 }]
            }
          ]
        });
        setMap(mapInstance);

        // Initialize the Places Autocomplete for both inputs
        if (pickupInputRef.current && dropInputRef.current) {
          const pickupAutocomplete = new google.maps.places.Autocomplete(pickupInputRef.current, {
            types: ['address']
          });

          const dropAutocomplete = new google.maps.places.Autocomplete(dropInputRef.current, {
            types: ['address']
          });

          // Add event listeners for place selection
          pickupAutocomplete.addListener('place_changed', () => {
            const place = pickupAutocomplete.getPlace();
            if (place?.formatted_address) {
              setSearchInput(place.formatted_address);
            }
          });

          dropAutocomplete.addListener('place_changed', () => {
            const place = dropAutocomplete.getPlace();
            if (place?.formatted_address) {
              setDestinationInput(place.formatted_address);
            }
          });
        }
      }
    });
  }, []);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(location);
          if (map) {
            map.setCenter(location);
            map.setZoom(15);
            addMarker(location);
          }
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    }
  };

  const addMarker = (location: Location) => {
    if (map) {
      // Clear existing markers
      markers.forEach(marker => marker.setMap(null));

      const marker = new google.maps.Marker({
        position: location,
        map: map,
        icon: {
          path: google.maps.SymbolPath.CIRCLE,
          scale: 10,
          fillColor: '#4F46E5',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 2
        }
      });

      setMarkers([marker]);
    }
  };

  const createMarkerContent = (type: 'pickup' | 'dropoff' | 'current') => {
    let color = '#4F46E5'; // default color
    if (type === 'pickup') {
      color = '#10B981'; // green
    } else if (type === 'dropoff') {
      color = '#EF4444'; // red
    }

    return {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
      fillColor: color,
      fillOpacity: 1,
      strokeColor: '#ffffff',
      strokeWeight: 2
    };
  };

  const calculatePrices = async () => {
    if (!searchInput || !destinationInput) {
      alert('Please enter both pickup and drop-off locations');
      return;
    }

    try {
      // Get coordinates from Google Places API
      const geocoder = new google.maps.Geocoder();

      const [pickupResult, dropoffResult] = await Promise.all([
        geocoder.geocode({ address: searchInput }),
        geocoder.geocode({ address: destinationInput })
      ]);

      if (!pickupResult.results[0] || !dropoffResult.results[0]) {
        throw new Error('Could not find coordinates for the addresses');
      }

      const pickupLocation = pickupResult.results[0].geometry.location;
      const dropoffLocation = dropoffResult.results[0].geometry.location;

      // Get real Uber price estimate
      const uberPrice = await getUberPriceEstimate(
        pickupLocation.lat(),
        pickupLocation.lng(),
        dropoffLocation.lat(),
        dropoffLocation.lng()
      );

      // Mock data for other services
      const mockPrices: RidePrice[] = [
        {
          service: 'Uber',
          price: uberPrice.price,
          time: uberPrice.duration,
          type: uberPrice.type,
          logo: '/assets/images/uber.png'
        },
        {
          service: 'Ola',
          price: Math.random() * 500 + 100,
          time: Math.floor(Math.random() * 20) + 5,
          type: 'Mini',
          logo: '/assets/images/ola.png'
        },
        {
          service: 'Rapido',
          price: Math.random() * 500 + 100,
          time: Math.floor(Math.random() * 20) + 5,
          type: 'Bike',
          logo: '/assets/images/rapido.png'
        }
      ];

      const sortedPrices = mockPrices.sort((a, b) => a.price - b.price);
      setPrices(sortedPrices);

      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer({
        map,
        suppressMarkers: true,
        polylineOptions: {
          strokeColor: '#4F46E5',
          strokeWeight: 5
        }
      });

      const result = await directionsService.route({
        origin: searchInput,
        destination: destinationInput,
        travelMode: google.maps.TravelMode.DRIVING
      });

      directionsRenderer.setDirections(result);

      // Add markers for pickup and drop-off locations
      const pickupMarker = new google.maps.Marker({
        position: pickupLocation,
        map: map,
        icon: createMarkerContent('pickup')
      });

      const dropoffMarker = new google.maps.Marker({
        position: dropoffLocation,
        map: map,
        icon: createMarkerContent('dropoff')
      });

      setMarkers([pickupMarker, dropoffMarker]);

      // Fit the map to show both locations
      const bounds = new google.maps.LatLngBounds();
      bounds.extend(pickupLocation);
      bounds.extend(dropoffLocation);
      map?.fitBounds(bounds);

      // Add some padding to the bounds
      const padding = 50;
      map?.setZoom(map.getZoom()! - 1);

      setDistance(result.routes[0].legs[0].distance?.text || '');
      setDuration(result.routes[0].legs[0].duration?.text || '');
    } catch (error) {
      console.error('Error calculating route:', error);
      alert('Could not calculate route. Please check your addresses.');
    }
  };

  const centerOnUserLocation = () => {
    if (userLocation && map) {
      map.setCenter(userLocation);
      map.setZoom(15);
      addMarker(userLocation);
    } else {
      getUserLocation();
    }
  };

  return (
    <div className="relative w-full h-full">
      <div className="absolute top-4 left-4 right-4 z-10">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
          <div className="space-y-4">
            <div className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="pickup-input"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Pickup Location
                </label>
                <input
                  ref={pickupInputRef}
                  id="pickup-input"
                  name="pickup-location"
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Enter pickup location"
                  autoComplete="off"
                  aria-label="Pickup location"
                  className=" w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-900 placeholder-gray-500"
                />
              </div>
              <div>
                <label
                  htmlFor="drop-input"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Drop-off Location
                </label>
                <input
                  ref={dropInputRef}
                  id="drop-input"
                  name="dropoff-location"
                  type="text"
                  value={destinationInput}
                  onChange={(e) => setDestinationInput(e.target.value)}
                  placeholder="Enter drop-off location"
                  autoComplete="off"
                  aria-label="Drop-off location"
                  className="  w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-900 placeholder-gray-500"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={calculatePrices}
                className="flex-1 px-4 py-2 bg-indigo-600 text-white text-base sm:text-xs rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex items-center justify-center gap-2"
              >
                <Car className="w-5 h-5 sm:w-4" />
                Compare Prices
              </button>
              <button
                onClick={centerOnUserLocation}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center gap-2"
              >
                <Navigation className="w-5 h-5 sm:w-4" />
                My Location
              </button>
            </div>

            {(distance || duration) && (
              <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Distance: {distance}</span>
                  <span>Duration: {duration}</span>
                </div>
              </div>
            )}

            {prices.length > 0 && (
              <div className="mt-4 space-y-3">
                {prices.map((price, index) => (
                  <div
                    key={price.service}
                    className={`p-4 rounded-lg ${index === 0
                      ? 'bg-green-50 border border-green-200'
                      : 'bg-white border border-gray-200'
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-20 h-8 flex items-center justify-center bg-white rounded">
                          <img
                            src={price.logo}
                            alt={`${price.service} logo`}
                            className="h-6 w-auto object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{price.service}</h3>
                          <p className="text-sm text-gray-500">{price.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">₹{price.price.toFixed(2)}</p>
                        <p className="text-sm text-gray-500 flex items-center justify-end">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {price.time} mins
                        </p>
                      </div>
                    </div>
                    {index === 0 && (
                      <div className="mt-2 text-sm text-green-600">
                        Best Price Available
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        ref={mapRef}
        className="w-full h-full rounded-lg shadow-lg"
        style={{ marginTop: '20px' }} // Add some margin to prevent overlap
      />
    </div>
  );
}