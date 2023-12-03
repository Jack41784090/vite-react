import { useEffect, useState } from 'react';

export interface DropDownProps {
	options: string[];
}

const Dropdown = ({ options }: DropDownProps) => {
	const [dropped, setDropdown] = useState(false)
	const [selected, setSelect] = useState<string | null>(null);

	const toggle = () => {
		setDropdown(!dropped);
	};
	const select = (value: string) => {
		setDropdown(false);
		setSelect(value);
	}

	const handleClickOutside = (event: MouseEvent) => {
		console.log(event)
		setDropdown(false)
		// if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
		//   setDropdown(false);
		// }
	};

	useEffect(() => {
		document.addEventListener('mousedown', event => {
			handleClickOutside(event)
		});
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className="dropdown">
			<button onClick={toggle} className="dropdown-button">
				{selected || 'Select an Option'}
			</button>
			<ul className={dropped ?
				"dropdown-options" :
				"dropdown-options-hidden"}>
				{options.map((option, index) => (
					<li key={index} onClick={() => dropped && select(option)}>
						{option}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Dropdown