import { Col } from "../../../../_template/src/Base/Components/Col"
import { Row } from "../../../../_template/src/Base/Components/Row"
import { Link } from "./Link"
import { Attribute, formatDateTime } from "../../../../_template/src/Base"
/**
 * A component that displays medium-level content for an template entity.
 *
 * This component renders a label "TemplateMediumContent" followed by a serialized representation of the `template` object
 * and any additional child content. It is designed to handle and display information about an template entity object.
 *
 * @component
 * @param {Object} props - The properties for the TemplateMediumContent component.
 * @param {Object} props.template - The object representing the template entity.
 * @param {string|number} props.template.id - The unique identifier for the template entity.
 * @param {string} props.template.name - The name or label of the template entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render after the serialized `template` object.
 *
 * @returns {JSX.Element} A JSX element displaying the entity's details and optional content.
 *
 * @example
 * // Example usage:
 * const templateEntity = { id: 123, name: "Sample Entity" };
 * 
 * <TemplateMediumContent template={templateEntity}>
 *   <p>Additional information about the entity.</p>
 * </TemplateMediumContent>
 */
// export const MediumContent = ({ item, children}) => {
//     return (
//         <MediumContent_ item={item}>
//             {children}
//         </MediumContent_>
//     )
// }

// export const MediumContent_ = ({ item, children }) => {
//     return (
//         <>
//             {Object.entries(item).map(([attribute_name, attribute_value]) => {
//                 // if (attribute_name !== "id") return null
//                 if (Array.isArray(attribute_value)) return null
//                 if (typeof attribute_value === "object" && attribute_value !== null) return null
//                 let attribute_value_result = attribute_value
//                 // let attribute_value_result = attribute_value
//                 if (Array.isArray(attribute_value))
//                     // attribute_value_result = <CardCapsule><Table data={attribute_value} /></CardCapsule>
//                     return null
//                 else if (typeof attribute_value === "object" && attribute_value !== null)
//                     // attribute_value_result = <MediumCard item={attribute_value} />
//                     return null
//                 else if (attribute_name === "__typename") {
//                     /*attribute_value_result = <Link item={attribute_value} />*/
//                     // console.log("else1", attribute_name, attribute_value)
//                 }
//                 if (attribute_name === "id")
//                     attribute_value_result = <Link item={item}>{item?.id || "Data error"}</Link>
//                 if (attribute_name === "name")
//                     attribute_value_result = <Link item={item} />
//                 // else return null
//                 if (attribute_value)
//                     return (
//                         <Row key={attribute_name}>
//                             <Col className="col-4"><b>{attribute_name}</b></Col>
//                             <Col className="col-8">{attribute_value_result}</Col>
//                         </Row>
//                     )
//                 else return null
//             })}
//             {Object.entries(item).map(([attribute_name, attribute_value]) => {
//                 if (attribute_value !== null) return null
//                 let attribute_value_result = JSON.stringify(attribute_value)
//                 if (Array.isArray(attribute_value))
//                     // attribute_value_result = <CardCapsule><Table data={attribute_value} /></CardCapsule>
//                     return null
//                 else if (typeof attribute_value === "object" && attribute_value !== null)
//                     // attribute_value_result = <MediumCard item={attribute_value} />
//                     return null
//                 else if (attribute_name === "__typename") {
//                     /*attribute_value_result = <Link item={attribute_value} />*/
//                     console.log("else2", attribute_name, attribute_value)
//                 }
//                 if (attribute_value)
//                     return null
//                 else
//                     return (
//                         <Row key={attribute_name}>
//                             <Col className="col-4"><b>{attribute_name}</b></Col>
//                             <Col className="col-8">{attribute_value_result}</Col>
//                         </Row>
//                     )
//             })}
//             {children}
//         </>
//     )
// }
import { MediumContent as MediumContent_ } from "../../../../_template/src/Base/Components/MediumContent"
import { name } from "happy-dom/lib/PropertySymbol"

export const MediumContent = ({ item, children }) => {
    return (
        <>
            <Attribute label={"ID"}>
                <Link item={item}>
                    {item?.id || "Chyba dat!!"}
                </Link>
            </Attribute>

            <Attribute label={"Jméno studenta"}>
                <Link item={item}>
                    {item?.user?.fullname || "Chyba dat"}
                </Link>
            </Attribute>



            <hr />

            {/* 
            <Attribute label={"ID studenta"}>

                <Link item={item}>
                    {item?.userId || "Chyba dat"}
                </Link>
            </Attribute> */}

            <Attribute label={"Program"}>
                <a href={`/student/program/ProgramGQLModel/${item?.program?.id}`}>
                    {item?.program?.name || "Chyba dat!!"}
                </a>
            </Attribute>


            <Attribute label={"Číslo semestru"}>
                <Link item={item}>
                    {item?.semesterNumber || "Chyba dat!!"}
                </Link>
            </Attribute>



            <Attribute label={"Začátek semestru"}>
                <Link item={item}>
                    {formatDateTime(item?.startdate) || "Chyba dat!!"}
                </Link>
            </Attribute>

            <Attribute label={"Stav"}>
                <Link item={item}>
                    {item?.name ?? item?.id ?? "Chyba dat"}
                </Link>
            </Attribute>

            <hr />

            <Attribute label={"Vytvořeno"}>
                <Link item={item}>
                    {formatDateTime(item?.created) || "Chyba dat!!"}
                </Link>
            </Attribute>

            <Attribute label={"Kdy změněno"}>
                {formatDateTime(item?.lastchange) || "Chyba dat!!"}

            </Attribute>

            <Attribute label={"Kým změněno"}>
                <Link item={item}>
                    {item?.changedbyId || "Chyba dat!!"}
                </Link>
            </Attribute>

            <Attribute label={"Moje role"}>
                {item?.rbacobject?.currentUserRoles?.length > 0 ? item.rbacobject.currentUserRoles.map(role => role.roletype?.name).join(", ") : "Žádné role!"}
            </Attribute>

            <hr />

            <pre>
                {JSON.stringify(item, null, 2)}

            </pre>
        </>


    )

}