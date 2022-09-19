


async function getQoutesData(){
 
  response = await fetch("https://raw.githubusercontent.com/MuhekoNikolas/CDN/main/databases/programmingQoutes.json") //fetch("https://cors-anywhere.herokuapp.com/https://portfolio.3525nikolas.repl.co/api/qoutes/programming")
  data = response.json()
  
  return data
}


async function changeExperienceAboutText(){
  allQoutes = ""
  
  
  allQoutes = await getQoutesData()
  
  qouteInd = Math.floor(Math.random(0)*allQoutes.length)
  choosenQoute = allQoutes[qouteInd]
  choosenQouteText = choosenQoute.en
  
  
  if(device.includes("pc")){
    experienceAboutText.style.fontSize = "1.5rem"
    if(choosenQouteText.length > 140){
      experienceAboutText.style.fontSize = "1rem"
    }
  }

  basicExperienceText = "Well... Besides playing the guitar and gaming, I do love learning and practicing new frameworks and languages. Take a look at what I have mastered so-far, but before that... here is a qoute from"
  experienceAboutAllText = `${basicExperienceText} <span style="color:cyan;">${choosenQoute.author}:</span> "${choosenQouteText}"`
  experienceAboutText.innerHTML = experienceAboutAllText
  

  
}



async function changeProjectsAboutText(){
  allQoutes = ""
  
  
  allQoutes = await getQoutesData()
  
  qouteInd = Math.floor(Math.random(0)*allQoutes.length)
  choosenQoute = allQoutes[qouteInd]
  choosenQouteText = choosenQoute.en

 
  if(device.includes("pc")){
    projectsAboutText.style.fontSize = "1.5rem"
    if(choosenQouteText.length > 140){
      projectsAboutText.style.fontSize = "1rem"
    }
  }

  basicProjectsText = "Here, I have kept this page full of all the projects I had fun working on. Surely one of them might catch your eyes... Also dont think i forgot your qoute from"
  projectsAboutAllText = `${basicProjectsText} <span style="color:cyan;">${choosenQoute.author}:</span> "${choosenQouteText}"`
  projectsAboutText.innerHTML = projectsAboutAllText
  

  
}




