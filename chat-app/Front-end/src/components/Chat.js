import React, { useId } from "react";

const Chat = ({
  userName,
  userId,
  chatId,
  chat,
  upvotes,
  downvotes,
  change,
  votable = true,
}) => {
  return (
    <div className="w-full bg-slate-200 rounded-sm p-1 mt-2">
      <div className="w-fit text-start ms-1 px-3 text-sm-3 my-1 text-slate-600">
        {userName}
      </div>
      <div className="px-2 text-start ms-20 text-black">{chat}</div>
      <div className="flex justify-end p-1 text-sm/[17px] mt-1 text-slate-950 rounded-sm">
        {votable ? (
          <div className="flex gap-2 mx-2 text-sm-3">
            <div className="text-slate-600">{upvotes}</div>
            <div
              className="font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
              onClick={() => change(chatId, userId, "up")}
            >
              <i class="fa-solid fa-arrow-up"></i>
            </div>
            <div className="text-slate-600">{downvotes}</div>
            <div
              className="text-slate-600 hover:text-slate-900 cursor-pointer"
              onClick={() => change(chatId, userId, "down")}
            >
              <i class="fa-solid fa-arrow-down"></i>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Chat;
