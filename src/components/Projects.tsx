import React from 'react'
import Heading from './Heading';
import Card from  './Card';

const data = [
   {
    id: "0",
    title: "Static resume",
    desc: "A static resume to show how it is made.",
    img: "/staticbyme.jpg",
   },
{
        id: "1",
        title: "Dynamic resume",
        desc: "A dynamic resume to show how generated informations look altogether.",
        img: "/dynamicbyme.jpg",
    },
    {
        id: "2",
        title: "Resume",
        desc: "A professional resume of a teacher.",
        img: "/imtiaz.jpg",
    },
{
    id: "3",
    title: "Resume",
    desc: "A professional resume of an employee.",
    img: "/shoaib.jpg",
},
];

const Projects = () => {
 return  (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        />))}
      </div>
    </div>
  )
}

export default Projects