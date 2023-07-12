import { ActionSectionProps } from "~/shared/types";
import { Heading2 } from "../atoms/Heading2";
import { Subtitle } from "../atoms/Subtitle";
import { DoubleAction } from "~/components/molecules/DoubleAction"


export const ActionSection = (props: ActionSectionProps) => {

    const { twoText, actions } = props
    const { title, subtitle } = twoText

    return (
        <div className="flex h-min max-w-[2018px] p-0 flex-col content-start flex-nowrap
         items-start justify-center gap-5 relative f-auto lg:w-[400px]">
            <Heading2 text={title?.text} />
            <Subtitle props={{text: subtitle?.text}} />
            <DoubleAction actions={actions} />
        </div>
    )


}

