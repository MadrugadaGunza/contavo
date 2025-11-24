import React, { useState } from "react";
// import "./index.css";

interface TooltipState {
    open: boolean;
    content: number | string;
    x: number;
    y: number;
}

const ChartLine: React.FC = () => {
    const [tooltip, setTooltip] = useState<TooltipState>({
        open: false,
        content: "",
        x: 0,
        y: 0,
    });

    const chartData: number[] = [112, 10, 225, 134, 101, 80, 50, 100, 200];
    const labels: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, value: number) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setTooltip({
            open: true,
            content: value,
            x: rect.left - rect.width,
            y: rect.top - rect.height / 2,
        });
    };

    const handleMouseLeave = () => {
        setTooltip({
            open: false,
            content: "",
            x: 0,
            y: 0,
        });
    };

    return (
        <div className="shadow p-6 rounded-lg bg-white">
            {/* Header */}
            <div className="md:flex md:justify-between md:items-center">
                <div>
                    <h2 className="text-xl text-gray-800 font-bold leading-tight">Product Sales</h2>
                    <p className="mb-2 text-gray-600 text-sm">Monthly Average</p>
                </div>

                <div className="mb-4">
                    <div className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 mr-2 rounded-full"></div>
                        <div className="text-sm text-gray-700">Sales</div>
                    </div>
                </div>
            </div>

            {/* Chart Container */}
            <div className="line my-8 relative">

                {/* Tooltip */}
                {tooltip.open && (
                    <div
                        className="z-10 shadow-lg rounded-lg absolute bg-white p-2 text-sm"
                        style={{
                            top: tooltip.y,
                            left: tooltip.x,
                            position: "fixed",
                        }}
                    >
                        <div className="flex items-center justify-between">
                            <div>Sales:</div>
                            <div className="font-bold ml-2">{tooltip.content}</div>
                        </div>
                    </div>
                )}

                {/* Bars */}
                <div className="flex -mx-2 items-end mb-2">
                    {chartData.map((value, i) => (
                        <div key={i} className="px-2 w-1/6">
                            <div
                                className="transition ease-in duration-200 bg-blue-600 hover:bg-blue-400 relative cursor-pointer"
                                style={{ height: value }}
                                onMouseEnter={(e) => handleMouseEnter(e, value)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="text-center absolute top-0 left-0 right-0 -mt-6 text-gray-800 text-sm">
                                    {value}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Line */}
                <div
                    className="border-t border-gray-400 mx-auto"
                    style={{
                        height: "1px",
                        width: `${100 - (1 / chartData.length) * 100 + 3}%`,
                    }}
                ></div>

                {/* Labels */}
                <div className="flex -mx-2 items-end">
                    {labels.map((label, i) => (
                        <div key={i} className="px-2 w-1/6">
                            <div className="relative">
                                <div
                                    className="absolute top-0 left-0 right-0 h-2 -mt-px bg-gray-400 mx-auto"
                                    style={{ width: "1px" }}
                                ></div>

                                <div className="text-center absolute top-0 left-0 right-0 mt-3 text-gray-700 text-sm">
                                    {label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ChartLine;
