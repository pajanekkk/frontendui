import React from "react"
import { Accordion, Badge, Card, Row, Col, Table } from "react-bootstrap"

/**
 * Vrátí název předmětu pro hodnocení podle ID předmětu v semestru
 * @param {object} ev - hodnocení studenta
 * @param {object} item - student, program s predmety
 * @returns {string}
 */
const getSubjectName = (ev, item) => {
    const subjectId = ev.semester?.subjectId
    if (!subjectId || !item?.program?.subjects) return "—"
    const subject = item.program.subjects.find((s) => s.id === subjectId)
    return subject?.name ?? "—"
}
/**
 * Vrátí text známky pro hodnocení.
 * @param {object} ev - hodnocení studenta
 * @returns {string} text známky nebo pomlčka
 */
const gradeText = (ev) =>
    ev.classificationlevel?.name ?? "—"

/**
 * Vrátí barvu Badge podle typu známky.
 * @param {object} ev - hodnocení studenta
 * @returns {string} název varianty badge
 */
const gradeBadgeVariant = (ev) => {
    if (ev.classificationlevel?.name == "F") return "danger"
    if (["A", "B", "C", "D", "E"].includes(ev.classificationlevel?.name)) return "success"
    return "secondary"
}

/**
 * Seskupí hodnocení podle semestru.
 * @param {Array<object>} evaluations - seznam hodnocení studenta
 * @returns {Array<object>} pole skupin se semestry a jejich položkami
 */
const groupBySemester = (evaluations = []) => {
    const groups = evaluations.reduce((acc, ev) => {
        const semOrder = ev.semester?.order ?? ev.semester?.id ?? 0
        const key = String(semOrder)
        if (!acc[key]) acc[key] = { order: semOrder, values: [] }
        acc[key].values.push(ev)
        return acc
    }, {})

    return Object.values(groups).sort((a, b) => a.order - b.order)
}

/**
 * Vykreslí rozbalovací tabulku s předměty programu.
 * @param {Array<object>} subjects - seznam předmětů programu
 * @returns {JSX.Element|null} komponenta s rozbalovací tabulkou
 */
const ProgramSubjectsTable = ({ subjects = [] }) => {
    if (!subjects.length) return null

    return (
        <Accordion className="mb-3">
            <Accordion.Item eventKey="program-subjects">
                <Accordion.Header>Předměty programu</Accordion.Header>
                <Accordion.Body className="p-0">
                    <Table borderless size="sm" className="mb-0">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Název předmětu</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subjects.map((subject, index) => (
                                <tr key={subject.id ?? `${subject.name}-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{subject.name ?? "—"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

/**
 * Vykreslí přehled hodnocení studenta jako karty seskupené podle semestru.
 * @param {Array<object>} evaluations - seznam hodnocení studenta
 * @param {object} item - student spolu s jeho programem
 * @returns {JSX.Element} komponenta s kartami semestrů
 */
export const EvaluationsTable = ({ evaluations = [], item }) => {
    const groups = groupBySemester(evaluations || [])
    const programSubjects = item?.program?.subjects ?? []

    if (!groups.length && !programSubjects.length) return <div>Žádné hodnocení k zobrazení</div>

    return (
        <>
            <ProgramSubjectsTable subjects={programSubjects} />

            {groups.length ? (
                <Row xs={1} md={2} className="g-3">
                    {groups.map((group) => (
                        <Col key={`semester-${group.order}`}>
                            <Card className="h-100 shadow-sm border-dark">
                                <Card.Header className="bg-white border-bottom">
                                    <h5 className="mb-0">Semestr {group.order}</h5>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <Table borderless size="sm" className="mb-0">
                                        <thead>
                                            <tr>
                                                <th>Předmět</th>
                                                <th>Známka</th>
                                                <th>Pokus</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {group.values.map((ev) => (
                                                <tr key={ev.id || `${ev.semester?.id}-${ev.order || 0}`}>
                                                    <td>{getSubjectName(ev, item)}</td>
                                                    <td>
                                                        <Badge bg={gradeBadgeVariant(ev)} pill>
                                                            {gradeText(ev)}
                                                        </Badge>
                                                    </td>
                                                    <td
                                                        className="text-center"
                                                        style={{
                                                            color: ev.classificationlevel?.name == "F" ? "red" : "inherit",
                                                        }}
                                                    >
                                                        {ev.order ?? "—"}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <div className="text-muted">Žádné hodnocení k zobrazení</div>
            )}
        </>
    )
}

export default EvaluationsTable