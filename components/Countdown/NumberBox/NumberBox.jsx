

export const NumberBox = ({ num, unit, flip }) => {


    return (
        <div className="flex flex-col items-center mt-4 px-1">
            <div className=" relative bg-transparent flex flex-col items-center justify-center rounded-lg w-16 h-20  text-2xl md:text-4xl mt-4 ">
                <div className="rounded-t-lg rounded-b-lg bg-slate-200 w-full h-full"></div>

                <div className="text-2xl absolute text-black z-10 font-bold font-redhat md:text-3xl">
                    {num}
                </div>

                <div className=" rounded-b-lg rounded-t-lg bg-slate-200 w-full h-full"></div>

                <div className={`absolute  w-full h-1/2 top-0  rounded-t-lg z-5 ${flip ? 'animate-flip bg-slate-100' : 'bg-transparent'}`}></div>
                {/* Two Small Dots */}
                {/* <div className="absolute -right-1 top-[36px] rounded-full w-[8px] h-[8px] bg-gray-400"></div>
                <div className="absolute -left-1 top-[36px] rounded-full w-[8px] h-[8px] bg-gray-400" ></div> */}

            </div>
            <p className="text-lg mt-3 font-semibold text-black  md:text-xl ">
                {unit}
            </p>
        </div>
    )
}
