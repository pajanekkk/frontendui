import { label } from "happy-dom/lib/PropertySymbol"
import { UpdateBody } from "../Mutations/Update"
import { PageItemBase } from "./PageBase"
import { Input } from "@hrbolek/uoisfrontend-shared"
import { useAsync } from "../../../../dynamic/src/Hooks"
import { SearchAsyncAction } from "../../../../_template/src/Base/Queries/SearchAsyncAction"
import { AsyncStateIndicator, EntityLookup } from "../../../../_template/src/Base"


export const ExtraSubPage = ({ item }) => {
    const { loading, error, data = [], run } = useAsync(
        SearchAsyncAction,
        { pattern: "%ime%" },
        { deferred: true }
    )
    const onChange = (e) => {
        console.log(e)
    }
    const onClick = async () => {
        const result = await run()
        console.log(result)
    }
    return (
        <>
            Byl jsem tady fantomas
            <AsyncStateIndicator error={error} loading={loading} />
            <Input
                id={"id"}
                label={"name"}
                type={"text"}
                onChange={onChange}
            />
        </>
    )
}

export const PageUpdateItem = ({
    // SubPage=UpdateBody,
    SubPage = ExtraSubPage,
    ...props
}) => {
    return (
        <PageItemBase
            SubPage={SubPage}
            {...props}
        />
    )
}