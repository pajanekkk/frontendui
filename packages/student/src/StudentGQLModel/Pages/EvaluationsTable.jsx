import React from "react"
import { Table, Badge } from "react-bootstrap"

const getSubjectName = (ev, item) => {
    const subjectId = ev.semester?.subjectId
    if (!subjectId || !item?.program?.subjects) return "—"
    const subject = item.program.subjects.find(s => s.id === subjectId)
    return subject?.name ?? "—"
}
const getSemesterLabel = (ev) =>
    ev.semester?.order ?? ev.semester?.id ?? "—"

const gradeText = (ev) =>
    ev.classificationlevel?.name ?? "—"

const gradeBadgeVariant = (ev) => {
    if (ev.classificationlevel?.name == 'F') return "danger"
    if (ev.classificationlevel?.name == 'A' || ev.classificationlevel?.name == 'B' || ev.classificationlevel?.name == 'C' || ev.classificationlevel?.name == 'D' || ev.classificationlevel?.name == 'E') return "success"
    return "secondary"
}

export const EvaluationsTable = ({ evaluations = [], item }) => {
    const rows = (evaluations || []).slice().sort((a, b) => {
        const sa = a.semester?.order ?? 0
        const sb = b.semester?.order ?? 0
        if (sa !== sb) return sa - sb  // razeni vzestupne
        const oa = typeof a.program?.subjects?.name === "string" ? a.program?.subjects?.name : 0
        const ob = typeof b.program?.subjects?.name === "string" ? b.program?.subjects?.name : 0
        return oa - ob
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
                        <td>{getSubjectName(ev, item)}</td>
                        <td>{getSemesterLabel(ev)}</td>
                        <td>
                            <Badge bg={gradeBadgeVariant(ev)}>{gradeText(ev)}</Badge>
                        </td>
                        <td style={{
                            color: ev.classificationlevel?.name == 'F' ? 'red' : 'primary',
                        }}>{ev.order ?? "—"}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default EvaluationsTable