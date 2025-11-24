import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer, } from 'recharts';

// Tipagem dos dados
export interface PieDataItem {
    name: string;
    value: number;
}

interface PieChartCardProps {
    data?: PieDataItem[];
}

const ChartPie = ({ data }: PieChartCardProps) => {
    const sampleData: PieDataItem[] = [
        { name: 'Vermelho', value: 400 },
        { name: 'Azul', value: 300 },
        { name: 'Amarelo', value: 300 },
        { name: 'Verde', value: 200 },
    ];

    const chartData = data && data.length ? data : sampleData;

    const COLORS = ['#EF4444', '#3B82F6', '#F59E0B', '#10B981', '#8B5CF6'];

    return (
        <div className="w-full rounded-lg shadow text-dark-500 p-6">
            <div className="flex items-center justify-between mb-2 text-gray-800">
                <h3 className="text-lg font-semibold text-gray-800">Distribuição (Pie)</h3>
                <span className="text-sm text-gray-500">Atualizado</span>
            </div>

            <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={90}
                            innerRadius={40}
                            label={(entry: PieDataItem) => `${entry.name} (${entry.value})`}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value: number) => new Intl.NumberFormat().format(value)} />
                        <Legend verticalAlign="bottom" height={36} />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
export default ChartPie