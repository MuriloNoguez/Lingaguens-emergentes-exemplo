import { GoogleMapsService } from '../services/GoogleMapsService.js';
import { loadGoogleMapsAPI } from '../utils/googleMapsLoader.js';

export class MapComponent {
  constructor(containerId, apiKey) {
    this.containerId = containerId;
    this.apiKey = apiKey;
    this.mapsService = new GoogleMapsService();
    this.isInitialized = false;
  }

  async initialize() {
    if (this.isInitialized) {
      return;
    }

    try {
      await loadGoogleMapsAPI(this.apiKey);
      await this.mapsService.initializeMap(this.containerId);
      this.isInitialized = true;
      console.log('Map initialized successfully');
    } catch (error) {
      console.error('Error initializing map:', error);
      throw error;
    }
  }

  addLocation(lat, lng, title = '', info = '') {
    if (!this.isInitialized) {
      throw new Error('Map not initialized. Call initialize() first.');
    }

    const marker = this.mapsService.addMarker(
      { lat, lng },
      { title }
    );

    if (info) {
      const infoWindow = new google.maps.InfoWindow({
        content: info
      });

      marker.addListener('click', () => {
        infoWindow.open(this.mapsService.map, marker);
      });
    }

    return marker;
  }

  centerOnLocation(lat, lng, zoom = 15) {
    this.mapsService.setCenter({ lat, lng });
    this.mapsService.setZoom(zoom);
  }

  clearAllMarkers() {
    this.mapsService.clearMarkers();
  }
}
