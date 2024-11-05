import logo from '../Assets/supersync-logo.svg'

const Logo = ({className}) => {
  return (
    <div  className={`${className}`}>
      <img 
          src={logo} 
          alt="logo" 
      />

    </div>
  )
}

export default Logo