import { GeneratedContentBase } from "../../../../_template/src/Base/Pages/Page"
import { PageItemBase } from "./PageBase"


import EvaluationsPage from "./EvaluationsPage"

export const PageReadItem = ({
    SubPage = EvaluationsPage,
    ...props
}) => {
    return (
        <PageItemBase SubPage={SubPage} {...props} />
    )
}