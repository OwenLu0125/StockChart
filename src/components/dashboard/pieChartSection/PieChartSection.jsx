import { PieChart, Pie, Sector, Cell } from 'recharts';
import { useState, useEffect, useRef } from 'react';
import './PieChartSection.scss';
const COLORS = ['#2BC0A9', '#E7483E'];

export const PieChartSection = ({ totalWinPoints, totalLossPoints }) => {
  const [chartSize, setChartSize] = useState(''); // 初始餅圖大小
  const chartRef = useRef(null); // 餅圖的 ref

  const data = [
    { value: totalWinPoints || 100 },
    { value: totalLossPoints || 100 },
  ];

  // 監聽視窗尺寸變化，以更新餅圖大小
  useEffect(() => {
    const handleResize = () => {
      const containerWidth = chartRef.current?.clientWidth;
      setChartSize(containerWidth * 0.7);
    };

    // 添加 resize 事件監聽
    window.addEventListener('resize', handleResize);

    // 初次載入時觸發一次
    handleResize();

    // 清除事件監聽
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <div className='chartContainer' ref={chartRef}>
        <PieChart width={chartSize} height={chartSize}>
          <Pie
            data={data}
            cx={chartSize / 2}
            cy={chartSize / 2}
            innerRadius={chartSize * 0.2}
            outerRadius={chartSize * 0.3}
            fill='#8884d8'
            paddingAngle={5}
            dataKey='value'>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </>
  );
};
export default PieChartSection;
