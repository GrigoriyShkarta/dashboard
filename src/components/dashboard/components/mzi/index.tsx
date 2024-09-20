import { FC } from 'react';
import { SvgInfoIcon } from '../../../../assets/icons';
import mzi from '../../../../assets/imgs/mzi.webp';
import s from './style.module.scss';

const MZI: FC = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<h2>MZI</h2>
				<SvgInfoIcon />
			</div>
			<div className={s.body}>
				<img className={s.chart} src={mzi} alt="mzi" />
			</div>
		</div>
	);
};

export default MZI;
