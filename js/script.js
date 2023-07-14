location.href = "https://muheko.ml"

function scrollToContactSection(){
    contactSection.scrollIntoView({
        behavior:"smooth"
    })
    
}


function generateExperienceBoxes(){
    allExperienceSkillsDiv = document.querySelector(".experienceGrid")

    for(let item of experienceData){
        name = item.name
        icon = item.icon

        allExperienceSkillsDiv.innerHTML += `
        <div class="experienceBox fa-bounce" style="background-image:url(${icon}); background-size:cover; background-repeat:no-repeat;"></div>

        </div>
`
    }
      
}


function setup(){
    generateExperienceBoxes()
}

setup()
