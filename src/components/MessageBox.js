import React, { Component } from 'react'
import '../Style/boxText.css'

const MessageBox = ({imgComment,nameComment,messageContent}) => {
  console.log()
  return (
    <>
      <div className="box">
        <img className="avatar"
          src={imgComment}
          alt="avatar" />
        <div id="boxText">
          <p><b>{nameComment}: </b>{messageContent}</p>
        </div>
      </div>
    </>
  );
}

export default MessageBox