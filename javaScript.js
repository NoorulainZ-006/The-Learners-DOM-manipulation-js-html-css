const enterNext=()=> {
    let confirmNext= confirm('You should have to enter your name first?');
    if(confirmNext){
        let nameEntered=prompt('Enter your name:');
        if(nameEntered)
        {
            alert(`Thank You ${nameEntered}`);
        }
    }
}
const showpopup = () => {
    let form = document.getElementById("form1");

    if (form.style.display === "flex") {
        form.style.display = "none"; // Hide if already shown
    } else {
        form.style.display = "flex"; // Show popup form
    }
};

const changeButton=()=>{
    let button=document.querySelectorAll(".mainButton");
    button[4].style.backgroundColor="grey";
    button[4].style.color="white";
}
const changeTheme = () => {
  // Header
  let header = document.querySelector("header");
  header.style.backgroundColor = "black";
  header.style.color = "white";
   let button =document.getElementsByClassName("mainButton");
   button[0].style.backgroundColor="grey";
   button[0].style.color="white";
   button[1].style.backgroundColor="grey";
   button[1].style.color="white";
   button[2].style.backgroundColor="grey";
   button[2].style.color="white";
   let footer = document.querySelector("footer");
   footer.style.backgroundColor = "black";
   footer.style.color = "white";
   
  // Hero section
  let hero = document.querySelector("#hero");
  hero.style.color = "black";
  hero.style.filter = "grayscale(100%)";

  // Body background
  let body = document.querySelector("body");
  body.style.backgroundColor = "grey";
 body.style.filter = "grayscale(100%)";

  // About section
  let about = document.getElementById("About");
  about.style.color = "white";
};

