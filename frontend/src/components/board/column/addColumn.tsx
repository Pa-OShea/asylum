import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { addNewColumn } from '../../../redux/columnSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';

const AddColumn = () => {
    const dispatch = useAppDispatch();
    const currentProject = useAppSelector(state => state.currentProject);
    const [count, setCount] = useState(true);
    const [text, setText] = useState('');

    const newColumn = () => {
        const id = `column_${uuid()}`;
        dispatch(addNewColumn({ id, title: 'Col', projectId : currentProject.currentProject }));
    };

    return (
        <>
            {false ? (
                <div className="flex justify-center p-3">
                    <a className="block p-6 rounded shadow-lg bg-white max-w-sm w-full" onClick={newColumn}>
                        <span className="material-icons">add</span>
                        <span>add new column</span>
                    </a>
                </div>
            ) : (
                <div className="relative">
                    <input
                        type="text"
                        id="add-new-col"
                        className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Add new column"
                    />
                </div>
            )}
        </>
    );
};

export default AddColumn;
