import React from "react";
import "../styles/Chat.scss";
const Chat = () => {
  return (
    <div className="chat">
      <header className="chat__header">Smth</header>
      <div className="chat__main">
        <div className="chat__messages"></div>
        <div className="chat__input-block">
          <input type="text" placeholder="Message..." className="chat__input" />
          <input type="file"  name="" id="file" className="chat__file"/>
          <label htmlFor="file">
            <img src="./images/attach.svg" alt="sdd" className="chat__attach" />
          </label>
          <button className="chat__btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
