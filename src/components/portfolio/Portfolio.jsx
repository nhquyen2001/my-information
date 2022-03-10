import React from 'react';
import './portfolio.scss';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';

// DO NOT USE THE IMAGES IN PRODUCTION

const datas = [
  {
    id: 1,
    image: IMG1,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/NHQuyen2001',
    demo: 'https://dribbble.com/shots/17661056-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Orion UI kit - Charts templates & info graphics in Figma',
    github: 'https://github.com/NHQuyen2001',
    demo: 'https://dribbble.com/shots/17428282-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/NHQuyen2001',
    demo: 'https://dribbble.com/shots/17610579-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/NHQuyen2001',
    demo: 'https://dribbble.com/shots/17428209-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Orion UI kit - Charts templates & info graphics in Figma',
    github: 'https://github.com/NHQuyen2001',
    demo: 'https://dribbble.com/shots/17557559-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Orion UI kit - Charts templates & info graphics in Figma',
    github: 'https://github.com/NHQuyen2001',
    demo: 'https://dribbble.com/shots/17341601-Orion-UI-kit-Charts-templates-infographics-in-Figma',
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {datas.map((data) => (
          <article className='portfolio__item' key={data.id}>
            <div className='portfolio__item-image'>
              <img src={data.image} alt={data.title} />
            </div>
            <h3>{data.title}</h3>
            <div className='portfolio__item-cta'>
              <a href={data.github} className='btn' target='_blank'>
                Github
              </a>
              <a href={data.demo} className='btn btn-primary' target='_blank'>
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
