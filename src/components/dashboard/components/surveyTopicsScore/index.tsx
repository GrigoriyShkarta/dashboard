import { FC } from 'react';
import { SvgInfoIcon } from '../../../../assets/icons';
import chart from '../../../../assets/imgs/chart1.webp';
import s from './style.module.scss';

const SurveyTopicsScore: FC = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<h2>Survey Topics Scores</h2>
				<SvgInfoIcon />
			</div>
			<div className={s.body}>
				<img className={s.chart} src={chart} alt="cahrt" />
			</div>
		</div>
	);
};

export default SurveyTopicsScore;
