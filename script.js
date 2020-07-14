window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);

    const button = document.querySelector('button[data-action="play"]');
    button.innerText = 'Play';
};

function staticLoadPlaces() {
   return [
       {
           name: 'Museum',
           location: {
               lat: 45.413072,
               lng: -75.688640,
           }
           
       },

       {
            name: 'Mammoth',
            location: {
                lat: 45.412591,
                lng: -75.689776,
            }
        
        },
   ];
}

var soundscape = [
    {
        url: './assets/music/Ice Age.mp3',
        position='0 0 0',
        
        
    },
]



function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;

       //creating soundscape
       let soundscape = document.createElement('a-entity')
       soundscape.setAttribute('position', '0 0 0');
       soundscape.setAttribute('src', './assets/music/Ice Age.mp3');

       document.querySelector('button[data-action="play"]').addEventListener('click', function () {
        soundscape.playSound();
    });

      
       //creating new creature
       let model2 = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('gltf-model', './assets/mammoth/ColumbianMammoth.gltf');
       model.setAttribute('rotation', '0 170 0');
       model.setAttribute('animation-mixer', '');
       model.setAttribute('scale', '5 5 5');
       model.setAttribute('position', '20,0,0');

       //creating mammoth
       let model = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('gltf-model', './assets/mammoth/ColumbianMammoth.gltf');
       model.setAttribute('rotation', '0 180 0');
       model.setAttribute('animation-mixer', '');
       model.setAttribute('scale', '10 10 10');

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(model);
   });
}