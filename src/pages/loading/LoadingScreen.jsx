import WhyteLogo from '../../assets/WhyteLogo.svg'

export function LoadingScreen(){
  return(
    <div className='bg-bg-white flex h-screen justify-center items-center'>
      <img src={WhyteLogo}/> 
    </div>
  );
}