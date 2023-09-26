import { cards } from './js/cards';
import styles from '../styles/MainCard.module.sass';

const MainCard = () => {
	return (
		<section className={styles.section}>
			{cards.map(card => (
				<article
					className={styles.mainCard}
					key={card.id}
				>
					<img
						src={card.img}
						alt={card.title}
					/>
					<footer>
						<p>{card.title}</p>
						<span>{card.price}</span>
					</footer>
				</article>
			))}
		</section>
	);
};
export default MainCard;
