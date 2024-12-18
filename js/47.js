const canvas = document.querySelector('canvas');
const $Image = document.querySelectorAll('.p');
const $Imagep1 = document.querySelectorAll('.p1');
const $line = document.getElementById("line")
const $lng = document.querySelectorAll(".l")


const Flowers =[{name:"철쭉",language:"사랑의 즐거움",position:"강원도",Pname:""},{name:"개나리",language:"희망",position:"경기도"},
    {name:"백목련",language:"이루지 못할 사랑",position:"충청도"}, {name:"백일홍",language:"행복",position:"전라도"},
    {name:"장미",language:"사랑",position:"경상도"},{name:"참꽃",language:"다정",position:"제주도"}]


let position = [{StartX:0,startY:0,x:0,y:0},{StartX:0,startY:0,x:0,y:0},{StartX:0,startY:0,x:0,y:0},{StartX:0,startY:0,x:0,y:0},
    {StartX:0,startY:0,x:0,y:0},{StartX:0,startY:0,x:0,y:0}
]
let Line=[];

let d = canvas.getContext('2d');
let data;
let Flag =false;

let Chose;
let Usep=GetRandList(6,6);

let Check =0;

let Cursor;

const DataInput = ()=>{
    Usep.forEach((v,i)=>{
        console.log(Usep)
        console.log($Imagep1[i].language)
        data = $Image[i].getClientRects();
        Line[i] = data[0];

        $Imagep1[i].language =  Flowers[v-1].language
        $lng[i].innerHTML = Flowers[v-1].language
        
    })
}
DataInput();

window.addEventListener('mousedown',()=>{
    
    if(Flag===true)
    {
        Flag=false
        d.clearRect(0,0,canvas.width,canvas.height)
        return;
    }
})

$Image.forEach((v,i)=>{
    $Image[i].addEventListener('click',(()=>{   

        if(Flag==false){
            Flag=true
            Chose =i;
        console.log(Chose)
            console.log(i)
        }
        else{
            Flag=false
            d.clearRect(0,0,canvas.width,canvas.height)
        }}));
})

$Imagep1.forEach((v,i)=>{
    $Imagep1[i].addEventListener('click',((e)=>{
        Check=0;
        console.log(e.target.name)
        console.log(Chose);
        if(Flowers[Chose].language == e.target.language){
            position[Chose].StartX = Line[Chose].left-101;
            position[Chose].startY = Line[Chose].top+5;
            position[Chose].x = Cursor.clientX-103;
            position[Chose].y = Cursor.clientY+2;
           
            
        }

        $Imagep1.forEach((v,i)=>{
            if(position[i].StartX!=0&& position[i].startY!=0&&position[i].x!=0&&position[i].y!=0){
                console.log("성공")
                Check++;
            }
        })

        if(Check==6)
        {
            console.log("모두 성공")
            
            document.getElementById("circleIcon").style.display = "block";
            document.getElementById("circle").style.display = "block";
            document.getElementById("grayBack").style.display = "block";
            document.getElementById('Next_h1').style.display = 'block';
            document.getElementById('Next').style.display = 'block';
        }
        return;
    }))
})

window.addEventListener("mousemove",((event)=>{
    if(Flag==true)
    {
        Cursor = event;
        drawLine(event)
    }
    Whiledraw()
}))

const drawLine = (event) =>{
    d.clearRect(0,0,canvas.width,canvas.height)
    d.beginPath();
    d.strokeStyle = 'black'
    d.moveTo(Line[Chose].left-101,Line[Chose].top+5);
    d.lineTo(event.clientX-103,event.clientY)
    d.stroke()
}

const Whiledraw=()=>{
    position.forEach((v,i)=>{
        d.beginPath();
        d.strokeStyle = 'black'
        d.moveTo(position[i].StartX,position[i].startY);
        d.lineTo(position[i].x,position[i].y)
        d.stroke()
    })
}

function GetRandom(max,min = 1){
    return Math.floor(Math.random()*max) + min;
}

function GetRandList(count,max,min=1){
    const list = new Set();

    while(count > list.size){
        list.add(GetRandom(max,min));
    }
    return [...list];
}

document.querySelector("#Next").addEventListener('click',()=>{
    location.replace("http://127.0.0.1:5500/48.html");
})




