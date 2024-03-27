/* eslint-disable react/prop-types */
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const PagesRead = () => {
  const readBooksData = JSON.parse(localStorage.getItem('books')) || [];

  const colors = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    'red',
    'pink',
    '#1F618D',
    '#273746',
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = props => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  if (readBooksData.length <= 0) {
    return (
      <h1 className="work-font font-bold text-4xl text-center h-[600px] content-center rounded-2xl bg-[#13131308]">
        You have no listed books
      </h1>
    );
  }

  return (
    <div className="flex justify-center bg-[#13131308] rounded-2xl py-20">
      <ResponsiveContainer width="95%" height={600}>
        <BarChart
          data={readBooksData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="bookName" />
          <YAxis />
          <Bar
            dataKey="totalPages"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: 'top' }}
          >
            {readBooksData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesRead;
