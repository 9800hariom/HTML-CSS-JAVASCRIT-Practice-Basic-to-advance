
let isDOBOpen = false;
const settingCogEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");

const toggleDateOfBirthSelector = ()=> {
    if(isDOBOpen){
        settingCogEl.classList.add("hide");
    }else{
        settingContentEl.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;
    console.log('Toggle',isDOBOpen);

};
settingCogEl.addEventListener("click", toggleDateOfBirthSelector);