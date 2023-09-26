import { Fade } from 'react-awesome-reveal';
import styles from '../styles/Header.module.sass';

const Header = () => {
	return (
		<header className={styles.header}>
			<Fade
				cascade
				triggerOnce
			>
				<div>
					<span>DAILY</span>
					<a href=''>HOME</a>
					<a href=''>SHOP</a>
					<a href=''>BLOG</a>
					<a href=''>CONTACT US</a>
				</div>
				<div>
					<button>SIGN UP</button>
					<button className={styles.loginBtn}>LOGIN</button>
				</div>
			</Fade>
		</header>
	);
};
export default Header;
