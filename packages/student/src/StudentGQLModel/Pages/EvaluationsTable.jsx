import React from "react"
import { Table, Badge } from "react-bootstrap"

const getSubjectName = (ev) =>
    ev.program?.subjects?.name
    || ev.program?.subjects?.name
    || ev.semester?.subjectId
    || "—"

const getSemesterLabel = (ev) =>
    ev.semester?.semesterNumber ?? ev.semester?.label ?? ev.semester?.id ?? "—"

const gradeText = (ev) =>
    ev.grade ?? ev.classificationlevel?.name ?? "—"

const gradeBadgeVariant = (ev) => {
    if (ev.passed === true) return "success"
    if (ev.passed === false) return "danger"
    return "secondary"
}

export const EvaluationsTable = ({ evaluations = [] }) => {
    const rows = (evaluations || []).slice().sort((a, b) => {
        const sa = a.semester?.semesterNumber ?? 0
        const sb = b.semester?.semesterNumber ?? 0
        if (sa !== sb) return sb - sa
        const oa = typeof a.order === "number" ? a.order : 0
        const ob = typeof b.order === "number" ? b.order : 0
        return ob - oa
    })

    if (!rows.length) return <div>Žádné hodnocení k zobrazení</div>

    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Předmět</th>
                    <th>Semestr</th>
                    <th>Známka</th>
                    <th>Pokus</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((ev) => (
                    <tr key={ev.id || `${ev.semester?.id}-${ev.order || 0}-${Math.random()}`}>
                        <td>{getSubjectName(ev)}</td>
                        <td>{getSemesterLabel(ev)}</td>
                        <td>
                            <Badge bg={gradeBadgeVariant(ev)}>{gradeText(ev)}</Badge>
                        </td>
                        <td>{ev.order ?? "—"}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default EvaluationsTable