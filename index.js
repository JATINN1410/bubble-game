var clutter="";
var hitnum=Math.floor(Math.random()*10)
var score=0;
function makebubble()
{
  clutter="";
for(var i=0;i<120;i++)
{
    var rand=Math.floor(Math.random()*10);
  clutter+=`<div class="bubble">${rand}</div>` 
}

document.querySelector("#panelb").innerHTML=clutter;
}

var timer =30;
  function settimer()
  {

    setInterval(() => {

        if(timer>0)
        {
            timer--;
            document.querySelector("#elem2").textContent=`timer:${timer}`;
        }
        else{
            alert(`times up your score is ->${score}`);
        }
    }, 1000);
  }

function onhit()
{
document.querySelector("#elem1").textContent=`hit ${hitnum}`;
}


function incscore()
{ 
    score=score+10;
    document.querySelector("#elem3").textContent=`score:${score}`;
}


function bubbleclick()
{
    document.querySelector("#panelb").addEventListener("click",(a)=>{
       var clicked=Number(a.target.textContent);
       if(clicked==hitnum)
       {
        incscore();
        hitnum=Math.floor(Math.random()*10)
        onhit();
       makebubble();

       }
    })
}

makebubble();
  settimer();
  onhit();
  bubbleclick();
  