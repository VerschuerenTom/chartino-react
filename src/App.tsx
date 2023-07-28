import { useEffect, useRef } from 'react';
import './App.css';
import { ChartLine, LineChart } from "chartino"

function App() {

  const dataOne = {
    1672502400000: 5,   // September 1, 2023
    1672588800000: 10,  // September 2, 2023
    1672675200000: 13,  // September 3, 2023
    1672761600000: 9,   // September 4, 2023
    1672848000000: 4,  // September 5, 2023
    1672934400000: 4,  // September 6, 2023
    1673020800000: 1,   // September 7, 2023
    1673107200000: -4, // September 8, 2023
    1673193600000: -6,  // September 9, 2023
    1673280000000: -2,   // September 10, 2023
  };
  

  const dataTwo = {
    1672502400000: -15, // September 1, 2023
    1672588800000: 8,   // September 2, 2023
    1672675200000: 6,   // September 3, 2023
    1672761600000: -7,  // September 4, 2023
    1672848000000: 20,  // September 5, 2023
    1672934400000: -12, // September 6, 2023
    1673020800000: 4,   // September 7, 2023
    1673107200000: 10,  // September 8, 2023
    1673193600000: -18, // September 9, 2023
    1673280000000: 19,  // September 10, 2023
  };

    useEffect(() => {
      const lineChart: LineChart = new LineChart("chart");
      const chartLine: ChartLine = new ChartLine(dataOne);
      chartLine.color = "#FF0000"
      const chartLine2: ChartLine = new ChartLine(dataTwo);
      chartLine2.color = "#008000"
      lineChart.addChartLine(chartLine)
      lineChart.addChartLine(chartLine2);
      lineChart.draw()
    },[dataOne, dataTwo])


  return (
    <>
      <div id="chart" style={{height: "100vh"}}>

      </div>
    </>

  );
}

export default App;
