import { gsap } from "gsap";


export function gsapMain () {

    const tl = gsap.timeline()

    tl.fromTo(".photoBlock",{
        x: -1000,
        opacity: 0,
    },
    {
        x:0,
        opacity:1
    },1)
    .fromTo(".infoBlock",{
        x: 2000,
        opacity: 0,
    },
    {
        x:0,
        opacity:1
    },1)
    .fromTo(".gitBlock",{
        x: -1000,
        opacity: 0,
    },
    {
        x:0,
        opacity:1
    },2)
    .fromTo(".screencastBlock",{
        x: 2000,
        opacity: 0,
    },
    {
        x:0,
        opacity:1
    },2)
    .fromTo(".jsPowerHeader",{
        opacity: 0,
    },
    {
        opacity:1
    },3)
    .fromTo(".footer__text",{
        opacity: 0,
    },
    {
        opacity:1
    },3)
}