"use strict";

let tbodyEl = document.querySelector("tbody");
let sort1El = document.querySelector("#sort1");
let sort2El = document.querySelector("#sort2");
let sort3El = document.querySelector("#sort3");


let courses = [];
let filteredCourses = [];
let checked1 = "no";
let checked2 = "no";
let checked3 = "no";


window.onload = () => {
    getCourses();
    document.querySelector("#search").addEventListener("input", filterCourses);
    document.querySelector("#sort1").addEventListener("click", sortCourses1);
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
        tbodyEl.innerHTML += `<tr><td id="td1">${course.code}</td><td id="td2">${course.coursename}</td><td id="td3">${course.progression}</td><td id="td4"><a href="${course.syllabus}"> <i class="fa-solid fa-up-right-from-square"></i></a></td></tr>`;
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

    dataToTable(filteredCourses);
}


function sortCourses1() {
    if (filteredCourses !="" && checked1 === "no") {
        const sorted1 = filteredCourses.sort((a, b) => a.code > b.code ? 1 : -1);
        dataToTable(sorted1);
        checked1 = "yes";
    } else if (filteredCourses =="" && checked1 === "no") {
        const sorted1 = courses.sort((a, b) => a.code > b.code ? 1 : -1);
        dataToTable(sorted1);
        checked1 = "yes";

    } else if (filteredCourses !="" && checked1 === "yes") {
        const sorted1 = filteredCourses.sort((a, b) => b.code > a.code ? 1 : -1);
        dataToTable(sorted1);
        checked1 = "no";
    } else if (filteredCourses =="" && checked1 === "yes") {
        const sorted1 = courses.sort((a, b) => b.code > a.code ? 1 : -1);
        dataToTable(sorted1);
        checked1 = "no";
    }
}


function sortCourses2() {
    if (filteredCourses !="" && checked2 === "no") {
        const sorted2 = filteredCourses.sort((a, b) => a.coursename > b.coursename ? 1 : -1);
        dataToTable(sorted2);
        checked2 = "yes";

    } else if (filteredCourses =="" && checked2 === "no") {
        const sorted2 = courses.sort((a, b) => a.coursename > b.coursename ? 1 : -1);
        dataToTable(sorted2);
        checked2 = "yes";

    } else if (filteredCourses !="" && checked2 === "yes") {
        const sorted2 = filteredCourses.sort((a, b) => b.coursename > a.coursename ? 1 : -1);
        dataToTable(sorted2);
        checked2 = "no";
    } else if (filteredCourses =="" && checked2 === "yes") {  
        const sorted2 = courses.sort((a, b) => b.coursename > a.coursename ? 1 : -1);
        dataToTable(sorted2);
        checked2 = "no";
    }
}


function sortCourses3() {
    if (filteredCourses !="" && checked3 === "no") {
        const sorted3 = filteredCourses.sort((a, b) => a.progression > b.progression ? 1 : -1);
        dataToTable(sorted3);
        checked3 = "yes";
    } else if (filteredCourses =="" && checked3 === "no") {
        const sorted3 = courses.sort((a, b) => a.progression > b.progression ? 1 : -1);
        dataToTable(sorted3);
        checked3 = "yes";

    } else if (filteredCourses !="" && checked3 === "yes") {
        const sorted3 = filteredCourses.sort((a, b) => b.progression > a.progression ? 1 : -1);
        dataToTable(sorted3);
        checked3 = "no";
    } else if (filteredCourses =="" && checked3 === "yes") {  
        const sorted3 = courses.sort((a, b) => b.progression > a.progression ? 1 : -1);
        dataToTable(sorted3);
        checked3 = "no";
    }
}


// function filteredToTable(data) {
//     tbodyEl.innerHTML = "";

//     data.forEach(course => {
//         tbodyEl.innerHTML += `<tr><td>${course.code}</td><td>${course.coursename}</td><td>${course.progression}</td></tr>`;
//     });
//     console.log("Här fortsätter mitt program3...");
    
// }