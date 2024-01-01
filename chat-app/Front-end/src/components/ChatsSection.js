import React, { useState } from "react";
import Chat from "./Chat";
let globalId = 0;
const ChatSection = ({ userId, userName }) => {
  let [chats, setChats] = useState([]);
  let [text, setText] = useState("");
  function textHandler(e) {
    setText(e.target.value);
  }
  function sendHandler(e) {
    if (text == "") return;
    globalId++;
    let newChat = {
      userId: userId,
      userName: userName,
      id: globalId,
      chat: text,
      upvotes: 0,
      downvotes: 0,
    };
    setChats((chats) => [...chats, newChat]);
    setText("");
  }
  function voteChange(chatId, userId, oper) {
    let a = [];
    chats.forEach((el) => a.push(el));
    if (oper == "up") {
      a.forEach((el) => {
        if (el.id == chatId) {
          el.upvotes++;
        }
      });
    } else {
      a.forEach((el) => {
        if (el.id == chatId) {
          el.downvotes++;
        }
      });
    }
    setChats(a);
  }
  return (
    <div className="lg:flex-row flex-col  flex h-lvh justify-center items-center bg-slate-800 px-5">
      <div className="flex flex-col justify-center gap-4 w-4/12 h-5/6 text-center p-5 m-1 bg-slate-900 text-white rounded">
        <div className="flex flex-col justify-start h-5/6 text-white rounded-sm border-2 border-blue-200 p-2 overflow-auto">
          <div>All chats</div>
          {chats.map((chat) => (
            <Chat
              chatId={chat.id}
              userId={userId}
              userName={userName}
              upvotes={chat.upvotes}
              downvotes={chat.downvotes}
              change={voteChange}
              chat={chat.chat}
            ></Chat>
          ))}
        </div>
        <div className="h-1/6 py-6">
          <div className="h-10 border-2 border-blue-200 p-1 rounded sm flex gap-1">
            <input
              className="h-full w-10/12 rounded-sm border-none p-3 text-black"
              placeholder="Chat"
              value={text}
              onChange={textHandler}
            ></input>
            <button
              className="h-full w-2/12 rounded-sm bg-slate-800 hover:bg-slate-100 hover:text-black"
              onClick={sendHandler}
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4 w-4/12 h-5/6 text-center p-5 m-1 bg-slate-900 text-white rounded">
        <div className="flex flex-col justify-start h-full text-white rounded-sm border-2 border-blue-200 p-2 overflow-auto">
          <div>Medium priority chats</div>
          {chats
            .filter((chat) => chat.upvotes < 10 && chat.upvotes >= 5)
            .map((chat) => (
              <Chat
                chatId={chat.id}
                userName={userName}
                userId={userId}
                upvotes={chat.upvotes}
                downvotes={chat.downvotes}
                change={voteChange}
                chat={chat.chat}
              ></Chat>
            ))}
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4 w-4/12 h-5/6 text-center p-5 m-1 bg-slate-900 text-white rounded">
        <div className="flex flex-col justify-start h-full text-white rounded-sm border-2 border-blue-200 p-2 overflow-auto">
          <div>Top priority chats</div>
          {chats
            .filter((chat) => chat.upvotes >= 10)
            .map((chat) => (
              <Chat
                chatId={chat.id}
                userName={userName}
                userId={userId}
                upvotes={chat.upvotes}
                downvotes={chat.downvotes}
                change={voteChange}
                chat={chat.chat}
              ></Chat>
            ))}
        </div>
      </div>
    </div>
  );
};
export default ChatSection;
