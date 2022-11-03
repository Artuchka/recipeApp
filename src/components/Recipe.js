import React from "react"
import IngredientList from "./IngredientList"

export default function Recipe({ data, deleteRecipeHandler, selectEdit }) {
	const { id, name, servings, cookTime, instructions, ingredients } = data
	return (
		<div className="recipe">
			<div className="header">
				<div className="recipe__field">
					<h3 className="recipe__label">Name</h3>
					<span className="recipe__property">{name}</span>
				</div>
				<div className="buttons-container">
					<button
						className="button button--primary"
						onClick={() => selectEdit(id)}
					>
						Edit
					</button>
					<button
						className="button button--danger"
						onClick={() => deleteRecipeHandler(id)}
					>
						Delete
					</button>
				</div>
			</div>
			<div className="recipe__field">
				<h3 className="recipe__label">Servings</h3>
				<span className="recipe__property">{servings}</span>
			</div>
			<div className="recipe__field">
				<h3 className="recipe__label">Cook Time</h3>
				<span className="recipe__property">{cookTime}</span>
			</div>
			<div className="">
				<h3 className="recipe__label">Instructions</h3>
				<div className="recipe__property recipe__instructions">
					{instructions}
				</div>
			</div>
			<div className="">
				<h3 className="recipe__label">Ingredients</h3>
				<div className="recipe__property recipe__ingredient">
					<IngredientList data={ingredients} />
				</div>
			</div>
		</div>
	)
}
