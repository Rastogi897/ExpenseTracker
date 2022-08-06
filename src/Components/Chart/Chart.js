import './Chart.css';
import ChartBar from './ChartBar';

function Chart(props){

    const dataPointValue = props.dataPoints.map(data => {return data.value});
    const totalMax = Math.max(...dataPointValue);

    return (
        <div className="chart">
            {
                props.dataPoints.map((dataPoint) => (
                    <ChartBar
                        key={dataPoint.id}
                        value = {dataPoint.value}
                        max = {totalMax}
                        label = {dataPoint.label}
                    >
                    </ChartBar>
                ))
            }
        </div>
    )
}

export default Chart;