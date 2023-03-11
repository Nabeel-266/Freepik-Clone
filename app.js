let toggleButton = document.querySelector('.category');
let downArrow = document.querySelector('.down-arrow-01')


toggleButton.addEventListener("click", () => {
        if(downArrow.firstElementChild.classList.contains("bxs-down-arrow")){
                downArrow.firstElementChild.classList.replace("bxs-down-arrow","bxs-up-arrow");
        } else {
                downArrow.firstElementChild.classList.replace("bxs-up-arrow","bxs-down-arrow");
        }
})

let toggleButton2 = document.querySelector('.more');
let downArrow2 = document.querySelector('.down-arrow-02')

toggleButton2.addEventListener("click", () => {
        if(downArrow2.firstElementChild.classList.contains("bxs-down-arrow")){
                downArrow2.firstElementChild.classList.replace("bxs-down-arrow","bxs-up-arrow");
        } else {
                downArrow2.firstElementChild.classList.replace("bxs-up-arrow","bxs-down-arrow");
        }
})