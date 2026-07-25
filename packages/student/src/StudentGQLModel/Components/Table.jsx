import React from "react"
import { Link } from "../../../../_template/src/Base/Components/Link"
import { formatDateTime } from "../../../../_template/src/Base/Components/Attribute"
import { Badge, Table as BootstrapTable } from "react-bootstrap"
import { KebabMenu } from "../../../../_template/src/Base/Components/Table"
import { CreateButton } from "../Mutations/Create"
import { UpdateButton } from "../Mutations/Update"
import { DeleteButton } from "../Mutations/Delete"

// <a href={`/student/program/ProgramGQLModel/${program?.id}`}>
// </a>

/**
 * Vrátí  hodnotu pro zobrazení v tabulce.
 * @param {*} value - hodnota, kterou chceme zobrazit
 * @param {string} [fallback="—"] - výchozí hodnota, pokud je vstup prázdný
 * @returns {string} text pro zobrazení
 */
const getDisplayValue = (value, fallback = "—") => {
    if (value == null || value === "") return fallback
    if (typeof value === "object") {
        return value.fullname || value.name || value.id || fallback
    }
    return String(value)
}
/**
 * Zobrazí hodnotu na základě spárovaného id
 * @param {object|null} item - položka, kterou chceme zobrazit
 * @param {string} [fallback="—"] - text při chybějící položce
 * @returns {JSX.Element} prvek s textem nebo fallbackem
 */
const renderRelation = (item, fallback = "—") => {
    if (!item) {
        return <span className="text-muted">{fallback}</span>
    }

    return (
        <span>
            {getDisplayValue(item)}
        </span>
    )
}
/**
 * Vykreslí tabulku studentů s hlavními informacemi, akcemi a kebab menu.
 * @param {Array<object>} data - seznam studentů pro zobrazení
 * @returns {JSX.Element|null} komponenta tabulky nebo null, pokud nejsou data
 */
export const Table = ({ data = [] }) => {
    if (!data.length) return null

    return (
        <BootstrapTable striped bordered hover size="sm" className="mb-0">
            <thead>
                <tr>
                    <th>Student</th>
                    <th>Program</th>
                    <th>Stav</th>
                    <th>Semestr</th>
                    <th>Platný</th>
                    <th>Začátek</th>
                    <th>Konec</th>
                    <th style={{ width: 60 }}></th>
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <tr key={row?.id || row?.userId}>
                        <td>
                            <div className="fw-semibold">
                                <Link item={row} className="fw-semibold text-decoration-noLinkne">
                                    {row?.user?.fullname || "Bez studenta"}
                                </Link>
                            </div>
                        </td>
                        <td>
                            <a href={`/program/ProgramGQLModel/view/${row?.program?.id}`}>
                                {renderRelation(row?.program, "Bez programu")}
                            </a>
                        </td>
                        <td>
                            <Badge bg={row?.state ? "primary" : "secondary"}>
                                {getDisplayValue(row?.state, "Bez stavu")}
                            </Badge>
                        </td>
                        <td>{row?.semesterNumber ?? "—"}</td>
                        <td>
                            <Badge bg={row?.valid ? "success" : "secondary"}>
                                {row?.valid ? "Ano" : "Ne"}
                            </Badge>
                        </td>
                        <td>{row?.startdate ? formatDateTime(row.startdate) : "—"}</td>
                        <td>{row?.enddate ? formatDateTime(row.enddate) : "—"}</td>
                        <td>
                            <KebabMenu
                                actions={[
                                    {
                                        children: (
                                            <CreateButton
                                                className="btn btn-sm btn-outline-secondary border-0 text-start w-100"
                                                item={{}}
                                            >
                                                Vytvořit
                                            </CreateButton>
                                        ),
                                    },
                                    {
                                        children: (
                                            <UpdateButton
                                                className="btn btn-sm btn-outline-secondary border-0 text-start w-100"
                                                item={row}
                                            >
                                                Upravit
                                            </UpdateButton>
                                        ),
                                    },
                                    {
                                        children: (
                                            <DeleteButton
                                                className="btn btn-sm btn-outline-danger border-0 text-start w-100"
                                                item={row}
                                            >
                                                Smazat
                                            </DeleteButton>
                                        ),
                                    },
                                ]}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </BootstrapTable >
    )
}