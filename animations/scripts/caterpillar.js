import { gsap } from 'gsap'


const clearSVG = () => {
  const tl = gsap.timeline({id: 'totalBounceIn'})

  tl.addLabel('start')
    .to('.pageFooter', {opacity: 0, duration: 0}, 'start')
    .to('#tail3', {x: 150, y: -500, duration: 0}, 'start')
    .to('#tail2', {x: 150, y: -500, duration: 0}, 'start')
    .to('#tail1', {x: 150, y: -500, duration: 0}, 'start')
    .to('#body3', {x: 150, y: -500, duration: 0}, 'start')
    .to('#body2', {x: 150, y: -500, duration: 0}, 'start')
    .to('#body1', {x: 150, y: -500, duration: 0}, 'start')
    .to('#head', {x: 150, y: -500, duration: 0}, 'start')
}

const segmentBounceIn = segment => {
  const segmentTL = gsap.timeline({id: `${segment}BounceIn`})

  segmentTL.addLabel(`${segment}Bounce1fall`)
    .to(segment, {x: -150, duration: 3.5}, `${segment}Bounce1fall`)
    .to(segment, {y: 475, duration: 0.5}, `${segment}Bounce1fall`)
    .addLabel(`${segment}Bounce2rise`, '-=3')
    .to(segment, {y: 425, duration: 0.5, ease: 'power2.out'}, `${segment}Bounce2rise`)
    .addLabel(`${segment}Bounce2fall`, '-=2.5')
    .to(segment, {y: 475, duration: 0.5, ease: 'power2.in'}, `${segment}Bounce2fall`)
    .addLabel(`${segment}Bounce3rise`, '-=2')
    .to(segment, {y: 450, duration: 0.5, ease: 'power2.out'}, `${segment}Bounce3rise`)
    .addLabel(`${segment}Bounce3fall`, '-=1.5')
    .to(segment, {y: 475, duration: 0.5, ease: 'power2.in'}, `${segment}Bounce3fall`)
    .addLabel(`${segment}Bounce4rise`, '-=1')
    .to(segment, {y: 462.5, duration: 0.5, ease: 'power2.out'}, `${segment}Bounce4rise`)
    .addLabel(`${segment}Bounce4fall`, '-=0.5')
    .to(segment, {y: 475, duration: 0.5, ease: 'power2.in'}, `${segment}Bounce4fall`)
}

const bounceIn = () => {
  segmentBounceIn('#head-head')
  segmentBounceIn('#body1-body')
  segmentBounceIn('#body2-body')
  segmentBounceIn('#body3-body')
  segmentBounceIn('#tail1-body')
  segmentBounceIn('#tail2')
  segmentBounceIn('#tail3')
}


export { clearSVG, segmentBounceIn }
