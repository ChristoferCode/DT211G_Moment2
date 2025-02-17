"use strict";

let tbodyEl = document.querySelector("tbody");
let sort1El = document.querySelector("#sort1");
let sort2El = document.querySelector("#sort2");
let sort3El = document.querySelector("#sort3");

let courses = [];
let filteredCourses = [];

window.onload = () => {
    getCourses();
    document.querySelector("#search").addEventListener("input", filterCourses);
    document.querySelector("#sort1").addEventListener("click", sortCourses);
    document.querySelector("#sort2").addEventListener("click", sortCourses2);
    document.querySelector("#sort3").addEventListener("click", sortCourses3);

}


async function getCourses() {
    console.log(courses);

    try {
        const response = await fetch(
            "https://webbutveckling.miun.se/files/ramschema_ht24.json"
        );

        courses = await response.json();
        console.log(courses);
        dataToTable(courses);

    } catch (error) {
        console.error("Det har uppstått ett fel: ", error);
    }
}


function dataToTable(data) {
tbodyEl.innerHTML = "";

    data.forEach(course => {
        tbodyEl.innerHTML += `<tr><td>${course.code}</td><td>${course.coursename}</td><td>${course.progression}</td></tr>`;
    });
    console.log("Här fortsätter mitt program...");

}

function filterCourses() {

    console.log("Här fortsätter mitt program 2...");
    console.log(courses);

    const searchInput = document.querySelector("#search").value.toLowerCase();
    filteredCourses = courses.filter((course) => 
        course.code.toLowerCase().includes(searchInput) ||
        course.coursename.toLowerCase().includes(searchInput)
    );
    console.log(filteredCourses);

    tbodyEl.innerHTML = "";

    filteredToTable(filteredCourses);
}

function filteredToTable(data) {
    tbodyEl.innerHTML = "";

    data.forEach(course => {
        tbodyEl.innerHTML += `<tr><td>${course.code}</td><td>${course.coursename}</td><td>${course.progression}</td></tr>`;
    });
    console.log("Här fortsätter mitt program3...");
    
}

function sortCourses() {
    if (filteredCourses !="") {
        const sorted1 = filteredCourses.sort((a, b) => a.code > b.code ? 1 : -1);
        filteredToTable(sorted1);
    } else {
        const sorted1 = courses.sort((a, b) => a.code > b.code ? 1 : -1);
        filteredToTable(sorted1);
    }
}

function sortCourses2() {
    if (filteredCourses !="") {
        const sorted2 = filteredCourses.sort((a, b) => a.coursename > b.coursename ? 1 : -1);
        filteredToTable(sorted2);
    } else {
        const sorted2 = courses.sort((a, b) => a.coursename > b.coursename ? 1 : -1);
        filteredToTable(sorted2);
    }
}

function sortCourses3() {
    if (filteredCourses !="") {
        const sorted3 = filteredCourses.sort((a, b) => a.progression > b.progression ? 1 : -1);
        filteredToTable(sorted3);
    } else {
        const sorted3 = courses.sort((a, b) => a.progression > b.progression ? 1 : -1);
        filteredToTable(sorted3);
    }
}