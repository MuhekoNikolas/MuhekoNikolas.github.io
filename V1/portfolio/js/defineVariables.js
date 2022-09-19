
var mainContainer = null;
var homeContainer = null;
var projectsContainer = null;
var experienceContainer = null;
var contactsContainer = null;
var contactsMediasDiv = null;
var allExperienceSkillsDiv = null;
var footerDiv = null;


var device = null;


var navBar = null;
var navMenu = null;

var currentContainerId = "homeContainer";
var currentContainer = document.getElementById(currentContainerId)
var newContainer = document.getElementById("homeContainer")

var experienceAboutText = document.querySelectorAll("#experienceContainer .sectionTextDiv .sectionTextAboutMe span")[1]
var projectsAboutText = document.querySelectorAll("#projectsContainer .sectionTextDiv .sectionTextAboutMe span")[1]


var currentTheme = "dark";

var navMenuStatus = "hidden";




function defineVariables(){
  
  mainContainer = document.getElementById("mainContainer")
  homeContainer = document.getElementById("homeContainer")
  projectsContainer = document.getElementById("projectsContainer")
  experienceContainer = document.getElementById("experienceContainer")
  contactsContainer = document.getElementById("contactsContainer")
  contactsMediasDiv = document.getElementById("contactsMediasDiv")
  projectsMediasDiv = document.getElementById("myProjectsDiv")
  
  
  allExperienceSkillsDiv = document.getElementById("allExperienceSkills")
  
  newContainer = document.getElementById(currentContainerId)
  
  

  device = getComputedStyle(document.querySelector(":root")).getPropertyValue("--device")
  

  navBar = document.getElementById("navBar")
  navMenu = document.getElementById("navMenu")

  footerDiv = document.getElementById("footerDiv")

  //console.log(navMenu)
  
  
    
}


function runStartUpFunctions(){
  console.clear()

  defineVariables()
  _addEventListenersToObjects()

  changeExperienceAboutText()
  changeProjectsAboutText()

  //showExperienceContainer()
  

  /*/
  generateContactBoxes()
  generateProjectBoxes()

  setTimeout(()=>{
    generateExperienceAllSkillBoxes()
  }, 100)
  /*/

  
  setInterval(changeExperienceAboutText, 25000)
  setInterval(changeProjectsAboutText, 25000)
  
  
}
