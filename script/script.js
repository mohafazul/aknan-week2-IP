const form = document.getElementById("form")

male = ["kwasi","kwadwo","kwabena","kwaku","Yaw","kofi","kwame"]

female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua", "Ama"] 
daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] 

let text = "Your Aknan name is "   
form.addEventListener("submit", function(event){
    event.preventDefault()
    let DD = document.getElementById("userInputDay").value 
    let MM = document.getElementById("userInputMonth").value
    let userYear = document.getElementById("userInputYear").value 
    
    let man = document.getElementById("male")  
    let woman = document.getElementById("female")  

    let newYear = userYear.toString()
    let first = userYear[0]
    let second = userYear[1]
    let third = userYear[2]
    let fourth = userYear[3]

    let CC = first + second
    let YY = third + fourth    

    console.log(CC, YY)

    
    if(DD <= 0 || DD > 31){
        alertDay()
    } if(MM <= 0 || MM >12){
        alertMonth ()
    }

    if(man.checked ==true) {
        let weekDay = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
        let born = parseInt(weekDay)

        var akan = male[born]
        var when = daysOfWeek[born]
        document.getElementById("output").innerHTML = text.concat(akan)

    } else if (woman.checked == true) {
        let weekDay = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7
        let born = parseInt(weekDay)

        var akan = female[born]
        document.getElementById("output").innerHTML = text.concat(akan)

    }
      
})


function alertDay(){
    alert("enter a valid date")
}

function alertMonth(){
    alert("enter valid month")
}





