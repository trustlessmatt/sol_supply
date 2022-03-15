import { useState, useEffect } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import ChartOptions from "./components/ChartOptions";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import axios from "axios";

import { ResponsiveBar } from '@nivo/bar';

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

const data3 = [
  {
    "country": "AD",
    "hot dog": 148,
    "hot dogColor": "hsl(29, 70%, 50%)",
    "burger": 23,
    "burgerColor": "hsl(41, 70%, 50%)",
    "sandwich": 22,
    "sandwichColor": "hsl(261, 70%, 50%)",
    "kebab": 130,
    "kebabColor": "hsl(61, 70%, 50%)",
    "fries": 70,
    "friesColor": "hsl(231, 70%, 50%)",
    "donut": 106,
    "donutColor": "hsl(352, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 49,
    "hot dogColor": "hsl(58, 70%, 50%)",
    "burger": 163,
    "burgerColor": "hsl(76, 70%, 50%)",
    "sandwich": 106,
    "sandwichColor": "hsl(196, 70%, 50%)",
    "kebab": 183,
    "kebabColor": "hsl(202, 70%, 50%)",
    "fries": 176,
    "friesColor": "hsl(285, 70%, 50%)",
    "donut": 62,
    "donutColor": "hsl(248, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 28,
    "hot dogColor": "hsl(315, 70%, 50%)",
    "burger": 146,
    "burgerColor": "hsl(31, 70%, 50%)",
    "sandwich": 193,
    "sandwichColor": "hsl(326, 70%, 50%)",
    "kebab": 136,
    "kebabColor": "hsl(110, 70%, 50%)",
    "fries": 17,
    "friesColor": "hsl(144, 70%, 50%)",
    "donut": 23,
    "donutColor": "hsl(7, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 74,
    "hot dogColor": "hsl(330, 70%, 50%)",
    "burger": 41,
    "burgerColor": "hsl(29, 70%, 50%)",
    "sandwich": 78,
    "sandwichColor": "hsl(233, 70%, 50%)",
    "kebab": 77,
    "kebabColor": "hsl(186, 70%, 50%)",
    "fries": 90,
    "friesColor": "hsl(262, 70%, 50%)",
    "donut": 83,
    "donutColor": "hsl(80, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 194,
    "hot dogColor": "hsl(316, 70%, 50%)",
    "burger": 123,
    "burgerColor": "hsl(28, 70%, 50%)",
    "sandwich": 64,
    "sandwichColor": "hsl(26, 70%, 50%)",
    "kebab": 21,
    "kebabColor": "hsl(246, 70%, 50%)",
    "fries": 147,
    "friesColor": "hsl(76, 70%, 50%)",
    "donut": 108,
    "donutColor": "hsl(319, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 148,
    "hot dogColor": "hsl(20, 70%, 50%)",
    "burger": 152,
    "burgerColor": "hsl(220, 70%, 50%)",
    "sandwich": 58,
    "sandwichColor": "hsl(16, 70%, 50%)",
    "kebab": 4,
    "kebabColor": "hsl(255, 70%, 50%)",
    "fries": 76,
    "friesColor": "hsl(135, 70%, 50%)",
    "donut": 186,
    "donutColor": "hsl(203, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 197,
    "hot dogColor": "hsl(110, 70%, 50%)",
    "burger": 62,
    "burgerColor": "hsl(287, 70%, 50%)",
    "sandwich": 51,
    "sandwichColor": "hsl(198, 70%, 50%)",
    "kebab": 87,
    "kebabColor": "hsl(179, 70%, 50%)",
    "fries": 197,
    "friesColor": "hsl(204, 70%, 50%)",
    "donut": 84,
    "donutColor": "hsl(5, 70%, 50%)"
  }
]

const apiURL = "https://api-mainnet.magiceden.dev/v2/collections/degods";

