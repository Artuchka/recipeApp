import React from "react"
import IngredientEdit from "./IngredientEdit.js"

export default function IngredientEditList(props) {
	const {
		ingredients,
		deleteIngredient,
		editIngredientHandle,
		recId,
		addIngredient,
	} = props
	console.log(ingredients)
	return (
		<>
			{ingredients.map((ing) => (
				<IngredientEdit
					key={ing.id}
					data={ing}
					deleteIngredient={(ingId) => deleteIngredient(recId, ingId)}
					editIngredientHandle={(ingId, propName, value) =>
						editIngredientHandle(recId, ingId, propName, value)
					}
				/>
			))}

			<button
				onClick={(event) => {
					event.preventDefault()
					addIngredient(recId)
				}}
				className="button-add-ingredient button button--primary"
			>
				Add ingredient
			</button>
		</>
	)
}
