import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { SvgInfoIcon } from '../../../../assets/icons';
import s from './style.module.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SurveyTopicsScore: FC = () => {
	const data = {
		labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
		datasets: [
			{
				data: [4.5, 2, 5, 1, 5, 3.5, 4.2, 1, 1.8, 2.3, 0.5, 5],
				backgroundColor: '#F18C5C',
				borderColor: '#F18C5C',
				borderWidth: 1,
				borderRadius: 6,
				barThickness: 15,
			},
		],
	};

	const options = {
		scales: {
			y: {
				beginAtZero: true,
				min: 1,
				max: 5,
				ticks: {
					stepSize: 1,
				},
			},
			x: {
				type: 'category',
				ticks: {
					autoSkip: false,
				},
				categoryPercentage: 0.8,
				barPercentage: 0.9,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
	};

	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<h2>Survey Topics Scores</h2>
				<SvgInfoIcon />
			</div>
			<div className={s.body}>
				<Bar data={data} options={{ ...options, responsive: true, maintainAspectRatio: false }} />
			</div>
		</div>
	);
};

export default SurveyTopicsScore;
