


export const Home = () => {

    
    return (
        <div className="relative  w-full h-full ml-62 ">
            

            <img
                src="https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg"
                alt="doctor"
                className="w-full h-full object-cover bg-blue-200"
            />
            <div className="absolute top-1/4 left -10 text-left text-white  w-[50%] max-w-xl ">
                <h2 className="text-4xl font-bold leading-tight ml-20 ">Patient Engagement Solution To Improve Outcomes</h2>
                <ul className="list-disc list-inside">
                    <li className="text-1/2xl font-bold leading-tight ml-20 mt-7 ">Automated pre-visit patient intake process</li>
                    <li className="text-1/2xl font-bold leading-tight ml-20 mt-2">Improved patient outcomes</li>
                    <li className="text-1/2xl font-bold leading-tight ml-20 mt-2">Patient participation in their healthcare</li>
                    <li className="text-1/2xl font-bold leading-tight ml-20 mt-2">Reduced patient wait times by 16 minutes per patient visit</li>
                    <li className="text-1/2xl font-bold leading-tight ml-20 mt-2">70% less provider documentation time</li>
                    <li className="text-1/2xl font-bold leading-tight ml-20 mt-2">720x average ROI</li>
                    <li className="text-1/2xl font-bold leading-tight ml-20 mt-2">11 minutes saved per patient visit</li>
                    <li className="text-1/2xl font-bold leading-tight ml-20 mt-2">Reduced staff burden</li>
                    <li className="text-1/2xl font-bold leading-tight ml-20 mt-2">70% less provider documentation time</li>
                    <li className="text-1/2xl font-bold leading-tight ml-20 mt-2">Easy set-up and onboarding</li>
                    <li className="text-1/2xl font-bold leading-tight ml-20 mt-2">Decreased overhead</li>
                    <li className="text-1/2xl font-bold leading-tight ml-20 mt-2">No after-hours chart documentation</li>
                </ul>
                <button className="ml-20 mt-8 px-8 py-5 bg-white cursor-pointer text-black rounded-lg border border-black-700 hover:bg-white transition">
                    Free Consultation
                </button>

            </div>
        </div>
    );
};





export default Home;