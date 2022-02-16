import { ReactElement } from 'react';

type Props = {
	id: string;
	children: any;
};
const ColumnWrapper = (props: Props) => {
	return (
		<div id={props.id} className="flex flex-col p-3 max-w-sm min-w">
			<div style={{ backgroundColor: '#f4f5f7' }} className="block p-2 rounded-sm">
				{props.children}
			</div>
		</div>
	);
};

export default ColumnWrapper;
