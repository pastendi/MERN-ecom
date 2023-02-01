import React from 'react'
import { Wrapper } from '../style/About'
import aboutImage from '../assets/about.png'

const About = () => {
  return (
    <Wrapper>
      <div className='about'>
        <img src={aboutImage} alt='about us' className='img' />
        <article>
          <div className='title'>
            <h3>About Us</h3>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum
            reprehenderit quibusdam temporibus sed. Vel sequi, iste deserunt
            enim numquam alias neque eos provident natus modi esse molestias,
            animi dolorem eius reprehenderit est rerum cumque autem delectus
            quis officia, nostrum repellat beatae laudantium. Suscipit
            dignissimos repudiandae fuga labore culpa veniam quasi sit expedita
            quis officiis id ea necessitatibus quos, repellat quidem cumque nisi
            ut magnam nemo assumenda iure? Tempore itaque dolorum corporis,
            minima est nihil culpa, quis voluptates expedita sit facere ipsam
            sint. Dicta, quaerat similique, soluta autem est obcaecati
            voluptates amet natus nulla doloribus temporibus, sit aliquid
            distinctio illum!
          </p>
        </article>
      </div>
    </Wrapper>
  )
}

export default About
