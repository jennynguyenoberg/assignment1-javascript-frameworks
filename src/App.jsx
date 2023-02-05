import React, { useState } from 'react'
import image from './assets/image.png'
import design from './assets/design.jpg'
import './App.css'

function getActiveClassName(activeArticle, currentArticle) {
  if (activeArticle === currentArticle) {
    return 'show-article'
  } else {
    return 'hide-article'
  }
}

function App() {
  const [activeArticle, setActiveArticle] = useState('First Article')

  return (
    <>
      <h1 className='h1'>Assignment 1 — JavaScript Frameworks</h1> 
      <div className='container'>
        <article className={`active ${getActiveClassName(activeArticle, 'First Article')}`} >
          <h2>About Me</h2>
          <p>My name is Jenny Nguyen Öberg 👋 A soon-to-be Front-end Developer and experienced Designer. So far I've been learning and practised basic HTML, CSS and vanilla JavaScript with excersices like arrays, functions and loops. I've also learned how to implement jQuery with plugins, connecting to API's using JSON objects and AJAX amongst other things.</p>
          <img className='image' src={image} alt="Image of me" />
        </article>
        <article className={`active ${getActiveClassName(activeArticle, 'Second Article')}`} >
          <h2>Idea</h2>
          <p>A pomodoro timer 🍅 that counts down with 25 minute intervals, everytime a startbutton is pushed. This will be useful for focusing while studying the React framework module.</p>
        </article>
        <article className={`active ${getActiveClassName(activeArticle, 'Third Article')}`} >
          <h2>Design Style</h2>
          <p>I've chosen to remake <a href='https://dribbble.com/shots/19776825-A-Mockups-iPhone-14-Pro'>this</a> design, because I like the modern, asymmetrical composition between the background image, the colors and the simplistic sans-serif typeface. </p>
          <img className='design' src={design} alt="Image of website design style" />
        </article>
        <div className='btn'>
          <button onClick={() => {
            setActiveArticle((a) => {
              if (a === 'First Article') {
                return 'Second Article'
              }
              else if (a === 'Second Article') {
                return 'Third Article'
              }
              else if (a === 'Third Article') {
                return 'First Article'
              } else {
                return 'First Article'
              }
            })
          }}>Switch Article</button>
        </div>
      </div>
    </>
  )
}

export default App