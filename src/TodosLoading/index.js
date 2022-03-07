import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
	return (
		<div className="LoadingTodo-container">
			<span className="LoadingTodo-completeIcon"></span>
			<p className="LoadingTodo-text">Estamos Cargando, no desesperes...</p>;
		</div>
	);
}

export { TodosLoading };