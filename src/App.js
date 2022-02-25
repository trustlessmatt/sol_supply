import SideBar from "./components/SideBar";
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
    <div className="App">
      {/* <Header /> */}
      <div>Hello world</div>
      <div>
        <SideBar />
      </div>

      {/* graphs */}
      <div>{renderBarChart}</div>
    </div>
  );
}

export default App;

