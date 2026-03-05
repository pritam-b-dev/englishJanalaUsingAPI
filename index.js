//fetch level and lessons from an URL
let lessonsURL = "https://openapi.programming-hero.com/api/levels/all";

//fetch level and lessons from an URL
const loadLessons = () => {
  fetch(lessonsURL) //promise of response
    .then((res) => res.json()) // after getting promises of response (res variable), let convert it to a JSON file.
    .then((data) => displayLessons(data.data)); // we put the json informations to data variable. then we use data to a function for dynamic work.
};

//working with data after fetching from an URL. And we doing this by a function.
//আমাদের কাজ হচ্ছে displayLessons এ আমরা fetch করা json data object এর ভেতরে থাকা data array এর মধ্যে ফর অফ লুপ চালিয়ে এর ভেতরের কন্টেন্ট গুলি থেকে তথ্য বের করে আমাদের ওয়েবসাইটের UI তে রাখা।
const displayLessons = (lessons) => {
  //1.get the container and make it empty.
  const lessonsContainer = document.getElementById("lessons-container");
  lessonsContainer.innerHTML = "";
  //2.get into every lesson.
  for (let lesson of lessons) {
    //3.create element.
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    
    <button class="btn btn-outline btn-primary">
    <i class="fa-solid fa-book-open"></i> 
    Lesson - ${lesson.level_no}
    </button>
    
    `;
    //4.append into container.
    lessonsContainer.append(btnDiv);
  }
};

loadLessons();
