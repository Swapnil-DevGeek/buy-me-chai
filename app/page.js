export default function Home() {
  return (
    <>    
    <div className="flex flex-col gap-4 justify-center items-center h-[44vh] text-white">
      <div className="font-bold text-5xl flex justify-center items-center gap-2">Buy Me A Chai! <span><img src="/tea.gif" width={88}  alt="" /></span> </div>
      <p>A crowd funding platform for creators. Get funded by your fans and followers.</p>
      <div> 
      <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Start Now
      </button>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10">
    </div>

    <div className="text-white container mx-auto pb-16">
      <h2 className="text-2xl font-bold my-12 text-center">Your fans can buy you a Chai!</h2>
      <div className="flex justify-around container ">
        
        <div className="gifs space-y-3 flex flex-col items-center">
          <img className="bg-slate-400/50 rounded-full flex-col justify-center items-center p-2" src="/man.gif" width={88} alt="" />
          <p className="font-bold">Fans want to help</p>
          <p>Your fans are available for you to help you.</p>
        </div>

        <div className="gifs space-y-3 flex flex-col items-center">
          <img className="bg-slate-400/50 rounded-full flex-col justify-center items-center p-2" src="/coin.gif" width={88} alt="" />
          <p className="font-bold">Fans want to help</p>
          <p>Your fans are available for you to help you.</p>
        </div>

        <div className="gifs space-y-3 flex flex-col items-center">
          <img className="bg-slate-400/50 rounded-full flex-col justify-center items-center p-2" src="/group.gif" width={88} alt="" />
          <p className="font-bold">Fans want to help</p>
          <p>Your fans are available for you to help you.</p>
        </div>
      </div>
      
    </div>
    </>
  );
}
