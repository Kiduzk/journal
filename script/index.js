console.log("dam it works")

let counterContainer = document.querySelector(".website-counter");
let visitCount = localStorage.getItem("page_view");
let resetButton = document.querySelector("#reset");
console.log(counterContainer)
console.log(visitCount)
console.log(resetButton)

if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount)
} else {
    visitCount = 1;
    localStorage.setItem("page_view", 1)
}
counterContainer.innerHTML = visitCount;

resetButton.addEventListener("click", () => {
    visitCount = 1;
    localStorage.setItem("page_view", 1);
    counterContainer.innerHTML = visitCount;
})
