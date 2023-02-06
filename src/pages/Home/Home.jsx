import logo from '../../logo.svg';
import '../../App.css';
import React,  {useState} from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';



function Home() {
  const navigate = useNavigate();

  const [copyText, setCopyText] = useState('');

  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link);
    setCopyText('Link copied to clipboard!');
  };

  return (
     
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-link">
        <div className='buttons'><Button variant="contained" onClick={() => handleCopyLink('https://sendspark.com/share/haecaq9kpd5wa9n7')}>Copy Linked Gif 1</Button></div>
        <div className='buttons'><Button variant="contained" onClick={() => handleCopyLink('https://sendspark.com/share/nw6o8q2iq9pog0b8 ')}>Copy Linked Gif 2</Button></div>
        <p>{copyText}</p>
      </div>
      </header>

    </div>
  );
}

export default Home;