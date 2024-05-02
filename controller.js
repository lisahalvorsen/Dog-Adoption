function changeView(view) {
    currentPage = view;
    updateView();
}

function chooseDog(id) {
    chosenDog = id;
    changeView('displayDog');
}

function displayDogBio(dogName) { // hjelp
    let html = '';

    if (dogName === 'Max') html = displayMaxInfo();
    else if (dogName === 'Ronaldo') html = displayRonaldoInfo();
    else if (dogName === 'Luna') html = displayLunaInfo();
    else if (dogName === 'Kira') html = displayKiraInfo();
    console.log(dogs[chosenDog].name);
    return html;
}

function setSearchBreed(breed) {
    breedToSearch = breed;
    console.log(breed);
    fetchDogBreedData();
}

function fetchDogBreedData() {
    fetch(apiUrl + dogs[chosenDog].breed, {
        headers: { 'X-API-KEY': apiKey },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Kunne ikke laste inn hundedata');
            }
            return response.json();
        })
        .then(data => {
            console.log('Response data: ', data);
            const dogData = data[0];

            dogBreedData.name = dogData.name;
            dogBreedData.image = dogData.image_link;
            dogBreedData.shedding = dogData.shedding;
            dogBreedData.grooming = dogData.grooming;
            dogBreedData.playfulness = dogData.playfulness;
            dogBreedData.trainability = dogData.trainability;
            dogBreedData.energy = dogData.energy;
            dogBreedData.drooling = dogData.drooling;
            drawDogDataHtml();
        })
        .catch(error => {
            console.error('Det er feil ved henting av hundedata: ', error.message);
        });
}