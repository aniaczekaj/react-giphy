import React, { Component } from 'react';
import Gif from './gif'


const List = (props) => {
  return (
    <div className='gif-list'>
      {props.gifs.map(gif =>  <Gif id = {gif.id} key = {gif.id} clicked = {props.selectGif}/> )}
    </div>
  );
};

export default List;
