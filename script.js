function validateForm(){
    var returnval=true;
    var name= document.forms['myForm']["firstname"].value;
    console.log(name);
    if(name.length==0)
    {
        alert("Please enter your name");
        returnval=false;
    }

    if(name.length<5)
    {
        alert("length is too short!");
        returnval=false;
    }
     
    var email= document.forms['myForm']["e-mail"].value;
    if(email.length>15)
    {
        alert("Length of email is too long!");
        returnval=false;
    }

    var phone= document.forms['myForm']["phone No."].value;
    if(phone.length!=10)
    {
        alert("Enter a valid 10-digit long phone number");
        returnval=false;
    }

    var query= document.forms['myForm']["subject"].value;
    if(query==0)
    {
        alert("Please let us know your query!");
        returnval=false;
    }
    return returnval;
}

const faqs= document.querySelectorAll(".fcontainer");
faqs.forEach(fcontainer=>{
    fcontainer.addEventListener("click",()=>
    {
        fcontainer.classList.toggle("active");
    });
});