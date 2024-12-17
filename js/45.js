const $sub = document.querySelectorAll(".p");
const $a1 = document.getElementById("a1")

const subp1 = ["역삼","강남","교대","서초","방배","사당"];
const subp2 = ["남부터미널","교대","고속터미널","신반포","구반포","동작"];

const $s = document.getElementById("s")
const $r = document.getElementById("r")
const $a2 = document.getElementById("a2")

let Check1 =0;
let Check2=0;



document.addEventListener('keydown',((Key)=>{

    if(Key.code=="Enter")
    {
        DataCheck();
    }
}))

document.addEventListener('mousedown',((Key)=>{
    DataCheck();
}))

const DataCheck = () =>{
    Check1 =0;
    Check2 =0;
    $sub.forEach((v,i)=>{
        if(v.value==subp1[i])
            Check1++;
        else if(!v.value)
            return;

        else{
            v.value =""
            alert("값이 틀렸습니다");
        }


    })
    if($a1.value == "12")
        Check1++;


    if(Check1==7)
        console.log("1번 문제가 전부 맞습니다.");


    let data = $s.value.split(",");

    
    
    data.forEach((v,i)=>{
        console.log(v)
        if(v == subp2[i])
        {
            Check2++;
        }
        else if(!v)
            return;
        else
        {
            $s.value = ""
            alert("경로"+(i+1)+"번이 틀렸습니다")
        }
    })
    if($r.value=="고속터미널")
        Check2++;
    if($a2.value == "15")
        Check2++;

    if(Check1==7&&Check2==8)
    {
        document.getElementById("circleIcon").style.display = "block";
        document.getElementById("circle").style.display = "block";
        document.getElementById("grayBack").style.display = "block";
        document.getElementById('Next_h1').style.display = 'block';
        document.getElementById('Next').style.display = 'block';
    }
}

document.querySelector("#Next").addEventListener('click',()=>{
    location.replace("http://127.0.0.1:5500/46.html");
})
