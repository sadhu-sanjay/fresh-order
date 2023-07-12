import img from '~/assets/images/hero.avif';
import img1 from '~/assets/images/hero.avif';
import { ActionSection } from "~/components/sections/ActionSection";
import { FeatureProps } from "~/shared/types";

export const FeaturesLarge = (props: FeatureProps) => {

    const { actionSection, image } = props
    const { twoText, actions } = actionSection
    const { title, subtitle } = twoText

    return (
        <section>
            <div className="py-12 px-6 md:py-20 md:px-10 relative w-full 
            h-min flex flex-col justify-center items-center flex-nowrap gap-2 rounded-none
             overflow-hidden bg-blue-00">

                <div className="rounded-none gap-10 flex-nowrap content-center relative 
                overflow-visible max-w-full justify-center items-center flex-col flex 
                h-min flex-shrink-0 w-[330px] sm:w-[1000px] lg:w-[1000px] bg-blue-00">
                    

                    <div className="flex-shrink-0 flex-1 w-full h-min flex flex-col-reverse sm:flex-row  
                    justify-center items-center overflow-visible relative content-center
                    flex-nowrap gap-10 rounded-none bg-blue-00" >
                        <div className="content-center flex flex-1 w-full h-auto 
                flex-col justify-center items-start self-stretch relative p-0 gap-5 
                rounded-none bg-blue-00">
                            <ActionSection {...actionSection} />
                        </div>
                        <div className="
                box-border flex-1 flex-shrink-0 w-full h-[260px] lg:h-[360px] 
                block overflow-hidden relative aspect-[1.33/1] sm:aspect-[4/3] bg-cover 
                bg-no-repeat bg-center rounded-lg"
                            style={{ objectFit: 'cover', backgroundImage: `url(${img1.src})` }}
                        />

                    </div>


                </div>
            </div>
        </section >
    )
}
