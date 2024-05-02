function updateView() {
    if (currentPage == 'mainPage') homePageView();
    else if (currentPage == 'dogsForAdoption') dogsForAdoptionView();
    else if (currentPage == 'aboutUs') aboutUsView();
    else if (currentPage == 'displayDog') displayDogInfo();
}

updateView();

function drawMenu() {
    let html = '';
    html += /*HTML*/ `
    <div id="menu">
        <img src="img/olalogo.png" alt="Logo for Olas Hunderedning" id="ola-logo" onclick="changeView('mainPage')">
        <button class="menu-button" onclick="changeView('dogsForAdoption')">Hunder til adopsjon</button>
        <button class="menu-button" onclick ="changeView('aboutUs')">Om oss</button>
    </div>`
    return html;
}

function homePageView() {
    app.innerHTML = /*HTML*/ ` 
    ${drawMenu()}
    <img src="img/toller.png" alt="A toller dog" id="toller">
    <h1>På jakt etter hund?</h1>
    <p class="info">Vi i Olas Hunderedning har mange hunder som ser etter sitt foralltidhjem!</p>
    <button id="adoption-button" onclick="changeView('dogsForAdoption')">Se hunder til adopsjon</button>
    `;
}

function dogsForAdoptionView() {
    app.innerHTML = /*HTML*/ ` 
    ${drawMenu()}
    <h1 class="h1">Hunder til adopsjon</h1>
    ${displayDogsView()}
    `;
}

function aboutUsView() {
    app.innerHTML = /*HTML*/ ` 
    
    ${drawMenu()}
    <h1 class="h1">Om Olas Hunderedning</h1>
    <p class="info">Olas Hunderedning er en liten, idell organisasjon som ble stiftet i 2018. 
    Organisasjonen arbeider for å finne nye hjem til hunder som av ulike årsaker trenger et nytt hjem ❤️.</p>
    <p class="info">Ola hadde lenge gått med et sterkt ønske om å gi tilbake og å hjelpe andre i hundemiljøet. 
    Med over 20 års erfaring som hundeeier, instruktør og tidligere oppdretter ble dette starten på Olas Hunderedning.</p>
    <p class="info">Menneskene bak Olas Hunderedning består av Ola Jensen og hans kone Anne. Til daglig driver Ola
    et lite tømrerfirma, mens Anne jobber som veterinær. De har også to barn, og selvfølgelig har de heller ikke mindre 
    enn tre hunder: Hero (finsk lapphund), Kompis (Nova Scotia Duck Tolling Retriever/toller) og Maya (Border collie) 🐶.</p>

    <div id="images-container">
    <img src="img/finnishlapphund.png" class="familydog-picture" alt="Hero, a Finnish lapphund">
        <img src="img/toller2.png" class="familydog-picture" alt="Kompis, a toller">
        <img src="img/bordercollie.png" class="familydog-picture" alt="Maya, a Border collie">
    </div>
    `;
}

function displayDogsView() {
    let html = '';

    for (let i = 0; i < dogs.length; i++) {
        html += /*HTML*/ `
        <div id="dog-container">
            <img src="${dogs[i].image}" class="dog-picture" onclick="chooseDog(${i})">
            <div id="dog-names" onclick="chooseDog(${i})">${dogs[i].name}</div>
        </div>
        `;
    }
    return html;
}

function displayDogInfo() {
    app.innerHTML = /*HTML*/ ` 
        
    ${drawMenu()}

    <div class="dog-info-container">
        <div class="dog-image-container">
            <h1 class="h1">${dogs[chosenDog].name}</h1>
            <img src="${dogs[chosenDog].image}" id="max-dog">
        </div>

        <table id="dog-table">
            <tr>
                <th>Rase 🐾</th>
                <td>${dogs[chosenDog].breed}</td>
            </tr>
            <tr>
                <th>Kjønn <img src="${dogs[chosenDog].genderImage}" class="male-icon"></th>
                <td>${dogs[chosenDog].gender}</td>
            </tr>
            <tr>
                <th>Fødselsdato 🎂</th>
                <td>${dogs[chosenDog].dateOfBirth}</td>
            </tr>
            <tr>
                <th>Kan bo med andre hunder? 🐶</th>
                <td>${dogs[chosenDog].liveWithOtherDogs}</td>
            </tr>
            <tr>
                <th>Kan bo med katt? 🐱</th>
                <td>${dogs[chosenDog].liveWithCats}</td>
            </tr>
            <tr>
                <th>Kan bo med barn? 👧🏼👦🏼</th>
                <td>${dogs[chosenDog].liveWithKids}</td>
            </tr>
        </table>
        </div>
        
        <button id="breed-button" onclick="fetchDogBreedData()">Les mer om ${dogs[chosenDog].breed}</button>

    <div>${displayDogBio(dogs[chosenDog].name)}</div>
    <button onclick="adoptMe()" id="adopt-button">Adopter meg ❤️</button>
    `;
}

