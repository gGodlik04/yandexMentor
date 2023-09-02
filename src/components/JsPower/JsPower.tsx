import { FC, useEffect } from "react"
import { IJsPower } from "../Interface/IJsPower"
import './jspower.sass'
import { NavLink } from "react-router-dom"

// NO TYPESCRIPT

export const JsPower: FC<IJsPower> = (props: IJsPower) => {

  useEffect(() => {

    const C = document.querySelector("canvas"),
    context = C?.getContext("2d"),
    width = (C!.width = window.innerWidth),
    height = (C!.height = window.innerHeight);
  
  const str = "01",
    matrix = str.split("");
  
  let font = 15,
    col = width / font,
    arr:any = [];
  
  for (let i = 0; i < col; i++) arr[i] = 1;

  function draw() {
    context!.fillStyle = "rgba(0,0,0,.05)";
    context!.fillRect(0, 0, width, height);
    context!.fillStyle = "#0f0";
    context!.font = font + "px system-ui";
    for (let i = 0; i < arr.length; i++) {
      let txt = matrix[Math.floor(Math.random() * matrix.length)];
      context!.fillText(txt, i * font, arr[i] * font);
      if (arr[i] * font > height && Math.random() > 0.975) arr[i] = 0;
      arr[i]++;
    }
  }
  
  setInterval(draw, 70);
  
  window.addEventListener("resize", () => location.reload());
  })

  
  
  return (
   <div className="jsPower">

    <NavLink to="/"><div className="jsPower__backhref"><p>BACK TO MATRIX</p></div></NavLink>
      <canvas>
        <div>Lena hello</div>
      </canvas>
     <div>Lena hello</div>
   </div>
  )
}

