document.addEventListener("DOMContentLoaded",()=>{

    function createSpark(){

        const username=document.querySelector(".username");
        const container=document.querySelector(".spark-container");

        if(!username||!container)return;

        const s=document.createElement("div");

        s.className="spark";

        const w=username.offsetWidth;
        const h=username.offsetHeight;

        const size=2+Math.random()*5;

        s.style.width=size+"px";
        s.style.height=size+"px";

        s.style.left=Math.random()*w+"px";
        s.style.top=Math.random()*h+"px";

        s.style.animationDuration=
            (.9+Math.random()*.8)+"s";

        container.appendChild(s);

        setTimeout(()=>{

            s.remove();

        },1800);

    }

    // Nhiều hạt ngay khi load
    for(let i=0;i<35;i++){

        setTimeout(createSpark,i*35);

    }

    // Tăng mật độ
    setInterval(createSpark,35);

});