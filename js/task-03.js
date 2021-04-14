const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galeryEl = document.querySelector("ul");
console.log(galeryEl);
galeryEl.classList.add("site_nav");
const imagesCatEl =
  "<li class=nav_link><img src = https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 alt= White and Black Long Fur Cat width=300px/></li>";
const imagesFishEl =
  "<li class=nav_link><img src = https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 alt=Orange and White Koi Fish Near Yellow Koi Fish width=300px/></li>";
const imagesHorsesEl =
  "<li class=nav_link><img src=https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 alt=Group of Horses Running width=300px/></li>";
const imagesEl = galeryEl.insertAdjacentHTML("afterbegin", `${imagesCatEl}${imagesFishEl}${imagesHorsesEl}`);
document.querySelector("li");
