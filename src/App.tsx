import Dropdown from './Dropdown';
import bundles from './assets/bundles.json';
import flowers from './assets/flowers.json';
import './css/App.css';

// interface Flower {
// 	name: string;
// 	color: string;
// 	symbolism: string;
// 	origin: string;
// }
// interface DropDownProps {
// 	options: { [key: string]: Flower };
// }

function App() {
	return (
		<>
			{/* <Router>
				<NavigationBar />
			</Router> */}
			
			<body>
				<Dropdown options={Object.values(flowers).map(f => f.name)}></Dropdown>
				<Dropdown options={Object.values(bundles).map(b => b.name)}></Dropdown>
			</body>
		</>
	);
}

export default App
