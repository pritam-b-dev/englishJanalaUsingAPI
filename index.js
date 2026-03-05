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
    
    <button onclick="loadLessonWords(${lesson.level_no})" class="btn btn-outline btn-primary">
    <i class="fa-solid fa-book-open"></i> 
    Lesson - ${lesson.level_no}
    </button>
    
    `;
    //4.append into container.
    lessonsContainer.append(btnDiv);
  }
};

//lesson অনুযায়ী ক্লিক করলে আমরা loadLessonWords(${lesson.level_no}) ফাংশনের মাধ্যমে word গুলিকে পেতে পারি। আর word এর জন্য আলাদা api link দেয়া আছে। আমাদের সেই লিংক ব্যবহার করতে হবে।

const loadLessonWords = (id) => {
  const lessonWordsURL = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(lessonWordsURL)
    .then((res) => res.json())
    .then((data) => displayLessonWords(data.data));
};

const displayLessonWords = (words) => {
  //     {
  //     "id": 19,
  //     "level": 1,
  //     "word": "Sincere",
  //     "meaning": "সত্‍ / আন্তরিক",
  //     "pronunciation": "সিনসিয়ার"
  // }
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  if (words.length === 0) {
    wordContainer.innerHTML = `
    <div class="text-center col-span-full rounded-xl py-10 space-y-5">
        <img class="mx-auto" src="./assets/alert-error.png"/>
        <p class="text-xl font-medium text-gray-300">
          এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
        </p>
        <h2 class="font-medium text-4xl">নেক্সট Lesson এ যান।</h2>
      </div>
    
    `;
    return;
  }

  words.forEach((word) => {
    console.log(word);

    const card = document.createElement("div");
    card.innerHTML = `
    <div
        class="bg-white rounded-xl shadow-sm text-center py-15 px-5 space-y-4"
      >
        <h2 class="font-bold text-2xl">${word.word}</h2>
        <p class="font-semibold">Meaning/Pronunciation</p>
        <div class="font-medium text-2xl">${word.meaning} / ${word.pronunciation}</div>
        <div class="flex justify-between items-center">
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF60]">
            <i class="fa-solid fa-circle-info"></i>
          </button>
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF60]">
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
      </div>
    `;
    wordContainer.append(card);
  });
};

loadLessons();
