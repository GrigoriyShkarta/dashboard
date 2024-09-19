import { FC } from 'react';
import s from './style.module.scss';
import { RLQ } from './components';

const Dashboard: FC = () => {
	return (
		<div className={s.container}>
			<div className={s.top}>
				<RLQ />
			</div>
		</div>
	);
};

export default Dashboard;
