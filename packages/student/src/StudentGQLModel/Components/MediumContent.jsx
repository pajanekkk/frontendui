import { Col } from "../../../../_template/src/Base/Components/Col"
import { Row } from "../../../../_template/src/Base/Components/Row"
import { Link } from "./Link"
import { Attribute, formatDateTime } from "../../../../_template/src/Base"

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