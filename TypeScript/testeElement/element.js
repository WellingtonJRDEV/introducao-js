"use strict";
const input = document.getElementById('input');
input.addEventListener('input', (event) => {
    const i = event.currentTarget;
    console.log(i.value);
});
