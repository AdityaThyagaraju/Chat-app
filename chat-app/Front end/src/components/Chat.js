import React from "react";

const Chat = ({ chatId, chat, upvotes, change,votable=true }) => {
  return (
    <div className="w-full bg-slate-300 rounded-sm p-1 mt-2 text-slate-950">
      <div className="w-fit text-start ms-2 px-3 ">{chatId}</div>
      <div className="p-2">{chat}</div>
      <div className="flex justify-between p-1 text-sm/[17px] mt-2 bg-slate-100 text-slate-950">
        <div className="rounded-sm p-1">upvotes : {upvotes}</div>
        {votable?<div className="flex gap-2">
          <div
            className="font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
            onClick={() => change(chatId, "up")}
          >
            <i class="fa-solid fa-arrow-up"></i>
          </div>
          <div
            className="text-slate-600 hover:text-slate-900 cursor-pointer"
            onClick={() => change(chatId, "down")}
          >
            <i class="fa-solid fa-arrow-down"></i>
          </div>
        </div>:null}
      </div>
    </div>
  );
};
export default Chat;
