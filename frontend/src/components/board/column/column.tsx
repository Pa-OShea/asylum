const Column = (props: { children: JSX.Element[] | JSX.Element }) => {
    return (
        <div className="flex justify-center p-3">
            <div className="block p-6 rounded-lg shadow-lg bg-gray-500 max-w-sm">
                <h4 className="text-white text-xl leading-tight font-medium mb-2">Column title</h4>
                {props.children}
                <button type="button">Button</button>
            </div>
        </div>
    );
};

export default Column;
