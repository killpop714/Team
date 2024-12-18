const Flowers =[{name:"철쭉",language:"사랑의 즐거움",position:"강원도"},{name:"개나리",language:"희망",position:"경기도"},
    {name:"백목련",language:"이루지 못할 사랑",position:"충청도"}, {name:"백일홍",language:"행복",position:"전라도"},
    {name:"장미",language:"사랑",position:"경상도"},{name:"참꽃",language:"다정",position:"제주도"}]

let correctAnswer =[];
let Random_p=[];

const Inputp = ((event)=>{

    let Check =0;
    event.forEach((v,i)=>{

        console.log(correctAnswer[i].name);
        console.log(event[i].value );

        if(correctAnswer[i].name == event[i].value)
        {
            Check++;
        }
        else if(!event[i].value){
            console.log("값이 비었습니다")
            return;
        }

        else if(correctAnswer[i].name !=event[i].value) {
            alert("값이 틀립니다")
            event[i].value="";
        }

        console.log(Check)
    })
    if(Check==6)
        return true;
})

const function_46 = (p) =>{

    Flowers.forEach((v,i) => {
        correctAnswer[i] = Flowers[i];
    });
}

const InputSet = ((event)=>
{
    let Checkp =false;
    let UseV= [];
    let Check =0;
    console.log(event.value)
        for(let i=0; i<6; i++){
                if(correctAnswer[i].name==event.value && UseV[i]!=event.value)
                {
                    Check++;
                    UseV[i]=event.value
                    console.log("InputSet 작동중")
                    Checkp= true;
                }
                else if(UseV[i]==event.value)
                {
                    alert("값이 중복 되었습니다.")
                    event.value = ""
                    return;
                }   
                else{
                    console.log("다른 값")                   
                } 
        }
        if(Checkp==false){
            alert("다른 내용을 적었습니다.")
            event.value =""
        }
        console.log(Check) 
        if(Check==6)
            return true;
})

const Input = ((e)=>{

}) 


export default{Inputp,function_46,InputSet};

