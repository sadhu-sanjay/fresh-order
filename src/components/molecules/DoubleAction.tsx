import { CallToAction } from "~/shared/types";
import CTA from "../atoms/CTA";

export const DoubleAction = ({ actions }: { actions: Array<CallToAction> }): JSX.Element => {

    const actionButtons = actions.map((action, index) => {
        return <CTA key={index} data={action} />;
    });

    return (
        <>
            <div className="flex flex=row gap-2 justify-between items-center">
                {actionButtons}
            </div>
        </>
    );
};
