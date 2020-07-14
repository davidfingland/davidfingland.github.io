window.onload = () => {
    const button = document.querySelector('button[data-action="play"]');
    button.innerText = 'A';
  
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [
       {
           name: 'Magnemite',
           location: {
               lat: 45.412198,
               lng: -75.693039,
           }
       },

       {
        name: 'Museum',
        location: {
            lat: 45.412748,
            lng: -75.688668,
        }
    },
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;

       let model = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('gltf-model', './assets/mammoth/ColumbianMammoth.gltf');
       model.setAttribute('rotation', '0 180 0');
       model.setAttribute('animation-mixer', '');
       model.setAttribute('scale', '5 5 5');

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(model);
   });
}