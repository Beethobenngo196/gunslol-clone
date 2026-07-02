const username=document.querySelector(".username");
const container=document.querySelector(".spark-container");

function createSpark(){

    if(!container)return;

    const s=document.createElement("div");

    s.className="spark";

    const w=username.offsetWidth;
    const h=username.offsetHeight;

    s.style.left=Math.random()*w+"px";
    s.style.top=Math.random()*h+"px";

    s.style.animationDuration=
        (.8+Math.random()*.8)+"s";

    s.style.width=
        (2+Math.random()*3)+"px";

    s.style.height=s.style.width;

    container.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },1700);

}

setInterval(createSpark,120);