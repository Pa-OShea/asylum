import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { addNewColumn } from '../../../redux/columnSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import AddArea from '../../common/addArea';
import ColumnWrapper from './columnWrapper';

const AddColumn = () => {
	const dispatch = useAppDispatch();
	const currentProject = useAppSelector(state => state.currentProject);
	const [showAddBtn, setShowAddBtn] = useState(true);

	const newColumn = (title: string) => {
		const id = `column_${uuid()}`;
		dispatch(addNewColumn({ id, title, projectId: currentProject.currentProject }));
	};

	const toggleBtn = (event: any) => {
		event.preventDefault();
		setShowAddBtn(!showAddBtn);
	};

	return (
		<ColumnWrapper id="add_new_column">
			<div style={{ width: '12rem' }}>
				{showAddBtn ? (
					<a className="block max-w-sm w-full pl-2 mb-1 pr-2 cursor-pointer" onClick={toggleBtn}>
						<span className="material-icons align-middle text-slate-600">add</span>
						<span className="align-middle text-slate-400">Add new column</span>
					</a>
				) : (
					<AddArea placeholder='Enter column name' onAdd={newColumn} onClose={toggleBtn} />
				)}
			</div>
		</ColumnWrapper>
	);
};

export default AddColumn;
