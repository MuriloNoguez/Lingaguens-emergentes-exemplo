import { MapComponent } from './components/MapComponent.js';

// Replace with your actual Google Maps API key
const GOOGLE_MAPS_API_KEY = 'AIzaSyBIwzALxUPNbatRBj_G2_p2ArTIvWhULs4';

class App {
  constructor() {
    this.mapComponent = new MapComponent('map', GOOGLE_MAPS_API_KEY);
    this.init();
  }

  async init() {
    try {
      await this.mapComponent.initialize();
      this.setupEventListeners();
      
      // Add multiple markers for different locations
      this.mapComponent.addLocation(
        -23.55052, 
        -46.633308, 
        'Centro de São Paulo',
        '<h3>Centro de São Paulo</h3><p>Marco zero da cidade</p>'
      );

      this.mapComponent.addLocation(
        -23.5475, 
        -46.6361, 
        'Vila Madalena',
        '<h3>Vila Madalena</h3><p>Bairro boêmio</p>'
      );

      this.mapComponent.addLocation(
        -23.5613, 
        -46.6565, 
        'Avenida Paulista',
        '<h3>Avenida Paulista</h3><p>Principal avenida de SP</p>'
      );
      
    } catch (error) {
      console.error('Failed to initialize app:', error);
      alert('Erro ao carregar o mapa. Verifique sua conexão com a internet.');
    }
  }

  setupEventListeners() {
    document.getElementById('addMarkerBtn')?.addEventListener('click', () => {
      const locations = [
        { lat: -23.5505, lng: -46.6333, name: 'Centro Novo' },
        { lat: -23.5629, lng: -46.6544, name: 'Bela Vista' },
        { lat: -23.5489, lng: -46.6388, name: 'Higienópolis' },
        { lat: -23.5577, lng: -46.6662, name: 'Jardins' }
      ];
      
      const randomLocation = locations[Math.floor(Math.random() * locations.length)];
      
      this.mapComponent.addLocation(
        randomLocation.lat, 
        randomLocation.lng, 
        randomLocation.name,
        `<h3>${randomLocation.name}</h3><p>Localização adicionada automaticamente</p>`
      );
    });

    document.getElementById('clearMarkersBtn')?.addEventListener('click', () => {
      this.mapComponent.clearAllMarkers();
      // Re-add initial markers
      this.addInitialMarkers();
    });

    document.getElementById('centerMapBtn')?.addEventListener('click', () => {
      this.mapComponent.centerOnLocation(-23.55052, -46.633308, 14);
    });
  }

  addInitialMarkers() {
    this.mapComponent.addLocation(
      -23.55052, 
      -46.633308, 
      'Centro de São Paulo',
      '<h3>Centro de São Paulo</h3><p>Marco zero da cidade</p>'
    );
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});
