export class GoogleMapsService {
  constructor() {
    this.map = null;
    this.markers = [];
    this.mapOptions = {
      center: { lat: -23.55052, lng: -46.633308 },
      zoom: 13,
      styles: [
        {
          featureType: "all",
          elementType: "geometry.fill",
          stylers: [
            { fillOpacity: 0.7 },
            { strokeColor: "#000" },
            { strokeWidth: 2 },
            { strokeOpacity: 1 }
          ]
        },
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [
            { visibility: "on" },
            { fillOpacity: 1 },
            { strokeColor: "#000000" },
            { strokeWidth: 0.5 },
            { strokeOpacity: 1 }
          ]
        }
      ]
    };
  }

  async initializeMap(containerId) {
    if (!window.google || !window.google.maps) {
      throw new Error('Google Maps API not loaded');
    }

    const container = document.getElementById(containerId);
    if (!container) {
      throw new Error(`Container with id '${containerId}' not found`);
    }

    this.map = new google.maps.Map(container, this.mapOptions);
    return this.map;
  }

  addMarker(position, options = {}) {
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      ...options
    });

    this.markers.push(marker);
    return marker;
  }

  clearMarkers() {
    this.markers.forEach(marker => marker.setMap(null));
    this.markers = [];
  }

  setCenter(position) {
    if (this.map) {
      this.map.setCenter(position);
    }
  }

  setZoom(zoom) {
    if (this.map) {
      this.map.setZoom(zoom);
    }
  }
}
