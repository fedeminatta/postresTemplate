import { Slide } from 'react-awesome-reveal';
import styles from '../styles/Cards.module.sass';
const Cards = () => {
	return (
		<Slide>
			<section className={styles.section}>
				<Slide
					cascade
					direction='left'
				>
					<article className={`${styles.card} ${styles.yellow}`}>
						<h3>Create your own drink</h3>
						<p>
							You can mix any flavor you want. We have a huge
							selection
						</p>
						<span>Explore</span>
					</article>
					<article className={`${styles.card} ${styles.orange}`}>
						<h3>Our blog</h3>
						<p>
							We share many desserts. We are sure you will like
							something
						</p>
						<span>Explore</span>
					</article>
				</Slide>
			</section>
		</Slide>
	);
};
export default Cards;
