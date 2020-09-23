import React from 'react';

import Chart, {
  ArgumentAxis,
  Label,
  Legend,
  Series,
} from 'devextreme-react/chart';

import { populationData } from './data.js';

class Charts extends React.Component {
  render() {
    return (
      <Chart
        title="World Population by Decade"
        dataSource={populationData}
        id="chart"
      >

        <ArgumentAxis tickInterval={1}>
          <Label format="decimal" />
        </ArgumentAxis>

        <Series
          type="bar"
        />

        <Legend
          visible={false}
        />

      </Chart>
    );
  }
}

export default Charts;
