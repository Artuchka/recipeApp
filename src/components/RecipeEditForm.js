import React from "react"
import IngredientEditList from "./IngredientEditList.js"

export default function RecipeEditForm({
	selectedData,
	deleteIngredient,
	editHandle,
	editIngredientHandle,
	addIngredient,
}) {
	let { id, name, servings, cookTime, instructions, ingredients } =
		selectedData

	return (
		<div className="recipe-edit-form-container">
			<form className="recipe-edit-form">
				<label className="recipe__label" htmlFor="name">
					Name
				</label>
				<input
					className="recipe__input"
					id="name"
					value={name}
					onChange={(event) =>
						editHandle(id, "name", event.target.value)
					}
				></input>

				<label className="recipe__label" htmlFor="servings">
					Servings
				</label>
				<input
					className="recipe__input"
					id="servings"
					value={servings}
					onChange={(event) =>
						editHandle(id, "servings", event.target.value)
					}
				></input>

				<label className="recipe__label" htmlFor="cooktime">
					Cook Time
				</label>
				<input
					className="recipe__input"
					id="cooktime"
					value={cookTime}
					onChange={(event) =>
						editHandle(id, "cookTime", event.target.value)
					}
				></input>

				<label className="recipe__label" htmlFor="instructions">
					Instructions
				</label>
				<textarea
					id="instructions"
					className="recipe__input recipe__instructions"
					value={instructions}
					onChange={(event) =>
						editHandle(id, "instructions", event.target.value)
					}
				></textarea>
				<div className="recipe__ingredient-edit">
					<label className="recipe__label">Ingredients</label>
					<div className="ingredient-edit-container">
						<div>Name</div>
						<div>Amount</div>
						<div></div>
						<IngredientEditList
							ingredients={ingredients}
							deleteIngredient={deleteIngredient}
							editIngredientHandle={editIngredientHandle}
							addIngredient={addIngredient}
							recId={id}
						/>
					</div>
				</div>
			</form>
		</div>
	)
}
