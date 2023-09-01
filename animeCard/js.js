const card = document.querySelector('.card');
const cardImg = document.querySelector('img');
const cardDetailss = document.querySelector(".card-details")
const moreInfo = document.querySelector(".card-button")
const moreDetails = document.querySelector(".spans")
let isMoreInfo = true;
function removeDetails() {
    cardImg.classList.toggle('hidden');
    cardDetailss.classList.toggle('hidden');
    moreDetails.classList.toggle('hidden');
    isMoreInfo = !isMoreInfo;
    moreInfo.textContent = isMoreInfo ? "More info" : "Less info";
  
}
