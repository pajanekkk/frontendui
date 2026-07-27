import { EntityLookup, Input } from "../../../../_template/src/Base"
import { Select } from "../../../../_template/src/Base/FormControls/Select"
import { SearchAsyncAction } from "../../ProgramGQLModel/Queries/SearchAsyncAction"
import { UserSearchAsyncAction } from "../../UserGQLModel/Queries/SearchAsyncAction"
import { UpdateBody } from "../Mutations/Update"


/**
 * Formulář pro úpravu existujícího studenta.
 *
 * Editovat jde jen to, co se v průběhu studia reálně mění — číslo semestru
 * a studijní program. Zbytek (kdo student je, stav studia) se nastavuje jinde.
 *
 * @param {object} item - upravovaný student
 * @param {Function} onChange - volá se při každé změně pole
 * @param {Function} onBlur - volá se při opuštění pole
 * @returns {JSX.Element}
 */
export const MediumEditableContent = ({ item, onChange = (e) => null, onBlur = (e) => null, onConfirm = () => null, children }) => {


    return (
        <>

            <Input
                id="semesterNumber"
                label="Číslo semestru"
                type="number"
                className="form-control"
                value={item?.semesterNumber || ""}
                onChange={onChange}
                onBlur={onBlur}
            />
            {/*
              EntityLookup napovídá programy podle názvu přes SearchAsyncAction.
              Dřív se sem ručně opisovalo UUID programu, což bylo pro uživatele
              prakticky nepoužitelné.
            */}
            <EntityLookup
                id="programId"
                label="Program"
                type="string"
                className="form-control"
                asyncAction={SearchAsyncAction}
                value={item?.program}
                onChange={onChange}
                onBlur={onBlur}
            />
            {children}
        </>
    )
}

/**
 * Formulář pro založení nového studenta.
 *
 * Na rozdíl od editace se tady vybírá i sám student — záznam ještě neexistuje,
 * takže je potřeba říct, ke komu ho vytvořit.
 *
 * @param {object} item - rozpracovaný nový záznam
 * @returns {JSX.Element}
 */
export const CreateContent = ({ item, onChange = (e) => null, onBlur = (e) => null, onConfirm = () => null, children }) => {

    return (
        <>
            <EntityLookup
                id="userId"
                label="Jméno studenta"
                type="string"
                className="form-control"
                asyncAction={UserSearchAsyncAction}
                onBlur={onBlur}
                value={item?.userId}
                onChange={onChange}

            />
            <EntityLookup
                id="programId"
                label="Program"
                type="string"
                className="form-control"
                asyncAction={SearchAsyncAction}
                onBlur={onBlur}
                onChange={onChange}
                value={item?.programId}

            />

        </>
    )

}
