"use strict";
import {Ajax} from "./modules/Ajax.js";

const getData = function(ev) {
    let cpr = document.getElementById('cpr').value;
    let req = Object.create(Ajax);
    req.init();
    req.getFile("http://cvrapi.dk/api?search=" + cpr + "&country=dk", showData);
};

const showData = function(e) {
    let datas = JSON.parse(e.target.responseText);
    console.log(datas);
    document.getElementById('apo').append(datas.name + ", " + datas.address + ", " + datas.zipcode + ", " + datas.city);
};

const chooseData = function() {
    document.getElementById('submit').addEventListener("click", getData);
}


window.addEventListener("load", chooseData);
