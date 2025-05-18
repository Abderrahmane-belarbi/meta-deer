'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Jan',
    total: 4000,
  },
  {
    name: 'Feb',
    total: 3000,
  },
  {
    name: 'Mar',
    total: 5000,
  },
  {
    name: 'Apr',
    total: 4000,
  },
  {
    name: 'May',
    total: 7000,
  },
  {
    name: 'Jun',
    total: 5000,
  },
  {
    name: 'Jul',
    total: 6000,
  },
  {
    name: 'Aug',
    total: 8000,
  },
  {
    name: 'Sep',
    total: 7000,
  },
  {
    name: 'Oct',
    total: 9000,
  },
  {
    name: 'Nov',
    total: 8000,
  },
  {
    name: 'Dec',
    total: 10000,
  },
];

export function Overview() {
  return (
    <ResponsiveContainer width='100%' height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke='#888888'
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value: any) => `$${value}`}
        />
        <Bar dataKey='total' fill='#0ea5e9' radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
