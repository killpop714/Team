const UserSetInput = document.querySelectorAll(".s")
const UserInputs = document.querySelectorAll(".p")
const $btn = document.querySelector("#Next")

const Flowers =[{name:"철쭉",language:"사랑의 즐거움",position:"강원도"},{name:"개나리",language:"희망",position:"경기도"},
    {name:"백목련",language:"이루지 못할 사랑",position:"충청도"}, {name:"백일홍",language:"행복",position:"전라도"},
    {name:"장미",language:"사랑",position:"경상도"},{name:"참꽃",language:"다정",position:"제주도"}]

    let Check1 =0;
    let Check2 =0;
    let Checkp =false;


    document.addEventListener('keydown',(key)=>{

         if(key.isComposing) return;
    
        if(key.code=="Enter")
        {
            DataCheck();
        }
    })
    
    
    document.addEventListener('mousedown',()=>{
        DataCheck();
    
    })


    function BackNext(){

        if(Check1==6 && Check2==6)
        {
            document.getElementById("circle").style.display = "block";
            document.getElementById("circleIcon").style.display = "block";
            document.getElementById("grayBack").style.display = "block";
            document.getElementById("Next").style.display = "block"
        }
    }

    const DataCheck = () =>{
        Check1 =0;
        Check2 =0;
        let UseV= [];

        UserSetInput.forEach((v)=>{
            Checkp =false
            if(!!v.value){
                for(let i=0; i<6; i++){
                    if(Flowers[i].name==v.value && UseV[i]!=v.value)
                    {
                        Check1++;
                        UseV[i]=v.value
                        console.log("InputSet 작동중")
                        Checkp= true;
                    }
                    else if(UseV[i]==v.value)
                    {
                        alert("값이 중복 되었습니다.")
                        v.value = ""
                        return;
                    }   
                    else{
                        console.log("다른 값")                   
                    } 
                }
                if(Checkp==false){
                    alert("다른 내용을 적었습니다.")
                    v.value =""
                }
            console.log(Check1) 
            }
        })
        UserInputs.forEach((v)=>{
            Checkp =false;
            if(!!v.value){
                for(let i=0; i<6; i++)
                {
                    console.log(Flowers[i].name)
                    if(Flowers[i].name == v.value)
                    {
                        Check2++;
                        Checkp= true;
                    }
                    else if(!v.value){
                        console.log("값이 비었습니다")
                        return;
                    }
            
                    else    console.log("다른 값")
                }

                if(Checkp==false){
                    alert("다른 내용을 적었습니다.");
                    v.value="";
                }
                    BackNext();
            }
        })
    }
        
    

    $btn.addEventListener('click',()=>{
        location.href ="http://127.0.0.1:5500/47.html";
    })