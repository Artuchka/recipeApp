import React from "react"
import Ingredient from "./Ingredient"

export default function IngredientList({ data }) {
	return data.map((ing) => <Ingredient key={ing.id} data={ing} />)
}
