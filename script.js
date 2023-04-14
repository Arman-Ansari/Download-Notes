// BELLOW CODE FOR MENU 

function onClickMenu() {
  document.getElementById("menu").classList.toggle("icon");
  document.getElementById("nav").classList.toggle("change");
}


// Get the main content element and all the sub-page elements
const content = document.getElementById("content");
const subPages = document.querySelectorAll(".sub-page");

// Get all the button elements and add an event listener to each one
const mathematics = document.getElementById("mathematics");
mathematics.addEventListener("click", () => {
  showSubPage("content1");
});

const physics = document.getElementById("physics");
physics.addEventListener("click", () => {
  showSubPage("content2");
});

const chemistry = document.getElementById("chemistry");
chemistry.addEventListener("click", () => {
  showSubPage("content3");
});

const biology = document.getElementById("biology");
biology.addEventListener("click", () => {
  showSubPage("content4");
});

const history = document.getElementById("history");
history.addEventListener("click", () => {
  showSubPage("content5");
});

const geography = document.getElementById("geography");
geography.addEventListener("click", () => {
  showSubPage("content6");
});

const civics = document.getElementById("civics");
civics.addEventListener("click", () => {
  showSubPage("content7");
});

const pyq = document.getElementById("pyq");
pyq.addEventListener("click", () => {
  showSubPage("content8");
});



// Get all the back button elements and add an event listener to each one
const backBtns = document.querySelectorAll(".back-btn");
backBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    showMainPage();
  });
});

// Function to show a sub-page and hide the main page
function showSubPage(id) {
  // Hide the main page content
  content.style.display = "none";

  // Show the sub-page with the specified id
  const subPage = document.getElementById(id);
  subPage.classList.add("show");
}

// Function to show the main page and hide all sub-pages
function showMainPage() {
  // Show the main page content
  content.style.display = "block";

  // Hide all sub-pages
  subPages.forEach((subPage) => {
    subPage.classList.remove("show");
  });
}
