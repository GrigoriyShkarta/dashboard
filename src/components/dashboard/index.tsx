import { FC } from 'react';
import { RLQ, KI, MZI, SurveyTopics, SurveyTopicsScore, KPS } from './components';
import s from './style.module.scss';

const Dashboard: FC = () => {
	return (
		<div className={s.container}>
			<div className={s.top}>
				<RLQ />
				<KI />
				<MZI />
				<SurveyTopics />
			</div>
			<div className={s.bottom}>
				<SurveyTopicsScore />
				<KPS />
			</div>
		</div>
	);
};

export default Dashboard;
