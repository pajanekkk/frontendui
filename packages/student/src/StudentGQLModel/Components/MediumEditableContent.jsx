import { EntityLookup, Input } from "../../../../_template/src/Base"
import { Select } from "../../../../_template/src/Base/FormControls/Select"
import { SearchAsyncAction } from "../../ProgramGQLModel/Queries/SearchAsyncAction"
import { UserSearchAsyncAction } from "../../UserGQLModel/Queries/SearchAsyncAction"
import { UpdateBody } from "../Mutations/Update"


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
