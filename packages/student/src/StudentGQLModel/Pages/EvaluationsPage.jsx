import React from "react"
import { Card } from "react-bootstrap"
import EvaluationsTable from "./EvaluationsTable"

const EvaluationsPage = ({ item }) => {
    if (!item) return null
    const evaluations = item.evaluations || []
    return (
        <Card body>
            <h5>Průběh studia / hodnocení ve studijním programu {item?.program?.name}</h5>
            <EvaluationsTable evaluations={evaluations} item={item} />
        </Card>
    )
}

export default EvaluationsPage