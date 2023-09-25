

const Banner = () => {
    return (
        <div className="relative">
            <img className="w-full" src="https://i.ibb.co/yS63pfw/clothing-donation3.jpg" alt="" />
            <div className="absolute inset-0 bg-white opacity-90 flex flex-col justify-center items-center gap-5">
                <p className="text-[#0B0B0B] text-3xl lg:text-4xl font-bold text-center">I Grow By Helping People In Need</p>
                <div>
                    <input className="border-y-2 border-l-2 rounded-l-md py-1 lg:py-2 px-3 lg:px-5" type="search" name="" id="" placeholder="Search here"/>
                    <button className="btn rounded-r-md bg-[#FF444A] text-white py-1 lg:py-2 px-3 lg:px-5">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;