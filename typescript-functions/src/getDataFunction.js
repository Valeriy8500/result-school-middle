"use strict";
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
const getData = (url) => {
    return fetch(url).then((data) => data.json());
};
getData(COMMENTS_URL)
    .then((data) => {
    data.forEach((item) => {
        console.log(`ID: ${item.id} Email: ${item.email}`);
    });
});
