import Dropdown from './Dropdown';
import reactLogo from './assets/react.svg';
import './css/App.css';

function App() {

	return (
		<>
			<div>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<Dropdown options={['one', 'two', 'three']}></Dropdown>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default App
