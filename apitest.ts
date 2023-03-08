import fetch from 'node-fetch';

fetch('http://172.30.160.1:3000/mitglieder')
  .then((response) => response.json())
  .then((data) => console.log(data));
