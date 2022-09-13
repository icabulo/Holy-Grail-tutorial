function toggelNav() {
  // window.alert("js is working!");
  const outerGrid = document.querySelector(".outer-grid"); //be mindful we are doing a query selector for a class .outer-grid
  // console.log(outerGrid.classList);
  outerGrid.classList.toggle("OG-expanded");

  const nav = document.querySelector("nav"); //be mindful the query selector here is for an element 'nav'
  nav.classList.toggle("hide-nav");
}
