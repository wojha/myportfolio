import React from 'react'
import Heading from './Heading';
import Card from  './Card';

const data = [
   {
    id: "0",
    title: "Aerial system",
    desc: "The aerial system of a frog with each part labelled.",
    img: "/aerial system of frog .jpg",
   },
{
        id: "1",
        title: "Digestive system",
        desc: "The digestive system of a frog with each part labelled.",
        img: "/digestive system of frog.jpg",
    },
    {
        id: "2",
        title: "Gaseous exchange",
        desc: "The gaseous exchange in a human body with each part labelled.",
        img: "/gaseous exchange system of human .jpg",
    },
{
    id: "3",
    title: "Respiratory system",
    desc: "The respiratory system of a frog with each part labelled.",
    img: "/respiratory system of frog.jpg",
},
{
  id: "4",
  title: "Venous System",
  desc: "The venous system of a frog with each part labelled.",
  img: "/froggggg.jpg",
},
{
  id: "5",
  title: "Frog's eye",
  desc: "The eye of a frog with each part labelled.",
  img: "/eye of frog .jpg",
},
{
  id: "6",
  title: "Human brain",
  desc: "The human brain with main parts labelled.",
  img: "/brain.jpg",
},
];

const Biology = () => {
  return  (
    <div id='projects' className='container pt-32'>
      <Heading title='My biology drawings' />
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

export default Biology