function drawDogDataHtml() {
    app.innerHTML = /*HTML*/ `
        <h1 class="h1">Om ${dogBreedData.name}</h1>
        <img src="${dogBreedData.image}" class="breed-image">

        <div class="width-div">
            <h3 class="h3">Energinivå</h3>
            <div class="rating">${makePaw(dogBreedData.energy) ?? ''}</div>
        </div>

        <div class="width-div">
            <h3 class="h3">Trenbarhet</h3>
            <div class="rating">${makePaw(dogBreedData.trainability) ?? ''}</div>
        </div>

        <div class="width-div">
            <h3 class="h3">Lekenhet</h3>
            <div class="rating">${makePaw(dogBreedData.playfulness) ?? ''}</div>
        </div>

        <div class="width-div">
            <h3 class="h3">Pelsstell</h3>
            <div class="rating">${makePaw(dogBreedData.grooming) ?? ''}</div>
        </div>

        <div class="width-div">
            <h3 class="h3">Røyting</h3>
            <div class="rating">${makePaw(dogBreedData.shedding) ?? ''}</div>
        </div>

        <div class="width-div">
            <h3 class="h3">Sikling</h3>
            <div class="rating">${makePaw(dogBreedData.drooling) ?? ''}</div>
        </div>

        <button onclick="exitPage()" class="exit">X</button>
    `;
}

function makePaw(amount) {
    let html = '';
    html += `<img id="paw-icon" src="img/pawicon.png">`.repeat(amount);
    return html;
}

function exitPage() {
    displayDogInfo();
}

function adoptMe() {
    app.innerHTML = /*HTML*/ `
    <h1 class="h1">Søk om å adoptere ${dogs[chosenDog].name}</h1>

    <form id="adoption-form">
        <label for="name">Fullt navn</label>
        <input type="text" id="name" name="name" placeholder="Ola Nordmann" required>
        <label for="mobileNumber">Tlf</label>
        <input type="number" id="mobileNumber" name="mobileNumber" placeholder="123 45 678" required> 
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" placeholder="ola.nordmann@gmail.com" required>
        <label for="confirmEmail">Bekreft email</label>
        <input type="email" id="confirmEmail" name="confirmEmail" placeholder="ola.nordmann@gmail.com" required>
        <label for="comment">Kommentar</label>
        <textarea type="text" id="comment" name="comment" required></textarea>
        <input type="submit" id="apply" name="apply" value="Send inn">
    
    </form>
    
    <button onclick="exitPage()" class="exit">X</button>
    `;
}

function displayMaxInfo() {
    let html = '';
    html += /*HTML*/ `
    <h2 class="h2">Om ${dogs[chosenDog].name}</h2>
    <p class="about-dog">Voff! Jeg heter ${dogs[chosenDog].name} og er en renraset ${dogs[chosenDog].breed} som fikk komme inn til Ola og de andre snille folkene hans rundt
    påsken 2024. Jeg må dessverre omplasseres på grunn av alvorlig sykdom hos min tidligere eier.</p>
    <p class="about-dog">Jeg er en livlig og sosial type som liker å være der det skjer, og setter pris på utfordringer i form av lek og trening. Jeg er en aktiv hund som elsker 
    å være ute i all slags vær, sommer som vinter. Noe av det beste jeg vet er
    å kjøre båt og en skikkelig god og gammeldags drakamp med tau.</p>
    <p class="about-dog">Jeg kommer overens med de fleste hunder, men kan være litt var på store hunder. Med rett intro går det som regel 
    fint. Ellers liker jeg å kjøre bil, finner lett roen i bråkete miljøer og kunne nok sett for meg å bo sammen med en annen hundevenn eller en katt.</p>
    `;
    return html;
}

