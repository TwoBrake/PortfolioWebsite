var headingTwo = document.getElementById("heading");
let headlines = [
  "Headline one.",
  "Headline two.",
  "Headline three.",
  "Headline four.",
  "Headline five.",
  "Headline six.",
  "Headline seven.",
];
let currentHeadline = 0;

function writeHeading() {
  let i = 0;
  let headingArray = Array.from(headlines[currentHeadline]);
  let type = setInterval(function () {
    if (i == headingArray.length) {
      setTimeout(deleteHeading, 3000);
      clearInterval(type);
    } else {
      headingTwo.innerHTML += headingArray[i];
      i++;
    }
  }, 50);
}
writeHeading();

function deleteHeading() {
  let headingArray = Array.from(headlines[currentHeadline]);
  let i = headingArray.length;
  let remove = setInterval(function () {
    if (i == 0) {
      if (currentHeadline == headlines.length - 1) {
        currentHeadline = 0;
      } else {
        currentHeadline++;
      }
      setTimeout(writeHeading, 500);
      clearInterval(remove);
    } else {
      headingArray.pop();
      i--;
      headingTwo.innerHTML = "";
      headingArray.forEach((letter) => {
        headingTwo.innerHTML += letter;
      });
    }
  }, 50);
}

var menuButton = document.getElementById("menuButton");
var headerMobileContent = document.getElementById("headerMobileContent");

menuButton.addEventListener("click", function () {
    headerMobileContent.style.display = "flex";
});

var closeMobileHeader = document.getElementById("closeMobileHeader");

closeMobileHeader.addEventListener("click", function () {
  headerMobileContent.style.display = "none";
});