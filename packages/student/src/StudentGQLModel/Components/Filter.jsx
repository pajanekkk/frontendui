import { DateTimeFilter, Filter as BaseFilter, StringFilter, UUIDFilter, FloatFilter } from "../../../../_template/src/Base/FormControls/Filter"

/**
 * Filtr nad seznamem studentů.
 *
 * Pozor na názvy polí: filtr posílá na server snake_case (program_id,
 * semester_number), zatímco fragmenty a komponenty pracují s camelCase
 * (programId, semesterNumber). Je to jméno sloupce v databázi, ne atribut
 * z GraphQL modelu — překlep se projeví až tím, že filtr tiše nic nefiltruje.
 *
 * @param {string} id - identifikátor filtru
 * @param {Function} onChange - volá se při změně kteréhokoli pole
 * @returns {JSX.Element}
 */
export const Filter = ({ id, onChange: handleChange, children }) => {
    return (
        <BaseFilter id={id} onChange={handleChange}>
            <UUIDFilter id="id" />
            <UUIDFilter id="program_id" />
            <DateTimeFilter id="created" emitUtcIso={false} />
            <FloatFilter id="semester_number" />
            {children}
        </BaseFilter>
    )
}

