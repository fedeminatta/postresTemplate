import { Slide } from 'react-awesome-reveal';
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import Info from './components/Info';
import MainCard from './components/MainCard';

const sectionStyle = {
	display: 'flex',
	flexFlow: 'row wrap',
	width: '100%',
	justifyContent: 'center',
};

function App() {
	return (
		<>
			<Header />
			<section style={sectionStyle}>
				<Slide>
					<Info />
				</Slide>
				<Slide direction='right'>
					<MainCard />
				</Slide>
			</section>
			<Cards />
			<Footer />
		</>
	);
}

export default App;
