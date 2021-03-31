document.querySelector('.get-results').addEventListener('click', getResults);
document.querySelector('.get-random').addEventListener('click', getRandom);


function getResults(e){
    const year = document.getElementById('year').value;
    const round = document.getElementById('round').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://ergast.com/api/f1/${year}/${round}/results.json`, true);

    xhr.onload = function(){
        if(this.status === 200) {
            response = this.responseText;
            // console.log(response);
            
            const yearResult = document.getElementById('yearResult');
            const roundResult = document.getElementById('roundResult');
            const circuit = document.getElementById('circuit');
            const winner = document.getElementById('winner');
            const constructor = document.getElementById('constructor');

            yearResult.innerHTML = JSON.parse(response).MRData.RaceTable.season;
            roundResult.innerHTML = JSON.parse(response).MRData.RaceTable.round;
            circuit.innerHTML = JSON.parse(response).MRData.RaceTable.Races[0].Circuit.circuitName;
            constructor.innerHTML = JSON.parse(response).MRData.RaceTable.Races[0].Results[0].Constructor.name;
            winner.innerHTML = JSON.parse(response).MRData.RaceTable.Races[0].Results[0].Driver.givenName + ' ' + JSON.parse(response).MRData.RaceTable.Races[0].Results[0].Driver.familyName;
            
            // JSON.parse(response).MRData.RaceTable.season;


        } else {
            document.querySelector('.results').innerHTML = 'ERROR';
        }
    }

    xhr.send();

    e.preventDefault();
}

function getRandom(e) {
    const year = document.getElementById('year');
    const round = document.getElementById('round');
    year.value = randomNum(1950, 2021);
    round.value = randomNum(1, 7);


    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://ergast.com/api/f1/${year}/${round}/results.json`, true);

    xhr.onload = function(){
        if(this.status === 200) {
            response = this.responseText;
            // console.log(response);
            
            const yearResult = document.getElementById('yearResult');
            const roundResult = document.getElementById('roundResult');
            const circuit = document.getElementById('circuit');
            const winner = document.getElementById('winner');
            const constructor = document.getElementById('constructor');

            yearResult.innerHTML = JSON.parse(response).MRData.RaceTable.season;
            roundResult.innerHTML = JSON.parse(response).MRData.RaceTable.round;
            circuit.innerHTML = JSON.parse(response).MRData.RaceTable.Races[0].Circuit.circuitName;
            constructor.innerHTML = JSON.parse(response).MRData.RaceTable.Races[0].Results[0].Constructor.name;
            winner.innerHTML = JSON.parse(response).MRData.RaceTable.Races[0].Results[0].Driver.givenName + ' ' + JSON.parse(response).MRData.RaceTable.Races[0].Results[0].Driver.familyName;
            
            // JSON.parse(response).MRData.RaceTable.season;


        } else {
            document.querySelector('.results').innerHTML = 'ERROR';
        }
    }

    xhr.send();

    e.preventDefault();

    getResults();
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}