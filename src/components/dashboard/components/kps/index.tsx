import { FC } from 'react';
import { SvgInfoIcon } from '../../../../assets/icons';
import chart from '../../../../assets/imgs/chart2.webp';
import s from './style.module.scss';

const KPS: FC = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<h2>KPs</h2>
				<SvgInfoIcon />
			</div>
			<div className={s.body}>
				<img className={s.chart} src={chart} alt="chart" />
			</div>
		</div>
	);
};

export default KPS;
