import { useState, useEffect } from 'react';
import ExternalLink from "./assets/ExternalLink";

const Profile = () => {

  const [pctChange, setPctChange] = useState(66);
  const [isPositive, setIsPositive] = useState(true);

  // function to assess value of % change and update bg color
  const pctChangeHandler = () => {
    if (pctChange < 0) {
      setIsPositive(false);
    } else {
      setIsPositive(true);
    }
  }

  useEffect(() => {
    pctChangeHandler();
  });

  return (
    <div>
      <div className="flex mx-24 mb-4 pt-5 px-5">
        {/* left section */}
        <div>
          <div className="flex space-x-3">
            {/* profile pic */}
            <div>
              <img
                className="inset-0 shadow-lg"
                src="https://i.imgur.com/2kWcR3L.jpeg"
                alt="degods"
                width={256}
              />
            </div>
            {/* name, desc, links */}
            <div className="px-4 w-[500px] h-64">
              <p className="font-bold text-[40px] text-gray-200">DeGods</p>
              <div className=" h-40 overflow-auto">
                <p className="text-gray-200">
                  A deflationary collection of degenerates, punks, and misfits.
                  Gods of the metaverse and masters of our own universe.
                  Integrating with Dust Protocol soon.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className="space-y-1 ml-auto">
          {/* price action */}
          <p className="text-right text-gray-200 ">floor price</p>
          <p className="text-right text-gray-200 font-bold text-3xl">
            50 SOL
          </p>
          <div>
            <div className={"ml-auto mt-1 text-center w-min px-3 py-1 text-sm rounded-xl text-white " + (isPositive ? 'bg-green-500' : 'bg-red-500')}>
              {pctChange + '%'}
            </div>
          </div>
        </div>
      </div>

      {/* links below */}
      <div className="flex mx-24 my-2 space-x-3">
        <div className="btn-primary">
          Website <ExternalLink />
        </div>
        <button className="btn-primary">Rarity</button>
        <button className="btn-primary">Community</button>
        <button className="btn-primary">Whitepaper</button>
      </div>
    </div>
  );
};

export default Profile;
