import React from 'react';
import './App.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import { ColorRing } from 'react-loader-spinner'
import Instructions from './instructions/Instructions';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes, 
  Route,
} from "react-router-dom";
import Main from './main/Main';
import Partnerchools from './show-schools/Partnerschools';
import MapAndPhoto from './misc/MapAndPhoto';
import Play from './play/Play';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import { styled } from '@mui/material/styles';
import { Tooltip } from 'react-tooltip'
import EndGame from './end-game/EndGame';
import Error404 from './errors/Error404';
import { EndResultProvider } from './misc/EndResultContex';
import * as texts from './misc/texts';
  
function App() {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
      setLoad(false);
    },3000);
  },[]);

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
      width: '100%',
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  return (
    <EndResultProvider>
      <div className="App">
        {load ?(
          <div className='loading'>
            <ColorRing
              visible={true}
              height="60"
              width="60"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={['red','#E95A0C', '#B52483', '#000000', '#F2F2F2']}
            />
          </div>  
          ):(
            <div>
              <div>
                <img src="logo.jpg" alt="logo" style={{
                  width: "80px",
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                }}></img>
              </div>
              <div className='title-and-instructions'>
                <div className='title'>
                  <h2>{texts.title}</h2>
                  <h3>{texts.second_title}</h3>
                </div>
                
                <IconButton 
                  onClick={()=>{
                    setOpen(true);
                  }}
                  style={{
                    marginLeft: "5px",
                  }}
                  data-tooltip-id="my-tooltip"
                >
                  <Tooltip id="my-tooltip"
                  place="right"
                   style ={{
                    fontSize: "12px",
                  }}>
                    {texts.instructions_tooltip}
                  </Tooltip>
                  <HelpIcon />
                </IconButton>
              </div>
              <BootstrapDialog open={open} onClose={handleClose} aria-labelledby="customized-dialog-title">
                <Instructions close = {handleClose} />
              </BootstrapDialog>
  
  
              <Router>
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/instructions" element={<Instructions />} />
                  <Route path="/show-schools" element={<Partnerchools />} />
                  <Route path="/play" element={<Play />} />
                  <Route path='/misc/MapAndPhoto' element={<MapAndPhoto />} />
                  <Route path="/end-game" element={<EndGame />} />
                  <Route path="/error404" element={<Error404 />} />
                </Routes>
              </Router>
            </div>
          )
        }
      </div>
    </EndResultProvider>
  );
}

export default App;