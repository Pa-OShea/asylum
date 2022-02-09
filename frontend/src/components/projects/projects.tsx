import React from 'react';
import classNames from 'classnames';

// className="w-full font-thin uppercase text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"
// className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"

const projectItemSelectedClass = classNames(
	'w-full',
	'font-thin',
	'uppercase',
	'text-blue-500',
	'flex',
	'items-center',
	'p-4',
	'my-2',
	'transition-colors',
	'duration-200',
	'justify-start',
	'bg-gradient-to-r',
	'from-white',
	'to-blue-100',
	'border-r-4',
	'border-blue-500',
	'dark:from-gray-700',
	'dark:to-gray-800',
	'border-r-4',
	'border-blue-500'
);

const projectItemClass = classNames(
	'w-full',
	'font-thin',
	'uppercase',
	'text-gray-500',
	'dark:text-gray-200',
	'flex',
	'items-center',
	'p-4',
	'my-2',
	'transition-colors',
	'duration-200',
	'justify-start',
	'hover:text-blue-500'
);

const Projects = () => {
	return (
		<div className="h-screen hidden lg:block shadow-lg relative w-80">
			<div className="bg-white h-full dark:bg-gray-700">
				<div className="flex items-center justify-center pt-6" />
				<nav className="mt-6">
					<a className={projectItemSelectedClass} href="#">
						<span className="mx-4 text-sm font-normal">Dashboard</span>
					</a>
					{['Asylum', 'Carbon', 'Chat system', 'Portfolio', 'E-Commerce site'].map((item, index) => {
						return (
							<a key={`project_${index}`} className={projectItemClass} href="#">
								<span className="mx-4 text-sm font-normal">{item}</span>
							</a>
						);
					})}
				</nav>
			</div>
		</div>
	);
};

export default Projects;
