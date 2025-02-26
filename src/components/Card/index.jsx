/* eslint-disable react/prop-types */
import Ancor from "../Ancors"
import "./styles.css"

export default function Profile({profile, name, description, email, number}) {
  return (
    <div className='container'>
      <img className='avatar' src={profile} alt='' />
      <h2 className='name'>{name}</h2>
      <div>{description}</div>
      <div>{number}</div>
      <div>{email}</div>
      <div className='links'>
        <Ancor url='https://github.com/Gabriel-Fiuza' name='GitHub'/>
        <Ancor url='https://www.linkedin.com/in/gabriel-fiuza-136495296/' name='LinkedIn'/>
        <Ancor url='https://www.instagram.com/gabriel_fiuza1/' name='Instagram'/>
      </div>
    </div>
  )
}