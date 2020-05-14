import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, DataChart, Grommet, Text } from 'grommet';
import { grommet } from 'grommet/themes';

const data = [];
for (let i = 0; i < 8; i += 1) {
  const v = Math.sin(i / 2.0);
  data.push({
    date: `2020-${((i % 12) + 1).toString().padStart(2, '0')}-01`,
    percent: Math.abs(v * 100),
  });
}

const DesignerDataChart = () => (
  <Grommet theme={grommet}>
    <Box align="center" justify="start" pad="large">
      <DataChart
        data={data}
        chart={[
          {
            key: 'percent',
            type: 'bar',
            thickness: 'medium',
            color: { color: 'graph-2' },
          },
        ]}
        xAxis={{
          guide: true,
          render: i => (
            <Text>
              {new Date(data[i].date).toLocaleDateString('en-US', {
                month: 'short',
              })}
            </Text>
          ),
        }}
        yAxis={{
          guide: true,
          render: text => <Text>${text}</Text>,
        }}
        steps={[7, 4]}
        gap="small"
        pad={{ horizontal: 'medium', vertical: 'small' }}
      />
    </Box>
  </Grommet>
);

storiesOf('DataChart', module).add('Designer', () => <DesignerDataChart />);