const canvas = document.querySelector('canvas');
const $Image = document.querySelectorAll('.p');
const $Imagep1 = document.querySelectorAll('.p1');
const $line = document.getElementById("line")


let position = [{StartX:0,startY:0,x:0,y:0},{StartX:0,startY:0,x:0,y:0},{StartX:0,startY:0,x:0,y:0},{StartX:0,startY:0,x:0,y:0},
    {StartX:0,startY:0,x:0,y:0},{StartX:0,startY:0,x:0,y:0}
]

let d = canvas.getContext('2d');
let Flag =false;

let Chose;
let data;
let Line=[];
let Check =0;

let Cursor;

const DataInput = ()=>{
    $Image.forEach((v,i)=>{
        data = $Image[i].getClientRects();
        Line[i] = data[0];
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
    $Imagep1[i].addEventListener('click',(()=>{
        Check=0;
        if(Chose ==i){
            position[i].StartX = Line[i].left+5;
            position[i].startY = Line[i].top-3;
            position[i].x = Cursor.clientX+2;
            position[i].y = Cursor.clientY-6;
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
        }
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
    d.moveTo(Line[Chose].left+5,Line[Chose].top-3);
    d.lineTo(event.clientX+2,event.clientY-6)
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





