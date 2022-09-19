


function _addEventListenersToObjects(){


  homeContainer.setAttribute("onscroll","homeScrollAnimation()")
  projectsContainer.setAttribute("onscroll","projectsScrollAnimation()")
  experienceContainer.setAttribute("onscroll","experienceScrollAnimation()")
  contactsContainer.setAttribute("onscroll","contactsScrollAnimation()")
}





function homeScrollAnimation(){
  //alert("home")
}

function projectsScrollAnimation(){
  //alert("p")
}

function experienceScrollAnimation(){
  //alert("e")
}



function contactsScrollAnimation(){
  contactsBoxes = document.getElementsByClassName("contactsMediaBox")
  
  if (!device.includes("pc")){
    
      if (contactsContainer.scrollTop>=900){
        for(let i=0; i<contactsBoxes.length; i++){
          if(contactsContainer.scrollTop>=900+(500*i)){
            //contactsBoxes[i].style.left = "15%"
            contactsBoxes[i].style.transform = "scale(1)"
          } else{
            //contactsBoxes[i].style.left = "-100%"
            contactsBoxes[i].style.transform = "scale(0)"
          }
        }
        
      } 
  }
  
}
