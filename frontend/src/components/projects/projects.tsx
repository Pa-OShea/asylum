import React from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Project } from '../../redux/projectSlice';
import { updateCurrentProject } from '../../redux/currentProjectSlice';

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
	const [projects, currentProject] = useAppSelector(state => [state.projects, state.currentProject]);
	const dispatch = useAppDispatch();

	const switchProject = (projectId: string) => {
		dispatch(updateCurrentProject(projectId));
	};

	const getProject = (project: Project, index: number) => {
		let classToUse = projectItemClass;
		if (currentProject.currentProject === project.id) classToUse = projectItemSelectedClass;

		return (
			<a id={project.id} key={`project_${index}`} className={classToUse} href="#" onClick={() => switchProject(project.id)}>
				<span className="mx-4 text-sm font-normal">{project.title}</span>
			</a>
		);
	};

	return (
		<div className="h-full hidden lg:block shadow-lg relative w-80">
			<div className="bg-white h-full dark:bg-gray-700">
				<div className="flex items-center justify-center pt-6" />
				<nav className="mt-6">
					{projects.map((project, index) => getProject(project, index))}{' '}

					<div className="absolute bottom-0 my-10 w-full ">
						<a id="add_new_project" className={projectItemClass} href="#" onClick={() => switchProject(projects[0].id)}>
							<span className="mx-4 text-sm font-normal">Add new project</span>
							<span className="material-icons">add</span>
						</a>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Projects;
