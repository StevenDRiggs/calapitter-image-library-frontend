import { gsap } from 'gsap'


const bounceIn = () => {
  const tl = gsap.timeline({id: 'bounceIn'})

  tl.addLabel('prep')
    .to('#signupBtn', {opacity: 0, disabled: true, duration: 0}, 'prep')
    .to('#loginBtn', {opacity: 0, disabled: true, duration: 0}, 'prep')
    .to('#head-face', {opacity: 0, duration: 0}, 'prep')
    .to('#head-antennae', {opacity: 0, duration: 0}, 'prep')
    .to('#body1-legs', {opacity: 0, duration: 0}, 'prep')
    .to('#body2-legs', {opacity: 0, duration: 0}, 'prep')
    .to('#body3-legs', {opacity: 0, duration: 0}, 'prep')
    .to('#tail1-legs', {opacity: 0, duration: 0}, 'prep')
    .to('#head-head', {opacity: 0, duration: 0}, 'prep')
    .to('#body1-body', {opacity: 0, duration: 0}, 'prep')
    .to('#body2-body', {opacity: 0, duration: 0}, 'prep')
    .to('#body3-body', {opacity: 0, duration: 0}, 'prep')
    .to('#tail1-body', {opacity: 0, duration: 0}, 'prep')
    .to('#tail2', {opacity: 0, duration: 0}, 'prep')
    .to('#tail3', {opacity: 0, duration: 0}, 'prep')

  tl.addLabel('bounce')
    .to('.segment', {x: -150, y: -200, duration: 0}, 'bounce')
    .to('.segment', {opacity: 1, duration: 0, stagger: 0.4}, 'bounce')
    .to('.segment', {x: 0, duration: 3.5, stagger: 0.4}, 'bounce')
    .to('.segment', {y: 0, duration: 0.5, stagger: 0.4, ease: 'power2.in'}, 'bounce')
    .to('.segment', {y: -100, duration: 0.5, stagger: 0.4, ease: 'power2.out'}, 'bounce+=0.5')
    .to('.segment', {y: 0, duration: 0.5, stagger: 0.4, ease: 'power2.in'}, 'bounce+=1')
    .to('.segment', {y: -50, duration: 0.5, stagger: 0.4, ease: 'power2.out'}, 'bounce+=1.5')
    .to('.segment', {y: 0, duration: 0.5, stagger: 0.4, ease: 'power2.in'}, 'bounce+=2')
    .to('.segment', {y: -25, duration: 0.5, stagger: 0.4, ease: 'power2.out'}, 'bounce+=2.5')
    .to('.segment', {y: 0, duration: 0.5, stagger: 0.4, ease: 'power2.in'}, 'bounce+=3')

  tl.addLabel('fadeIn')
    .to('#body1-legs', {opacity: 1, duration: 0.5}, 'fadeIn')
    .to('#body2-legs', {opacity: 1, duration: 0.5}, 'fadeIn+=0.1')
    .to('#body3-legs', {opacity: 1, duration: 0.5}, 'fadeIn+=0.2')
    .to('#tail1-legs', {opacity: 1, duration: 0.5}, 'fadeIn+=0.3')
    .to('#head-face-mouth', {opacity: 0, duration: 0}, 'fadeIn')
    .to('#head-face', {opacity: 1, duration: 1}, 'fadeIn+=0.6')
    .to('#head-antennae', {y: 25, duration: 0}, 'fadeIn+=1')
    .to('#head-antennae', {opacity: 1, y: 0, duration: 0.3}, 'fadeIn+=1.1')
    .to('#head-face-mouth', {opacity: 1, duration: 1}, 'fadeIn+=1.6')
    .addLabel('end')
    .then(() => {
      blink()
      afterAnim()
    })
}

const blink = () => {
  const tl = gsap.timeline({id: 'blink', repeat: -1})

  tl.to('#eyes-clip-path', {y: 20, duration: 0.1})
    .to('#eyes-clip-path', {y: 0, duration: 0.1})

  tl.repeatDelay(1.8)
}

const afterAnim = () => {
  const tl = gsap.timeline({id: 'afterAnim'})

  tl.to('#SVGs div', {position: 'static', width: 300})
    .to('#signupBtn', {opacity: 1, disabled: false})
    .to('#loginBtn', {opacity: 1, disabled: false})
}

const skipAnim = () => {
  const anim = gsap.getById('bounceIn') || gsap.getById('fadeIn')

  anim ? () => {
    anim.seek('end')
    anim.play()
  }: null

  afterAnim()
}


export { bounceIn, skipAnim }
