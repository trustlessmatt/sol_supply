import SideBar from "./components/SideBar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
    <BarChart
      width={500}
      height={500}
      data={data}
      margin={{
        top: 50,
        right: 30,
        left: 20,
        bottom: 10,
      }}
    >
      <Bar dataKey="amt" fill="#8884d8" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
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

