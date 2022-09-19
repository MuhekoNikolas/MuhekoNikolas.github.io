


function generateContactBoxes(){
  //contactsMediasDiv = contactsMediasDiv
  fetch("https://portfolio.3525nikolas.repl.co/api/contacts")
    .then(data=>data.json())
    .then(data=>{
      //data = JSON.stringify(data)
      data = JSON.parse(data)
      console.log(data)


      for(let item of data){
        pfp = item.icon

        //alert(pfp)
        userName = item.name
        site= item.type
        toRedirect = item.url

        //<div class="contactsMediaBox">
        contBox = document.createElement("div")
        contBox.setAttribute("class","contactsMediaBox")
        if(!device.includes("pc")){
          contBox.style.transform = "scale(0)"
        }
        contactsMediasDiv.append(contBox)

        /*/<div class="contactsDisplayAvatar"></div>
              <div class="contactsMediaPfp"></div>
        /*/
        contBoxDisplayAvatar= document.createElement("div")
        contBoxDisplayAvatar.setAttribute("class","contactsDisplayAvatar")
        contBox.append(contBoxDisplayAvatar)

        contBoxPfp= document.createElement("div")
        contBoxPfp.setAttribute("class","contactsMediaPfp")
        contBoxPfp.style.backgroundImage = `url("${pfp}")`
        contBox.append(contBoxPfp)

        /*/
          <div class="contactsMediaTextDiv">
                <h1 class="contactsMediaTextDivUserName">Nikolipo</h1>
                <p class="contactsMediaTextDivSiteName">discord</p>
                
              </div>
        /*/
        contBoxTextDiv= document.createElement("div")
        contBoxTextDiv.setAttribute("class","contactsMediaTextDiv")
        contBoxTextDivH1= document.createElement("h1")
        contBoxTextDivH1.setAttribute("class","contactsMediaTextDivUserName")
        contBoxTextDivP= document.createElement("p")
          contBoxTextDivP.setAttribute("class","contactsMediaTextDivSiteName")
        contBoxTextDivH1.innerText = userName
        contBoxTextDiv.append(contBoxTextDivH1)
        contBoxTextDivP.innerText = site
        contBoxTextDiv.append(contBoxTextDivP)
        contBox.append(contBoxTextDiv)

        /*/
          <button class="contactsMediaBoxContactButton" onclick="redirectTo(url='https://google.com')">
                <h1>
                  <i class="fa fa-letter"></i>Contact Me
                </h1>
                
              </button>
        /*/
        contBoxButton= document.createElement("button")
        contBoxButton.setAttribute("onclick",`redirectTo(url='${toRedirect}')`)
        contBoxButton.setAttribute("class","contactsMediaBoxContactButton")
        contBoxButton.innerHTML = '<h1><i class="fa fa-letter"></i>Contact Me</h1>'
        contBox.append(contBoxButton)

        
      }
      
      
    })
    .catch(err=>{console.log(err)})
  


}


function generateExperienceAllSkillBoxes(){
  fetch("https://portfolio.3525nikolas.repl.co/api/pIcons")
    .then(data=>data.json())
    .then(data=>{
      data=JSON.parse(data)
      console.log(data)

      for(let item of data){
        name = item.name
        icon = item.icon

        allExperienceSkillsDiv.innerHTML += `
<div class="allExperienceDivObject">
                <div class="allExperienceObjectImage fa-bounce" style="background-image:url(${icon});"></div>
                <p class="allExperienceObjectName">${name}</p>
              </div>
`
      }
      console.log(allExperienceSkillsDiv.innerHTML)
      
      
    })
    .catch(err=>{console.log(err)})
  
}



function generateProjectBoxes(){
  fetch("https://portfolio.3525nikolas.repl.co/api/projects")
    .then(data=>data.json())
    .then(data=>{
      data=JSON.parse(data)
      console.log(data)

      for(let item of data){
        name = item.name
        description = item.description 
        type = item.type
        preview = item.preview
        source = item.source
        icon = item.icon
        
        

        
        projectsMediasDiv.innerHTML += `
<div class="myProjectsBox fa-beat" style="--fa-beat-scale: 0.95;">

               
              <div class="myProjectBoxText">
                
                <h1 class="myProjectBoxTextHeader" >${name} <i class="fa-solid ${icon} fa-bounce"></i> </h1>
                <p class="myProjectBoxTextBio">${description}</p>
                
              </div>
              <div class="myProjectBoxOptions">
                
                <button class="myProjectBoxOptionsButton" style="background:red;" onclick="redirectTo('${source}')">
                     <h1> <i class="fa-solid fa-code"></i> </h1>
                </button>
                <button class="myProjectBoxOptionsButton" style="background:green;" onclick="redirectTo('${preview}')">
                     <h1> <i class="fa-solid fa-eye"></i> </h1>
                </button>

              </div>
            </div>
`
      }
      
      
    })
    .catch(err=>{console.log(err)})
  
}