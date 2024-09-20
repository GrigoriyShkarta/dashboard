import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { SvgInfoIcon } from '../../../../assets/icons';
import s from './style.module.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const KPS: FC = () => {
	const data = {
		labels: ['KP 1', 'KP 2', 'KP 3', 'KP 4', 'KP 5', 'KP 6'],
		datasets: [
			{
				label: 'KP 1',
				data: [75, null, null, null, null, null],
				backgroundColor: '#4D5ABF',
				borderRadius: 6,
				// barThickness: 76,
			},
			{
				label: 'KP 2',
				data: [null, 65, null, null, null, 35],
				backgroundColor: '#5D78C3',
				borderRadius: 6,
				// barThickness: 76,
			},
			{
				label: 'KP 3',
				data: [null, null, 30, null, null, null],
				backgroundColor: '#6D97C7',
				borderRadius: 6,
				// barThickness: 76,
			},
			{
				label: 'KP 4',
				data: [null, null, null, 60, null, null],
				backgroundColor: '#7DB5CB',
				borderRadius: 6,
				// barThickness: 76,
			},
			{
				label: 'KP 5',
				data: [null, null, null, null, 40, null],
				backgroundColor: '#8ED4CF',
				borderRadius: 6,
				// barThickness: 30,
			},
			{
				label: 'KP 6',
				data: [null, null, null, null, null, 20],
				backgroundColor: '#A0A0A0',
				borderRadius: 6,
				// barThickness: 76,
			},
		],
	};

	const options = {
		scales: {
			y: {
				beginAtZero: true,
				max: 100,
				ticks: {
					stepSize: 25,
					callback: (value) => `${value}%`,
				},
			},
		},
		plugins: {
			legend: {
				display: true,
				position: 'bottom',
				labels: {
					boxWidth: 12,
				},
			},
		},
	};

	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<h2>KPs</h2>
				<SvgInfoIcon />
			</div>
			<div className={s.body}>
				<Bar data={data} options={{ ...options, responsive: true, maintainAspectRatio: false }} />
			</div>
		</div>
	);
};

export default KPS;
