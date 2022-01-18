import logo from '../img/gerbera.png'; // import는 src기준
import React , {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  {/* 함수(컴포넌트) 내부에서 경로를 처리하는 형태는 public기준 */}
  const imgStyle = {width:'100px', height:'auto'};
  const [myImg, setImage] = useState({});

  useEffect(()=>{
    axios.get('./data/img.json')
    .then( 
      res => 
      setImage({backgroundImage:`url(${res.data[0].img})`}) 
      )
  }, [myImg])
  return (
    <header id="headBox" style={myImg}>

      <h1><Link to="/"><img src={logo} alt="사이트이름" style={imgStyle} /></Link></h1>
      <nav className='gnb' style={{ display:'flex'}}>
        
        <NavLink to="/"><img src="img/dracaena.png" alt="home" style={imgStyle} /></NavLink> 
          { ' | ' }    
        <NavLink to="about"><span style={{
          display:'inline-block', width:'100px', height:'100px', border:'1px solid #777',
          backgroundImage:'url("img/dracaena.png")',
          backgroundSize:'contain'
        }}>about</span></NavLink>
      </nav>
    </header>
  )
}

export default Header;
