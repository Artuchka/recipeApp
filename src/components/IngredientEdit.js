import React from "react"

export default function IngredientEdit({
	data,
	deleteIngredient,
	editIngredientHandle,
}) {
	const { id, name, amount } = data
	return (
		<>
			<input
				className="ingredient-edit-input"
				defaultValue={name}
				onChange={(event) =>
					editIngredientHandle(id, "name", event.target.value)
				}
			></input>
			<input
				className="ingredient-edit-input"
				defaultValue={amount}
				onChange={(event) =>
					editIngredientHandle(id, "amount", event.target.value)
				}
			></input>
			<button
				className="button button--danger button-delete-ingredient"
				onClick={() => deleteIngredient(id)}
			>
				&times;
			</button>
		</>
	)
}
