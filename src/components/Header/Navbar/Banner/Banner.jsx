

const Banner = () => {
    return (
        <div className="relative">
            <img className="w-full" src="https://i.ibb.co/yS63pfw/clothing-donation3.jpg" alt="" />
            <div className="absolute inset-0 bg-white opacity-80 flex flex-col justify-center items-center gap-5">
                <p className="text-[#0B0B0B] text-4xl font-bold">I Grow By Helping People In Need</p>
                <div>
                    <input className="border-2 rounded-l-md py-2 pl-5" type="search" name="" id="" placeholder="Search here"/>
                    <button className="btn border rounded-r-md bg-[#FF444A] text-white py-2 px-5">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;