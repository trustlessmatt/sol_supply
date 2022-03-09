import Header from "./components/Header";
import Profile from "./components/Profile";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// dummy data
const data1 = [
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

const data2 = [
  {
    name: "Held",
    amt: 20,
  },
  {
    name: "Staked",
    amt: 900,
  },
  {
    name: "Burned",
    amt: 80,
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
      <Profile />

      {/* graphs */}
      {/* options on left, breakdown on right */}
      <div>
        <div>
          options
        </div>
          <div className="breakdown">
            <ResponsiveContainer width="100%" height={400}>
              {renderBarChart}
            </ResponsiveContainer>
          </div>
      </div>
    </div>
  );
}

export default App;
