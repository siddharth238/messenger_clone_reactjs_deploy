  
 
import { flexbox } from '@mui/system';
import './Navbar.scss';

const Navbar = () => {
 

  return (
    <nav className="app__navbar">
      
      <div className="app__navbar-logo">

        <h1>`Siddharth   ?{"{"}Facebook_Messenger}`</h1>
         
      </div>
      <div className="app__navbar-links">
      <div className='media' style={{display:flexbox, flexDirection:'column' }}> 
      <p>Made with ❤️ using React => <a style={{textDecoration:"none" ,fontWeight:"bold"} } href="https://siddharthroyx.netlify.app/">Portfolio</a></p>
       <p>Go ahead and type out the URL in another browser or mobile to see the live texts (0🔄).</p></div>
    </div>
      
    </nav>
  );
};

export default Navbar;
