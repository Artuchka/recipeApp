import React from "react"
import Recipe from "./Recipe"

export default function RecipeList({
	recipes,
	addNewRecipeHandler,
	deleteRecipeHandler,
	editRecipeHandler,
	selectEdit,
}) {
	return (
		<>
			{recipes.map((rec) => (
				<Recipe
					key={rec.id}
					data={rec}
					deleteRecipeHandler={deleteRecipeHandler}
					editRecipeHandler={editRecipeHandler}
					selectEdit={selectEdit}
				/>
			))}
			<div className="button-add-new-container">
				<button
					onClick={() => addNewRecipeHandler()}
					className="button button--primary button-add-new"
				>
					Add new
				</button>
			</div>
		</>
	)
}
