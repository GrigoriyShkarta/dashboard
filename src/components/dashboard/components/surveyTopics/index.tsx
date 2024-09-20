import { FC } from 'react';
import s from './style.module.scss';

const SurveyTopics: FC = () => {
	const topicArray = [
		'Pulvinar iaculis placerat vitae dui',
		'Massa morbi mattis lectus ornare',
		'Diam sem vestibulum purus morbi',
		'Diam sem vestibulum purus morbi',
		'Massa morbi mattis lectus ornare',
	];

	return (
		<div className={s.wrapper}>
			<div className={s.header}>
				<h2>Survey Topics</h2>
			</div>
			<div className={s.body}>
				{topicArray.map((topic, idx) => (
					<div className={s.topic} key={idx}>
						<p className={s.topic__text}>{String.fromCharCode(65 + idx)}.</p>
						<p className={s.topic__text}>{topic}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default SurveyTopics;
