import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie, Cell } from 'recharts';


const Statistics = () => {

    const [donatedLength, setDonatedLength] = useState(0);
    const [totalDonation, setTotalDonation] = useState(0);
    const [yourDonation, setYourDonation] = useState(0);

    const allDonations = useLoaderData();
    // console.log(allDonations.length)

    const donated = JSON.parse(localStorage.getItem('donation'))

    useEffect(() => {
        if (donated) {
            setDonatedLength(donated.length);

            console.log('donatedLength', donatedLength);

            const total = (allDonations.length);

            console.log('total donation length', total)

            let yourPercentage = (donatedLength / total)*100;
            yourPercentage = parseFloat(yourPercentage.toFixed(2));

            const totalPercentage = 100 - yourPercentage;

            console.log('yourPercentage', yourPercentage, 'totalPercentage', totalPercentage)

            setYourDonation(yourPercentage)
            setTotalDonation(totalPercentage)
        }

    }, [donated, donatedLength, allDonations.length, totalDonation])

    const data = [
        { name: 'Group A', value: totalDonation },
        { name: 'Group B', value: yourDonation },
    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(2)}%`}
            </text>
        );
    };

    return (
        <div>
            <div className="flex justify-center items-center h-1/2">
                <PieChart width={400} height={400}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        paddingAngle={0.5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            {/* Legend */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-10 mt-0 justify-center items-center">
                <div className="flex items-center gap-3 text-sm md:text-base">
                    <span>Total Donation</span>
                    <div className="w-14 lg:w-20 h-2 lg:h-3 rounded-sm bg-[#FF444A] mr-2"></div>
                </div>
                <div className="flex items-center gap-3 text-sm md:text-base">
                    <span>Your Donation</span>
                    <div className="w-14 lg:w-20 h-2 lg:h-3 rounded-sm bg-[#00C49F] mr-2"></div>
                </div>
            </div>

        </div>
    );
};

export default Statistics;