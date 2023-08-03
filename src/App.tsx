import { useEffect, useState } from 'react';
import './App.css';
import { ChartBrush, ChartLine, ChartZoomBrush, DEFAULT_TOOLTIP, DomainLinker, LineChart } from "chartino"
import { TooltipData } from 'chartino/dist/model/tooltip';
import { useDomainHistoryStatus } from './domain-history-hook';



function App() {

  const timestamps =[1672502400000,
    1672588800000,
    1672675200000,
    1672761600000,
    1672848000000,
    1672934400000,
    1673020800000,
    1673107200000,
    1673193600000,
    1673280000000]

    const values = [ 5,
      50,
      13,
      9,
      4,
      20,
      1,
      -4,
      -6,
      -2]

      const valuesTwo = [-1,
        10,
        6,
        -7,
        20,
        -1,
        4,
        10,
        -1,
        19]


  const [domainLinker] = useState(() => new DomainLinker())
  const {hasHistory, hasFutures} = useDomainHistoryStatus(domainLinker)

    useEffect(() => {
      const lineChart: LineChart = new LineChart("chart");
      const chartLine: ChartLine = new ChartLine(timestamps,values);
      chartLine.color = "#DDDDDD"
      const chartLine2: ChartLine = new ChartLine(timestamps,valuesTwo);
      chartLine2.isAutoScale = false;
      const tooltip = DEFAULT_TOOLTIP
      const brush = new ChartBrush(domainLinker)
      const zoomBrush = new ChartZoomBrush(domainLinker)
      tooltip.positionCallback = (x:number,y:number) => ({x: x +10, y: y +10})
      chartLine2.color = "#008000"
      lineChart
          .addChartLine(chartLine)
          .addChartLine(chartLine2)
          .setTooltip(tooltip)
          .setZoom(zoomBrush)
          .draw()

      const secondChart = new LineChart("chartTwo");
      secondChart.addChartLine(chartLine).addChartLine(chartLine2);
      secondChart.setBrush(brush).draw()
    },[])

    const getTooltipPresentation = (time: number, tooltipData:TooltipData) =>{
      return "<div></div>"
      /*const test = ReactDOMServer.renderToString(
      <p style={{backgroundColor: "white", border: "solid black"}}>
        {time}: {tooltipData[0].value}
      </p>)
      return test; */
    }

  return (
    <>
      <div id="chart" style={{height: "40vh"}}>
      </div>
      <div id="chartTwo" style={{height: "20vh"}}></div>
      {/*<div id="tooltip-div-chart"></div>*/}
      <button onClick={() => domainLinker.popDomain()} disabled={!hasHistory}>UNDO</button>
      <button onClick={() => domainLinker.unpopDomain()} disabled={!hasFutures}>REDO</button>
    </>
  );
}

export default App;
