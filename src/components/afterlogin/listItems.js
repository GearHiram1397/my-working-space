import * as React from 'react';
import {useState} from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import CloudIcon from '@mui/icons-material/Cloud';
import {Link} from 'react-router-dom';
//import {Avatar} from '@mui/material'
import Clock from 'react-live-clock'
import BasicList from './ProfilePopup'
import styled from 'styled-components'


export const MainListItems = () => {
  const  [action, setAction] = useState(true)
  
  return(
  
  <React.Fragment >
    <Link className="thelink" to="/dashboard">
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    </Link>
    <ListItemButton>
      <ListItemIcon>
        <NotificationsIcon />
      </ListItemIcon>
      <ListItemText primary="Notification" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Follow us" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <EmojiEventsIcon />
      </ListItemIcon>
      <ListItemText primary="Rewards" />
    </ListItemButton>
    <ListItemButton onClick={() => {setAction(!action)}}>
    {action ? (<>
      <ListItemIcon>
        <HeadphonesIcon />
      </ListItemIcon>
      <ListItemText primary="Spotify" />
    </>) : (<>
  
    <iframe  title="This is a unique title"  style={{borderRadius:"12px", height: '75px' , width: '95%'}} src="https://open.spotify.com/embed/album/07F8RAhtSty0D08otzAR4w?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" 
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" />
    </>)}
    </ListItemButton>
  </React.Fragment>
  )
};

export const SecondaryListItems = () => { 

  const  [popup, setPopup] = useState(true)

  return (
  <React.Fragment>
    <ListSubheader component="div" inset>
     Welcome Back!
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AccessTimeFilledIcon />
      </ListItemIcon>
      <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CloudIcon />
      </ListItemIcon>
      <ListItemText primary="Weather" />
    </ListItemButton>
    <ListItemButton onClick={() => setPopup(!popup)} style={{display: "flex", justifyContent: "center"}}>
    {(popup)? (  <ListItemIcon >
      <Avatar  alt="user" src="https://avatars.githubusercontent.com/u/73570283?v=4" />
      </ListItemIcon >) : (<>
        <BasicList />
      </>)}
    </ListItemButton>
  </React.Fragment>
)};

const Avatar= styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin-left: 10px;
  }

`