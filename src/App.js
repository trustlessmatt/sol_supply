import Header from "./components/Header";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Held",
    amt: 700,
  },
  {
    name: "Staked",
    amt: 200,
  },
  {
    name: "Burned",
    amt: 100,
  },
];

function App() {
  const renderBarChart = (
    <BarChart data={data}>
      <Bar dataKey="amt" fill="#8884d8" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </BarChart>
  );

  return (
    <div className="bg-gradient-to-tr from-sol_black to-sol_primary h-screen overflow-y-auto">
      <Header />

      {/* profile section */}
      <div className="flex justify-between mx-8 my-4 p-5 border border-red-500">
        {/* left section */}
        <div>
          <div className="flex space-x-3">
            {/* profile pic */}
            <div>
              <img
              className=" inset-0 shadow-lg rounded-lg"
                src="https://i.imgur.com/2kWcR3L.jpeg"
                alt="degods"
                width={250}
              />
            </div>
            {/* name, desc, links */}
            <div className=" px-4 w-96 h-64 overflow-auto">
              <p className="py-2 font-bold text-3xl text-gray-300">DeGods</p>
              <p className="text-gray-300 ">
                A deflationary collection of degenerates, punks, and misfits.
                Gods of the metaverse and masters of our own universe.
                Integrating with Dust Protocol soon.
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
        <div>{/* price action */}</div>
        <p>Testing~!</p>
      </div>
      {/* graphs */}
      <div className="py-6 mx-10 sm:mx-40 md:mx-60 lg:mx-64 xl:mx-80 2xl:mx-96 2xl:px-20">
        <ResponsiveContainer width="100%" height={400}>
          {renderBarChart}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;
