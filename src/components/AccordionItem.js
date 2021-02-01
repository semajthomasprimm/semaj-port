import React, { useState } from 'react';

const Accordion = ({title, date, techUsed, description, repoLink, websiteLink}) => {

    const [showInfo, setShowInfo] = useState(false);

    return (
        <div 
            className="text-white flex flex-wrap overflow-hidden bg-black hover:bg-gray-700 p-8" 
            onClick={() => setShowInfo(!showInfo)}
            
        >
          <div className="w-1/2 overflow-hidden sm:w-1/3"><p className="text-lg">{title}</p></div>

          <div className="w-1/2 overflow-hidden sm:w-1/3">{date}</div>

          <div className="w-1/2 overflow-hidden sm:w-1/3">{techUsed}</div>
          {showInfo && 
          <div 
            className="my-4" 
            style={{
                transition: "max-height 200ms ease-in-out",
            }}>
              <p className="text-md my-4">{description}</p>
              {repoLink && <a className="my-8 mr-1 g-transparent hover:bg-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" href={repoLink}>GitHub Repo</a>}
              {websiteLink && <a className="my-8 g-transparent hover:bg-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" href={websiteLink}>Website</a>}
          </div>}
        </div>
    )
}

export default Accordion