function displayRonaldoInfo() {
    let html = '';
    html += /*HTML*/ `
    <h2 class="h2">Om ${dogs[chosenDog].name}</h2>
    <p class="about-dog">Hei hei! Mitt navn er ${dogs[chosenDog].name}, og jeg er en renraset ${dogs[chosenDog].breed} som ser etter et nytt foralltidhjem ❤️. Ola og menneskene her 
    er superhyggelige altså, men jeg vil helst komme til en familie hvor jeg kan være det eneste pelsbarnet. Her har jeg vært noen måneder og grunnen til at jeg omplasseres er på 
    grunn av samlivsbrudd mellom de forrige eierne mine.</p>
    <p class="about-dog">Jeg er en veldig kosete og oppmerksomhetssøkende hund som følger etter deg uansett hvor du går. En liten tur på kjøkkenet for å hente kaffe? Jeg er 
    hakk i hæl. Ned i kjelleren for å hente klesvasken? Første mann (eller hund) til mølla! Selv om jeg ser søt og uskyldig ut kan det være ganske mye futt i meg til tider. Hvis 
    jeg ikke får den treningen eller oppmerksomheten jeg mener jeg fortjener kan det hende jeg tyr til rampestreker; en gang fant den forrige eieren min alle de nyvaskede sokkene sine 
    i blomsterbedet. Ellers er det beste jeg vet er å nyte sene sommerkvelder på en lun plass og å bli børstet og stelt med.</p>
    <p class="about-dog">Som jeg tidligere har nevnt hadde det beste for meg å være eneste pelsbarn i familien. Å møte andre hunder på tur går bra, men store hunder kan av og til være 
    litt skumle. Å kjøre bil er ok, og jeg kan nok trives i de fleste hjem.</p>
    `;
    return html;
}

function displayLunaInfo() {
    let html = '';
    html += /*HTML*/ `
    <h2 class="h2">Om ${dogs[chosenDog].name}</h2>
    <p class="about-dog">Voff voff! Jeg er ${dogs[chosenDog].name}, en ${dogs[chosenDog].breed} som drømmer om et nytt hjem med andre firbente og tobente. Jeg har ikke vært her så 
    lenge, men trives ganske greit i denne flokken. Jeg kom til Ola og menneskene hans fordi min tidligere eier ikke behandlet meg så bra, så jeg trenger litt ekstra oppfølging og 
    trening, og selvfølgelig masse kjærlighet ❤️.</p>
    <p class="about-dog">Jeg er en litt forsiktig dame, men så fort jeg har vunnet tilliten din så er jeg verdens største kosegris. Som unghunder flest trenger jeg at noen kan
    veilede og sette sunne grenser for meg. Jeg tror også det kunne vært veldig gøy å begynne med en eller annen form for hundesport. Noe av det beste jeg vet er leke med andre 
    hundevenner og å bli klødd på magen.</p>
    <p class="about-dog">Som sagt ønsker jeg veldig gjerne å bo med en eller flere andre hunder. Jeg er ikke så fan av å kjøre bil, men med litt godtbiter er jeg ikke vanskelig å 
    be. Jeg drømmer også om en stor hage eller uteplass der jeg kan løpe og herje rundt.</p>
    `;
    return html;
}

function displayKiraInfo() {
    let html = '';
    html += /*HTML*/ `
    <h2 class="h2">Om ${dogs[chosenDog].name}</h2>
    <p class="about-dog">Heeei! Jeg heter ${dogs[chosenDog].name} og er en renraset ${dogs[chosenDog].breed}. Jeg er det nyeste tilskuddet i Ola sin flokk og overgangen har vært litt skummel. 
    De andre hundene er fine, men jeg trenger litt tid til å finne min plass i flokken. Grunnen til at jeg måtte omplasseres var fordi den tidligere eieren min opplevde å ikke ha nok tid til meg. 
    Så mitt høyeste ønske til min nye familie er at jeg får masse kos og at jeg ikke er for mye alene.</p>
    <p class="about-dog">Jeg elsker lange turer i skog og mark, sommer som vinter. Er jeg skikkelig frekk så unner jeg meg et ordentlig gjørmebad, da blir ikke matmor særlig fornøyd 😆. 
    På dagtid når menneskene mine er på jobb er jeg i hundegård, noe som jeg håper å fortsette med. Noe av det beste jeg vet er
    å bade og å vekke menneskene mine om morgenen med et ekstra vått nuss.</p>
    <p class="about-dog">Jeg kommer greit overens med de fleste hunder, men trenger litt tid for å bli godt kjent. Å kjøre bil er digg, og jeg kan nok bo i de fleste hjem så 
    lenge jeg har lett tilgang på turer i skog og mark.</p>
    `;
    return html;
}