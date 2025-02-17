"use strict";

let tbodyEl = document.querySelector("tbody");
let courses = [];

window.onload = () => {
    getCourses();
}


async function getCourses() {
    try {
        const response = await fetch(
            "https://webbutveckling.miun.se/files/ramschema_ht24.json"
        );

        const courses = await response.json();
        console.log(courses);
        dataToTable(courses);

    } catch (error) {
        console.error("Det har uppstått ett fel: ", error);
    }
}


function dataToTable(courses) {
tbodyEl.innerHTML = "";

    courses.forEach(course => {
        tbodyEl.innerHTML += `<tr><td>${course.code}</td><td>${course.coursename}</td><td>${course.progression}</td></tr>`;
    });
    console.log("Här fortsätter mitt program...");

}