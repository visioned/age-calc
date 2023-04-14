import arrow from "./assets/images/icon-arrow.svg";

function App() {
  return (
    <div className="flex h-screen w-auto items-center justify-center bg-[#F0F0F0] ">
      <div className="h-[485px] w-[345px] rounded-bl-[23px] rounded-br-[100px] rounded-tl-[23px] rounded-tr-[23px]  bg-white px-4 pt-12 ">
        <div className="flex flex-row justify-around">
          <div className="flex flex-col">
            <h3 className="font-pop text-[14px] font-bold uppercase text-slate-400">
              day
            </h3>
            <input type="text" className="w-[88px] rounded border py-2" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-pop font-bold uppercase text-slate-400">
              month
            </h3>
            <input type="text" className="w-[88px] rounded border py-2" />
          </div>
          <div className="flex flex-col">
            <h3 className="font-pop font-bold uppercase text-slate-400">
              year
            </h3>
            <input type="text" className="w-[88px] rounded border py-2" />
          </div>
        </div>
        <div>
          <hr className="mt-5 h-[1px] w-[300px]" />
          <img src={arrow} alt="" className="absolute" />
        </div>
      </div>
    </div>
  );
}

export default App;
