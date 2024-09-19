import { FC } from 'react';
import { SvgEmployeesIcon, SvgInfoIcon } from '../../../../assets/icons';
import waves from '../../../../assets/imgs/waves.png';
import s from './style.module.scss';

const RLQ: FC = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<h2>RLQ</h2>
				<SvgInfoIcon />
			</div>
			<div className={s.body}>
				<img className={s.waves} src={waves} alt="waves" />
				<div className={s.footer}>
					<p className={s.footer__value}>
						59.47<span>%</span>
					</p>
					<div className={s.footer__info}>
						<SvgEmployeesIcon />
						<span className={s.footer__info_value}>56 884</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RLQ;