function App() {
  const [graphData, setGraphData] = useState(data1);
  const [projectData, setProjectData] = useState(null);

  // simple function that swaps between two static datasets
  const graphChangeHandler = () => {
    if (graphData === data1) {
      setGraphData(data2);
    } else {
      setGraphData(data1);
    }
  };

  // // render method for bar chart (variable data source)
  // const renderBarChart = (
  //   <BarChart
  //     width={600}
  //     height={300}
  //     data={graphData}
  //     margin={{
  //       top: 20,
  //       right: 60,
  //       left: 30,
  //       bottom: 5,
  //     }}
  //   >
  //     <Bar dataKey="amt" fill="#8884d8" />
  //     <XAxis dataKey="name" />
  //     <YAxis />
  //   </BarChart>
  // );

  // const MyResponsiveBar = ({ data3 /* see data tab */ }) => (
  //   <ResponsiveBar
  //       data={data3}
  //       keys={[
  //           'hot dog',
  //           'burger',
  //           'sandwich',
  //           'kebab',
  //           'fries',
  //           'donut'
  //       ]}
  //       indexBy="country"
  //       margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
  //       padding={0.3}
  //       valueScale={{ type: 'linear' }}
  //       indexScale={{ type: 'band', round: true }}
  //       colors={{ scheme: 'nivo' }}
  //       defs={[
  //           {
  //               id: 'dots',
  //               type: 'patternDots',
  //               background: 'inherit',
  //               color: '#38bcb2',
  //               size: 4,
  //               padding: 1,
  //               stagger: true
  //           },
  //           {
  //               id: 'lines',
  //               type: 'patternLines',
  //               background: 'inherit',
  //               color: '#eed312',
  //               rotation: -45,
  //               lineWidth: 6,
  //               spacing: 10
  //           }
  //       ]}
  //       fill={[
  //           {
  //               match: {
  //                   id: 'fries'
  //               },
  //               id: 'dots'
  //           },
  //           {
  //               match: {
  //                   id: 'sandwich'
  //               },
  //               id: 'lines'
  //           }
  //       ]}
  //       borderColor={{
  //           from: 'color',
  //           modifiers: [
  //               [
  //                   'darker',
  //                   1.6
  //               ]
  //           ]
  //       }}
  //       axisTop={null}
  //       axisRight={null}
  //       axisBottom={{
  //           tickSize: 5,
  //           tickPadding: 5,
  //           tickRotation: 0,
  //           legend: 'country',
  //           legendPosition: 'middle',
  //           legendOffset: 32
  //       }}
  //       axisLeft={{
  //           tickSize: 5,
  //           tickPadding: 5,
  //           tickRotation: 0,
  //           legend: 'food',
  //           legendPosition: 'middle',
  //           legendOffset: -40
  //       }}
  //       labelSkipWidth={12}
  //       labelSkipHeight={12}
  //       labelTextColor={{
  //           from: 'color',
  //           modifiers: [
  //               [
  //                   'darker',
  //                   1.6
  //               ]
  //           ]
  //       }}
  //       legends={[
  //           {
  //               dataFrom: 'keys',
  //               anchor: 'bottom-right',
  //               direction: 'column',
  //               justify: false,
  //               translateX: 120,
  //               translateY: 0,
  //               itemsSpacing: 2,
  //               itemWidth: 100,
  //               itemHeight: 20,
  //               itemDirection: 'left-to-right',
  //               itemOpacity: 0.85,
  //               symbolSize: 20,
  //               effects: [
  //                   {
  //                       on: 'hover',
  //                       style: {
  //                           itemOpacity: 1
  //                       }
  //                   }
  //               ]
  //           }
  //       ]}
  //       role="application"
  //       ariaLabel="Nivo bar chart demo"
  //       barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
  //   />
  // )

  // refresh the DOM whenever graphData changes (log for debugging)
  useEffect(() => {
    console.log("graph data is: ", graphData);
  }, [graphData]);

  useEffect(() => {
    // fetch data function
    const fetchProfile = async () => {
      const response = await axios.get(apiURL);
      setProjectData(response.data); 
      console.log(response.data);
    }

    fetchProfile();
    
  },[]);

  return (
    <div className="bg-gradient-to-tr from-sol_black to-sol_primary h-screen overflow-y-auto">
      <Header />
      <Profile />

      <div className="flex items-center py-4">
        {/* options on left */}
        <div className="mx-12 block">
          <ChartOptions
            id="1"
            title="MINTED"
            description="All NFTs minted at the collection's genesis date."
            active={true}
          />
          <ChartOptions
            id="2"
            title="STAKED"
            description="All NFTs currently staked with known staking mechanisms."
            active={false}
          />
          <ChartOptions
            id="3"
            title="BURNED"
            description="All NFTs removed from total supply via burning mechanisms."
            active={false}
          />
          <ChartOptions
            id="4"
            title="HELD"
            description="All NFTs held in wallets."
            active={false}
          />
        </div>
        {/* chart on right */}
        {/* <div className="breakdown ml-auto w-[800px] h-[400px]"><MyResponsiveBar /></div> */}
      </div>
    </div>
  );
}

export default App;
