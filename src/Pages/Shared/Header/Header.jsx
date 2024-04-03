import logo from '../../../assets/logo.png';
import moment from 'moment';

const Header = () => {
  return (
    <div className='text-center'>
     <img className='mx-auto' src={logo} alt="" />
     <p className='mt-2'>Journalism Without Fear or Favour</p>
     <p  className='text-xl mt-2'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    </div>
  );
};

export default Header;