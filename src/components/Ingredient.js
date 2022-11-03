import React from "react"

export default function Ingredient({ data }) {
	return (
		<>
			<div>{data.name}</div>
			<div>{data.amount}</div>
		</>
	)
}
