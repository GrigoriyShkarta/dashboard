import { FC } from 'react';
import { SvgInfoIcon } from '../../../../assets/icons';
import chart from '../../../../assets/imgs/Chart Managers.webp';
import s from './style.module.scss';

const KI: FC = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<h2>KI</h2>
				<SvgInfoIcon />
			</div>
			<div className={s.body}>
				<img className={s.chart} src={chart} alt="chart" />
			</div>
		</div>
	);
};

export default KI;
