function sendData() {
    let validData = true; 
    const name = document.getElementById("name").value.trim();
    const errorName = document.getElementById("errorName");

    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const errorPhoneNumber = document.getElementById("errorPhoneNumber");

    const totalParticipant = document.getElementById("TotalParticipant").value.trim();
    const errorTotal  = document.getElementById("errorTotal");

    const returnDate = document.getElementById("returnDate").value.trim();
    const errorReturn = document.getElementById("errorReturn");

    const departureDate = document.getElementById("departureDate").value.trim();
    const errorDeparture = document.getElementById("errorDeparture");
    
    if (name === "") {
        errorName.textContent = "Name cannot be empty"; 
        errorName.style.color = "red"; 
        validData = false;
    } else if(!isNaN(name)){
        errorName.textContent = "Name cannot be a number";
        errorName.style.color = "red";
        validData = false;
    }else if(name.length < 2){
        errorName.textContent = "Must be at least 2 characters";
        errorName.style.color = "red"; 
        validData = false;
    }else{
        errorName.textContent = ""; 
    }

     if (phoneNumber === "") {
        errorPhoneNumber.textContent = "Phone number cannot be empty";
        errorPhoneNumber.style.color = "red";
        validData = false;
     }else if(phoneNumber.length != 12  ){
        errorPhoneNumber.textContent = "Number must be 12 digits : 0813xxxxxxxx";
        errorPhoneNumber.style.color = "red";
        validData = false;
     }else if(isNaN(phoneNumber)){
        errorPhoneNumber.textContent = "Phone number must be a number";
        errorPhoneNumber.style.color = "red";
        validData = false;
     }else{
        errorPhoneNumber.textContent = "";
     }



      if (totalParticipant === "") {
        errorTotal.textContent = "Total participant cannot be empty";
        errorTotal.style.color = "red";
        validData = false;
    } else if(isNaN(totalParticipant)){
        errorTotal.textContent = "Total participant must be a number";
        errorTotal.style.color = "red";
        validData = false;
        
    }else{
        errorTotal.textContent = "";
    }


     const today = new Date().toISOString().split("T")[0]; 
    if (departureDate === "") {
        errorDeparture.textContent = "Departure date cannot be empty";
        errorDeparture.style.color = "red";
        validData = false;
    }else if(departureDate < today){
        errorDeparture.textContent = "Cannot be in the past";
        errorDeparture.style.color = "red";
        validData = false;
        
    }else{
        errorDeparture.textContent = "";
    }


    if (returnDate === "") {
        errorReturn.textContent = "Return date cannot be empty";
        errorReturn.style.color = "red";
        validData = false;
    

    }else if(returnDate < today && returnDate < departureDate){
        errorReturn.textContent = "Cannot be in the past, must be after Departure Date";
        errorReturn.style.color = "red";
        validData = false;
        
    }else {
        errorReturn.textContent = "";
    }

    
    if (validData) {
       
        alert("Form submitted successfully!");
        alert(`Name: ${name}, Phone Number: ${phoneNumber}, Total Participant: ${totalParticipant}, Departure Date: ${departureDate}, Return Date: ${returnDate}`);
       
        return true;
    }

    return false; 
}