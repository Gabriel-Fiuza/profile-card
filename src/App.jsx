import profile from './assets/profileImg.jpeg'
import Card from "./components/Card";
import './globals.css'

export default function App(){
  return (
    <div className='app'>
        <Card
        profile={profile}
        name='Gabriel Fiuza'
        description='FullStack JavaScript | React | Node.js'
        number='37991438352'
        email='gpaulinellifiuza@gmail.com'
     />
    </div>
  )
}