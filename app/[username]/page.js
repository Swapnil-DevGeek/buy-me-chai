import React from "react";

const Username = ({ params }) => {
  return (
    <div className="min-h-screen ">
      <div className="w-full cover relative">
        <img
          className="w-full object-cover h-[200]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/9514484/759c68a6883848adaa0c192084274ab8/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/4.png?token-time=1714780800&token-hash=I5J9_74gxaGeGgHqj1GY6zcTdtsi3UX35x3oxRwZ11w%3D"
          alt=""
        />
        <div className="profile">
          <img
            width={150}
            height={150}
            className="absolute object-cover -bottom-16 rounded-lg border-2 right-[45%]"
            src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/9514484/621935aecf494519bf7f70b7e7f6f485/eyJoIjoxMDgwLCJ3IjoxMDgwfQ%3D%3D/2.jpeg?token-time=1715040000&token-hash=ykk1NweruFyXEBk3W3fEc-3CId3qfcy7eOTO8ajIzBY%3D"
            alt=""
          />
        </div>
      </div>
      <div className=" flex flex-col gap-1 justify-center items-center my-20">
        <div className="text-white font-bold text-lg">@{params.username}</div>
        <div className="text-slate-400">Coding for fun!</div>
      </div>

      <div className="flex justify-center items-center mb-10">
  <div className="text-white payments flex justify-center items-stretch w-[80%] gap-2">
    <div className="supporters flex flex-col justify-start p-5 rounded-lg bg-slate-900 w-1/2">
      <h2 className="font-bold text-2xl mb-5">Supporters</h2>
      <ul className="flex-grow text-lg">
        
        <li className="my-2 mx-5 flex items-center gap-2">
          <img width={33} src="avatar.gif" alt="user avatar" />
          Shubham paid you $30 with a message ""
        </li>
        <li className="my-2 mx-5 flex items-center gap-2">
          <img width={33} src="avatar.gif" alt="user avatar" />
          Shubham paid you $30 with a message ""
        </li>
        <li className="my-2 mx-5 flex items-center gap-2">
          <img width={33} src="avatar.gif" alt="user avatar" />
          Shubham paid you $30 with a message ""
        </li>
        <li className="my-2 mx-5 flex items-center gap-2">
          <img width={33} src="avatar.gif" alt="user avatar" />
          Shubham paid you $30 with a message ""
        </li>
        <li className="my-2 mx-5 flex items-center gap-2">
          <img width={33} src="avatar.gif" alt="user avatar" />
          Shubham paid you $30 with a message ""
        </li>
        <li className="my-2 mx-5 flex items-center gap-2">
          <img width={33} src="avatar.gif" alt="user avatar" />
          Shubham paid you $30 with a message ""
        </li>
        </ul>
    </div>
    <div className="p-5 w-1/2 rounded-lg bg-slate-900 make-payment flex flex-col justify-start">
      <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
      <div className="flex flex-col gap-2">
        <input type="text" className="w-full p-3 bg-slate-800 rounded-md" placeholder="Enter Name" />
        <input type="text" className="w-full p-3 bg-slate-800 rounded-md" placeholder="Enter Message" />
        <input type="text" className="w-full p-3 bg-slate-800 rounded-md" placeholder="Enter Amount" />
        <button type="button"  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2">
        Pay
      </button>
      </div>
      <div className="flex gap-2 mt-5">
        <button className="bg-slate-800 p-3 rounded-md payment-button">Pay $10</button>
        <button className="bg-slate-800 p-3 rounded-md payment-button">Pay $20</button>
        <button className="bg-slate-800 p-3 rounded-md payment-button">Pay $30</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Username;
