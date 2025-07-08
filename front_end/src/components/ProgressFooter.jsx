import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import './ProgressFooter.css'

import sad from '../assets/robot_nene-removebg-preview.png'
import disappointed from '../assets/a4aedf82-70ec-4d05-9a58-247878f760fb-removebg-preview.png'
import netral from '../assets/Nene_Kusanagi__-removebg-preview.png'
import excited from '../assets/Nene_Kusanagi_____-removebg-preview.png'
import love from '../assets/____ੈ-removebg-preview.png'

const steps = [
  { label: 'Cover Proposal', img: sad, rating: 0, path: '/cover' },
  { label: 'Kata Pengantar', img: disappointed, rating: 30, path: '/intro' },
  { label: 'Daftar Isi', img: netral, rating: 55, path: '/toc' },
  { label: 'Isi Proposal', img: excited, rating: 75, path: '/content' },
  { label: 'Daftar Pustaka', img: love, rating: 100, path: '/reference' },
]

function generateRandomInRange(min, max) {
  return Math.random() * (max - min) + min
}

function randomizeEmotePosition(el) {
  const positions = ['bottom', 'left', 'right']
  const dir = positions[Math.floor(Math.random() * positions.length)]
  const randX = Math.floor(Math.random() * 60) + 20
  const randY = Math.floor(Math.random() * 10)

  const rotateTop = generateRandomInRange(160, 200)
  const rotateBottom = generateRandomInRange(-10, 10)
  const rotateLeft = generateRandomInRange(60, 100)
  const rotateRight = generateRandomInRange(-60, -100)

  if (dir === 'top') {
    el.style.cssText = `
      top: 0;
      left: ${randX}%;
      transform: translateX(-${randX}%) translateY(-5%) rotate(${rotateTop}deg);
    `
  } else if (dir === 'bottom') {
    el.style.cssText = `
      bottom: 25px;
      left: ${randX}%;
      transform: translateX(-${randX}%) translateY(3%) rotate(${rotateBottom}deg);
    `
  } else if (dir === 'left') {
    el.style.cssText = `
      top: ${randY}%;
      left: 0;
      transform: translateY(-${randY}%) rotate(${rotateLeft}deg);
    `
  } else if (dir === 'right') {
    el.style.cssText = `
      top: ${randY}%;
      right: 0;
      transform: translateY(-${randY}%) rotate(${rotateRight}deg);
    `
  }
}

function ProgressFooter() {
  const location = useLocation()
  const progressRef = useRef(null)
  const emoteRefs = useRef([])
  const boxRefs = useRef([])

  const currentIndex = steps.findIndex(step => step.path === location.pathname)

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${steps[currentIndex]?.rating || 0}%`
    }

    emoteRefs.current.forEach((img, idx) => {
      if (img) img.classList.toggle('active', idx === currentIndex)
    })

    const box = boxRefs.current[currentIndex]
    if (box) randomizeEmotePosition(box)
  }, [currentIndex])

  return (
    <div className="review-overlay">
      <div className="review-container">
        <div className="box">
          <h1>Progress Proposal</h1>
          <div className="slider">
            <div className="inner-progress" ref={progressRef}></div>
            <div className="radio-track">
              {steps.map((step, i) => (
                <div className="radio-box" key={i}>
                  <div className="circle" data-progress-rating={step.rating}></div>
                  <p>{step.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="emote-ct">
        {steps.map((step, i) => (
          <div className="emote-box" ref={el => (boxRefs.current[i] = el)} key={i}>
            <img
              className="emote-image"
              ref={el => (emoteRefs.current[i] = el)}
              src={step.img}
              alt={step.label}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgressFooter
