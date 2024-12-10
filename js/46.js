import data from './basic.js'

const UserSetInput = document.querySelectorAll(".s")
const UserInputs = document.querySelectorAll(".p")
const $btn = document.querySelector("#Next")

data.function_46(UserInputs);

let oneFlag = false;
let twoFlag = false;



    document.addEventListener('keydown',(key)=>{

        if(key.isComposing) return;
    
        if(key.code=="Enter")
        {
            if(data.InputSet(UserSetInput)==true){
                oneFlag = true;
                BackNext();
            }  
            if(data.Inputp(UserInputs)==true)
            {
                twoFlag = true;
                BackNext();
            }
        }
    })
    
    
    document.addEventListener('mousedown',()=>{
    
        UserSetInput.forEach((v,i)=>{
            if(!!UserSetInput[i].value){
                if(data.InputSet(UserSetInput)==true)
                {
                    oneFlag = true;
                    BackNext();
                }
            }
            
            if(!!UserInputs[i].value){
                if(data.Inputp(UserInputs)==true)
                {
                    twoFlag = true;
                    BackNext();
                }
            }
        })
    })

    function BackNext(){

        console.log(oneFlag)
        console.log(twoFlag)
        if(oneFlag==true && twoFlag == true)
        {
            document.getElementById("circle").style.display = "block";
            document.getElementById("circleIcon").style.display = "block";
            document.getElementById("grayBack").style.display = "block";
            $btn.style.display = "block"
        }
    }

    $btn.addEventListener('click',()=>{
        location.href ="http://127.0.0.1:5500/47.html";
    })
