//fetch level and lessons from an URL
let lessonsURL = "https://openapi.programming-hero.com/api/levels/all";

//fetch level and lessons from an URL
loadLessons = () => {
  fetch(lessonsURL) //promise of response
    .then((res) => res.json()) // after getting promises of response (res variable), let convert it to a JSON file.
    .then((data) => displayLessons(data.data[0].level_no)); // we put the json informations to data variable. then we use data to a function for dynamic work.
};

displayLessons = (lesson) => {
  console.log(lesson);
};

loadLessons();
