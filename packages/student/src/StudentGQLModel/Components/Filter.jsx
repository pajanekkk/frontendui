import { DateTimeFilter, Filter as BaseFilter, StringFilter, UUIDFilter, FloatFilter } from "../../../../_template/src/Base/FormControls/Filter"

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

