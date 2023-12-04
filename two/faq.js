var check=true;
var check1=true;
document.getElementsByClassName("ques")[0].addEventListener("click", ()=>{
    if(check===true){
        document.getElementsByClassName("ques")[0].innerHTML= "What is the refund policy? ^"
        check=false;
    }else{
        document.getElementsByClassName("ques")[0].innerHTML= "What is the refund policy? ⌄"
        check=true;
    }
    var x= document.getElementById("ans1")
    if(x.style.display==="block"){
        x.style.display="none"
    }else{
        x.style.display="block"
    }
})
document.getElementsByClassName("ques")[1].addEventListener("click", ()=>{
    if(check1===true){
        document.getElementsByClassName("ques")[1].innerHTML= "Do you offer technical support? ^"
        check1=false;
    }else{
        document.getElementsByClassName("ques")[1].innerHTML= "Do you offer technical support? ⌄"
        check1=true;
    }
    var y= document.getElementById("ans2")
    if(y.style.display==="block"){
        y.style.display="none"
    }else{
        y.style.display="block"
    }
})