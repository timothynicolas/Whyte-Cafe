import hamburgerIcon from '../assets/navbar/hamburger-icon.svg';
import whyteLogo from '../assets/WhyteLogo.svg';

export function Navbar(){
  return(
    <div className='flex justify-between'>
      <img src={whyteLogo} className='w-[50px]'/>
      <img src={hamburgerIcon}/>
    </div>
  );
}