const Profile = () => {
  return (
    <div className="flex justify-between mx-8 my-4 p-5">
      {/* left section */}
      <div>
        <div className="flex space-x-3">
          {/* profile pic */}
          <div>
            <img
              className=" inset-0 shadow-lg rounded-lg"
              src="https://i.imgur.com/2kWcR3L.jpeg"
              alt="degods"
              width={200}
            />
          </div>
          {/* name, desc, links */}
          <div className=" px-4 w-96 h-64 overflow-auto">
            <p className="py-2 font-bold text-3xl text-gray-200">DeGods</p>
            <p className="text-gray-200 ">
              A deflationary collection of degenerates, punks, and misfits. Gods
              of the metaverse and masters of our own universe. Integrating with
              Dust Protocol soon.
            </p>
            <div className="space-x-3 py-2 bottom-0">
              <button className="btn-primary">Website</button>
              <button className="btn-primary">Rarity</button>
              <button className="btn-primary">Community</button>
              <button className="btn-primary">Whitepaper</button>
            </div>
          </div>
        </div>
      </div>
      {/* right section */}
      <div className="justify-end space-y-1pl-6">
        {/* price action */}
        <p className=" text-right text-gray-200 ">floor price</p>
        <p className="text-right text-gray-200 font-bold text-3xl">33.3 SOL</p>
        <div className="mt-1 text-center w-14 p-1 text-sm bg-green-500 rounded-xl text-white">18.2%</div>
        </div>
    </div>
  );
};

export default Profile;
