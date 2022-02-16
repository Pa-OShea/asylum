import { useState } from 'react';

type Props = {
    placeholder: string;
    onAdd: (title: string) => void;
    onClose: (event: any) => void;
};
const AddArea = ({ placeholder, onAdd, onClose }: Props) => {
    const [text, setText] = useState('');

    const clickAdd = (event: any) => {
        onAdd(text);
        setText("")
        onClose(event)

    };

    return (
        <div style={{ transition: 'all 0.6s ease' }} className="flex flex-col w-full">
            <input
                type="text"
                className="block px-3 py-1.5 text-base 
                font-normal text-gray-700 bg-white bg-clip-padding border 
                border-solid border-gray-300 rounded transition ease-in-out 
                m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder={placeholder}
                onKeyPress={(e) => {
                    if(e.key === 'Enter') {
                        clickAdd(e)
                    }
                }}
                onChange={event => setText(event.target.value)}
            />
            <div className="flex-row">
                <div className="float-right">
                    <span
                        className="material-icons cursor-pointer p-0.5 align-middle rounded-full mr-2 text-green-600 hover:bg-slate-300"
                        onClick={clickAdd}
                    >
                        check
                    </span>
                    <span className="material-icons cursor-pointer p-0.5 align-middle rounded-full text-red-600 hover:bg-slate-300" onClick={onClose}>
                        close
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AddArea;
