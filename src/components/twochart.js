import React from 'react';

import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';

import Chart, {
  ArgumentAxis,
  Grid,
  Series,
  Legend,
  Size,
  Tooltip,
  LoadingIndicator
} from 'devextreme-react/chart';


class TwoChart extends React.Component {
  constructor(props) {
    super(props);
    this.chartDataSource = new DataSource({
      store: {
        type: 'odata',
        url: 'https://js.devexpress.com/Demos/WidgetsGallery/odata/WeatherItems'
      },
      postProcess: function(results) {
        return results[0].DayItems;
      },
      expand: 'DayItems',
      filter: ['Id', '=', 1],
      paginate: false
    });

    this.onValueChanged = (data) => {
      this.chartDataSource.filter(['Id', '=', data.value]);
      this.chartDataSource.load();
    };
  }

  render() {
    return (
        <div className="two-chart">
      <div id="chart-demo">
        <Chart
          title="1.823"
          dataSource={this.chartDataSource}>
          <Size height={400} />
       
          <ArgumentAxis type="discrete">
            <Grid visible={true} opacity={0.5} />
          </ArgumentAxis>
         
          <Series
            argumentField="Number"
            valueField="Temperature"
            type="spline"
          />
          <Legend visible={false} />
          <Tooltip
            enabled={true}
            customizeTooltip={customizeTooltip} />
          <LoadingIndicator enabled={true} />
        </Chart>

      
      </div>
      </div>
    );
  }

  customizeLabel(e) {
    return `${e.valueText}${'&#176C'}`;
  }
}

function customizeTooltip(arg) {
  return {
    text: `${arg.valueText}${'&#176C'}`
  };
}

export default TwoChart;
