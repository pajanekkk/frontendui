import { Col } from "../../../../_template/src/Base/Components/Col"
import { Row } from "../../../../_template/src/Base/Components/Row"
import { Link } from "./Link"
import { Attribute, formatDateTime } from "../../../../_template/src/Base"

import { MediumContent as MediumContent_ } from "../../../../_template/src/Base/Components/MediumContent"
import { name } from "happy-dom/lib/PropertySymbol"


export const MediumContent = ({ item, children }) => {
    return (
        <>
            <Attribute label={"Studentovo ID"}>
                <Link item={item}>
                    {item?.id || "Chyba dat!!"}
                </Link>
            </Attribute>

            <Attribute label={"Jméno studenta"}>
                <a href={`/ug/UserGQLModel/view/${item?.userId}`}>
                    {item?.user?.fullname || "Chyba dat"}
                </a>
            </Attribute>



            <hr />



            <Attribute label={"Program"}>
                <a href={`/program/ProgramGQLModel/view/${item?.program?.id}`}>
                    {item?.program?.name || "Chyba dat!!"}
                </a>
            </Attribute>


            <Attribute label={"Číslo semestru"}>
                <span item={item}>
                    {item?.semesterNumber ?? "Chyba dat!!"}
                </span>
            </Attribute>



            <Attribute label={"Začátek semestru"}>
                <span item={item}>
                    {formatDateTime(item?.startdate) || "Chyba dat!!"}
                </span>
            </Attribute>

            <Attribute label={"Stav"}>
                <Link item={item}>
                    {item?.state?.name ?? item?.state?.id ?? "Chyba dat"}
                </Link>
            </Attribute>

            <hr />

            <Attribute label={"Vytvořeno"}>
                <span item={item}>
                    {formatDateTime(item?.created) || "Chyba dat!!"}
                </span>
            </Attribute>

            <Attribute label={"Kdy změněno"}>
                {formatDateTime(item?.lastchange) || "Chyba dat!!"}
            </Attribute>

            <Attribute label={"Kým změněno"}>
                <a href={`/ug/UserGQLModel/view/${item?.changedbyId}`}>
                    {item?.changedby?.fullname || "Chyba dat!!"}
                </a>
            </Attribute>

            <Attribute label={"Moje role"}>
                {item?.rbacobject?.currentUserRoles?.length > 0 ? item.rbacobject.currentUserRoles.map(role => role.roletype?.name).join(", ") : "Žádné role!"}
            </Attribute>

            <hr />

            {/*             <pre>
                {JSON.stringify(item, null, 2)}

            </pre>
         */}
        </>


    )

}