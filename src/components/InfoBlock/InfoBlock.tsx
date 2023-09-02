import { FC } from "react"
import { IInfoBlock } from "../Interface/IInfoBlock"
import './infoblock.sass'




export const InfoBlock: FC<IInfoBlock> = (props: IInfoBlock) => {

  return (
   <div className="infoBlock">
      <h1 className="infoBlock__title title">Программирование как любимое дело</h1>
      <p>
          Привет меня зовут Эдик. Я занимаюсь программированием уже много лет, начиная со школьной скамьи. Любовь к программированию мне привила моя преподовательница в школе,
        по совместительству директор. В школе мы писали на PascalABC и не занимались такими интересными вещами, как web-программирование, а в основном сортировали
        массивы иии... сортировали массивы, но лишь спустя время, я понял что это было скучно, а понял я это, потому что окунулся в web-разработку. Но это не значит, что не нужно 
        учиться сортировать массивы - это крайне важный навык для любого программиста. 
      </p>
      <p>Когда я начинал свой путь web-разработчика, по началу было трудно, так как было не понятно с чего начать, куда двигаться, что и как писать. К сожаление мне не повезло и у
        у меня не было хорошего наставника, который мог бы меня провести по этому тернистому, но крайне интересному пути от сортировщика массивов на Pascal, до полноценного frontend
        разработчика. Что ж, ну а вас, хочу поздравить, вы не одни на этом пути, впереди нас ждет множество открытий и море свершенствований.
      </p>
   </div>
  )
}
