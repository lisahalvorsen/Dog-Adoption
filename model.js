let app = document.getElementById('app');
let currentPage = 'mainPage'

let dogs = [
    {
        name: 'Max',
        breed: 'German Shepherd Dog',
        gender: 'Hann',
        dateOfBirth: '10.08.2023',
        liveWithOtherDogs: 'Ja',
        liveWithCats: 'Ja',
        liveWithKids: 'Ja',
        image: "img/maxdog.jpeg",
        genderImage: "img/maleicon.png",
    },
    {
        name: 'Ronaldo',
        breed: 'Yorkshire Terrier',
        gender: 'Hann',
        dateOfBirth: '01.11.2023',
        liveWithOtherDogs: 'Nei',
        liveWithCats: 'Nei',
        liveWithKids: 'Ja',
        image: "img/ronaldodog.jpeg",
        genderImage: "img/maleicon.png",
    },
    {
        name: 'Luna',
        breed: 'Labrador Retriever',
        gender: 'Hunn',
        dateOfBirth: '01.01.2024',
        liveWithOtherDogs: 'Ja',
        liveWithCats: 'Nei',
        liveWithKids: 'Nei',
        image: "img/lunadog.jpeg",
        genderImage: "img/femaleicon.png",
    },
    {
        name: 'Kira',
        breed: 'Samoyed',
        gender: 'Hunn',
        dateOfBirth: '14.02.2023',
        liveWithOtherDogs: 'Ja',
        liveWithCats: 'Nei',
        liveWithKids: 'Ja',
        image: "img/kiradog.jpeg",
        genderImage: "img/femaleicon.png",
    },
];

let chosenDog = null;

const apiUrl = `https://api.api-ninjas.com/v1/dogs?name=`;
const apiKey = 'QjGrgHVVwaSqg/d49GTxaw==jeDF6vThGxTYAJ8l';

let dogBreedData = {
    name: null,
    image: null,
    shedding: null,
    grooming: null,
    playfulness: null,
    trainability: null,
    energy: null,
    drooling: null,
}

let breedToSearch = null;