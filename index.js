// setInterval for every second that will update my age
let birthDate = new Date('01-29-2008');
updateAge();

setInterval(() => updateAge(), 1000);

function updateAge() {
    let currentDate = new Date();
    let exactAge = ((currentDate - birthDate) / 31556952000).toFixed(3);
    document.getElementById('age').innerText = exactAge;
}