import { FC } from "react"
import { IGitBlock } from "../Interface/IGitBlock"
import './gitblock.sass'
import git from '../../assets/images/git.png'




export const GitBlock: FC<IGitBlock> = (/* props: IGitBlock */) => {

  return (
   <div className="gitBlock">
      <h1 className="gitBlock__title title">Тут ты можешь посмотреть на мой github</h1>
      <h2 className="gitBlock__text">Название репозитория этого сайта YandexMentor</h2>
      <a href="https://github.com/gGodlik04" target="blank"><img src={git} alt="github" className="gitBlock__image" height="100%"/></a>
   </div>
  )
}

