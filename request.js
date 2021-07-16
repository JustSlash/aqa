

const axios = require('axios');

// axios.get('https://reqres.in/api/users?page=2')
// .then(function (response) {
//         console.log(response);
//     })
// .catch(function (err) {
//         console.log(err);
//     })
// .then(function () {});
axios.defaults.baseURL = 'https://reqres.in/api/users';
axios.post('/users', {
    "name": "John",
    "job": "QA"
}).then(function (response) {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.data);
})
.catch(function (err) {
    console.log(err);
})
.then(function () {});