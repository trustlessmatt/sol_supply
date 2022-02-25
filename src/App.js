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
    <div className="bg-gradient-to-tr from-sol_black to-sol_primary h-screen">
      <Header />
      {/* graphs */}
      <div className=" mx-10 sm:mx-40 md:mx-60 lg:mx-64 xl:mx-80 2xl:mx-96 2xl:px-20">
        <ResponsiveContainer width="100%" height={500}>
          {renderBarChart}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;
