import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
import { BarChart, Bar, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const LineChart = () => {
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
    const students = [
        { id: 1, name: "Alice", mathMarks: 85, physicsMarks: 90, chemistryMarks: 88 },
        { id: 2, name: "Bob", mathMarks: 92, physicsMarks: 85, chemistryMarks: 91 },
        { id: 3, name: "Charlie", mathMarks: 78, physicsMarks: 82, chemistryMarks: 80 },
        { id: 4, name: "David", mathMarks: 88, physicsMarks: 87, chemistryMarks: 85 },
        { id: 5, name: "Eve", mathMarks: 95, physicsMarks: 92, chemistryMarks: 94 },
        { id: 6, name: "Frank", mathMarks: 74, physicsMarks: 76, chemistryMarks: 72 },
        { id: 7, name: "Grace", mathMarks: 90, physicsMarks: 89, chemistryMarks: 91 },
        { id: 8, name: "Hannah", mathMarks: 81, physicsMarks: 83, chemistryMarks: 80 },
        { id: 9, name: "Ivy", mathMarks: 87, physicsMarks: 88, chemistryMarks: 86 },
        { id: 10, name: "Jack", mathMarks: 76, physicsMarks: 75, chemistryMarks: 78 },
    ];

    const data1 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ];

    return (
        <div>
            <LChart width={400} height={400} data={students}>
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey={'physicsMarks'} stroke='blue'></Line>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
            </LChart>

            
         <BarChart
          width={500}
          height={300}
          data={data}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>

          <PieChart width={400} height={400}>
          <Cell dataKey='value'></Cell>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data1}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          
        </PieChart>

        </div>
    );
};

export default LineChart;