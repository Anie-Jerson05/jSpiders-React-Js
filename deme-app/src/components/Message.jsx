import '../App.css';
import Ads from './Ads';

const Message = ({user}) => {
  return (
    <>
    <div className='head'>
      <h1>Hii, {user} </h1>
      <p>This is the home page </p>
      <Ads />
    </div>
    </>
  )
}

export default Message