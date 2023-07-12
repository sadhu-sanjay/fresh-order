import sideImg from '~/assets/images/hero.avif';
import { ActionSection } from "~/components/sections/ActionSection";
import { FeatureProps } from "~/shared/types";

export const TwoColumnImageText = (props: FeatureProps) => {

    const { actionSection, image } = props
    const { twoText, actions } = actionSection
    const { title, subtitle } = twoText

    return (
        <section>
            <div className="px-6 py-12 md:py-20 md:px-10 flex-shrink-0 flex-1 w-full h-min flex flex-col sm:flex-row  
                    justify-center items-center overflow-visible relative content-center
                    flex-nowrap gap-10 rounded-none bg-blue-00" >
                <div className="content-center flex flex-1 w-full h-auto 
                flex-col justify-center items-center self-stretch relative p-0 gap-5 
                rounded-none bg-blue-00">
                    <ActionSection {...actionSection} />
                </div>
                <div className="
                box-border flex-1 flex-shrink-0 w-full h-[260px] sm:h-[500px] 
                block overflow-visible relative aspect-[1.33/1] sm:aspect-[4/3] bg-cover 
                bg-no-repeat bg-center rounded-lg"
                    style={{ objectFit: 'cover', backgroundImage: `url(${sideImg.src})` }}
                />

            </div>

        </section >
    )
}

