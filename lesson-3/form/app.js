"use strict";
let formEl = document.querySelector('form');
let name = document.getElementById('name');
let telephone = document.getElementById('telephone');
let email = document.getElementById('email');
let comments = document.getElementById('comments');


const nameReq = /^[A-Za-zА-Яа-яЁё]+$/;
const telephoneReq = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
const emailReq = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const commentsReq = /[A-Za-zА-Яа-яЁё]/;

document.querySelector('.btn').onclick = function (event) {
    event.preventDefault()
    if (nameReq.test(name.value)) {
        console.log('true');
    } else {
        console.log('false');
    }
    if (telephoneReq.test(telephone.value)) {
        console.log('true');
    } else {
        console.log('false');
    }
    if (emailReq.test(email.value)) {
        console.log('true');
    } else {
        console.log('false');
    }
    if (commentsReq.test(comments.value)) {
        console.log('true');
    } else {
        console.log('false');
    }
};