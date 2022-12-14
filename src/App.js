import "./styles/main.css"
import RecipeList from "./components/RecipeList"
import RecipeEditForm from "./components/RecipeEditForm"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

const APP_PREFIX = "recipeAppStorage"

function App() {
	const [recipes, setRecipes] = useState(getRecipes() || sampleRecipes)
	const [selectedData, setSelectedData] = useState(recipes[0])

	function addNewRecipeHandler() {
		setRecipes([
			...recipes,
			{
				id: uuidv4(),
				name: "pork",
				cookTime: "1:45",
				servings: "3",
				instructions: "do this and thath!\n2.secondly\n3.thirdly",
				ingredients: [
					{
						id: "1",
						name: "saltick sea",
						amount: "3tbs",
					},
					{
						id: "2",
						name: "pork",
						amount: "2pounds",
					},
				],
			},
		])
		saveRecipes()
	}

	function selectEdit(id) {
		setSelectedData(recipes.filter((rec) => rec.id === id)[0])
	}

	function deleteRecipeHandler(id) {
		setRecipes(recipes.filter((rec) => rec.id !== id))
		if (selectedData.id === id) {
			selectEdit(recipes[0]?.id)
		}
		saveRecipes()
	}
	function editRecipeHandler(id) {
		// openForm
	}
	async function deleteIngredient(recId, ingId) {
		const index = recipes.findIndex((rec) => rec.id === recId)
		recipes[index].ingredients = recipes[index].ingredients.filter(
			(ing) => ing.id !== ingId
		)
		setRecipes([...recipes])
		saveRecipes()
	}

	function addIngredient(recId) {
		const index = recipes.findIndex((rec) => rec.id === recId)
		recipes[index].ingredients = [
			...recipes[index].ingredients,
			{
				id: uuidv4(),
				name: "salt",
				amount: "228kg",
			},
		]
		setRecipes([...recipes])
		saveRecipes()
	}

	function editHandle(id, propName, value) {
		const index = recipes.findIndex((rec) => rec.id === id)
		recipes[index][propName] = value
		setRecipes([...recipes])
		saveRecipes()
	}

	function editIngredientHandle(id, ingId, propName, value) {
		const index = recipes.findIndex((rec) => rec.id === id)
		const ingIndex = recipes[index]["ingredients"].findIndex(
			(ing) => ingId === ing.id
		)
		recipes[index]["ingredients"][ingIndex][propName] = value
		setRecipes([...recipes])
		saveRecipes()
	}

	function saveRecipes() {
		localStorage.setItem(`${APP_PREFIX}_recipes`, JSON.stringify(recipes))
		console.log("saved", recipes)
	}
	function getRecipes() {
		const data = JSON.parse(localStorage.getItem(`${APP_PREFIX}_recipes`))
		return data
	}

	return (
		<>
			<div className="recipe-list">
				<RecipeList
					recipes={recipes}
					addNewRecipeHandler={addNewRecipeHandler}
					deleteRecipeHandler={deleteRecipeHandler}
					editRecipeHandler={editRecipeHandler}
					selectEdit={selectEdit}
				/>
			</div>

			<RecipeEditForm
				selectedData={selectedData}
				editHandle={editHandle}
				deleteIngredient={deleteIngredient}
				editIngredientHandle={editIngredientHandle}
				addIngredient={addIngredient}
			/>
		</>
	)
}

const sampleRecipes = [
	{
		id: uuidv4(),
		name: "pork",
		cookTime: "1:45",
		servings: "3",
		instructions: "do this and thath!\n2.secondly\n3.thirdly",
		ingredients: [
			{
				id: "1",
				name: "saltick sea",
				amount: "3tbs",
			},
			{
				id: "2",
				name: "pork",
				amount: "2pounds",
			},
		],
	},
	{
		id: uuidv4(),
		name: "chicken",
		cookTime: "222:45",
		servings: "1",
		instructions: "1.firsyly!\n2.secondly\n3.thirdly",
		ingredients: [
			{
				id: "1",
				name: "paprika",
				amount: "100tbs",
			},
			{
				id: "2",
				name: "chicken",
				amount: "20pounds",
			},
		],
	},
]
export default App
