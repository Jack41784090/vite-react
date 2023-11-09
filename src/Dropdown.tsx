import { useState } from 'react';

export interface DropDownProps {
	options: string[];
}

const Dropdown = ({ options }: DropDownProps) => {
	const [dropped, dropDown] = useState(false)
	const [selected, setSelect] = useState<string | null>(null);

	const toggle = () => {
		dropDown(!dropped);
	};
	const select = (value: string) => {
		dropDown(false);
		setSelect(value);
	}

	return (
		<div className="dropdown">
			<button onClick={toggle} className="dropdown-button">
				{selected || 'Select an Option'}
			</button>
			{dropped && (
				<ul className="dropdown-options">
					{options.map((option, index) => (
						<li key={index} onClick={() => select(option)}>
							{option}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Dropdown