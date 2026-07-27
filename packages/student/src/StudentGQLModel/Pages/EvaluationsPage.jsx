import React from "react"
import { Card } from "react-bootstrap"
import EvaluationsTable from "./EvaluationsTable"

/**
 * Obálka přehledu hodnocení pro detail studenta.
 *
 * Sama nic nepočítá — jen vytáhne hodnocení z načteného studenta, přidá
 * nadpis s odkazem na studijní program a zbytek předá EvaluationsTable.
 *
 * @param {object} item - student načtený fragmentem Large
 * @returns {JSX.Element|null}
 */
const EvaluationsPage = ({ item }) => {
    // Data se načítají asynchronně — při prvním vykreslení student ještě není k dispozici.
    if (!item) return null
    const evaluations = item.evaluations || []
    return (
        <Card body>
            <h5>
                Průběh studia / hodnocení ve studijním programu <a href={`/program/ProgramGQLModel/view/${item?.program?.id}`}>{item?.program?.name}</a>
            </h5>
            <EvaluationsTable evaluations={evaluations} item={item} />
        </Card>
    )
}

export default EvaluationsPage