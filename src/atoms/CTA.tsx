import Link from 'next/link'
import AnimateUp from '~/common/BaseAnimation';
import { CallToAction } from '~/components/shared/types'


const CTA = (props: { data: CallToAction }) => {

    const { text, href, icon: Icon, targetBlank, btnText, btnType } = props.data;
    const classLocal = `box-border shrink-0 w-min h-10 flex-row justify-center 
    items-center  p-[15px] drop-shadow-xl overflow-visible content-center
    flex-nowrap gap-2.5 rounded-lg`

    return (
        <>
            {props.data && text && href && (
                <div className='flex w-full sm:w-auto' >
                    {targetBlank ? (
                        <Link
                            className={`btn ${btnType === 'primary' ? 'btn-primary' : ''} w-full 
                             ${classLocal ? classLocal : ''} 
                            ${btnText === 'uppercase' ? 'uppercase' : ''}`}
                            href={href}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {Icon && <Icon className='mr-1 -ml-1.5 h-5 w-5' />}
                            <div
                                className='flex-0 w-auto h-auto whitespace-pre relative
                            font-semibold text-sm font-sans text-center leading-5'
                            >
                                {text}
                            </div>
                        </Link>
                    ) : (
                        <Link
                            className={`btn ${btnType === 'primary' ? 'btn-primary' : ''} w-full sm:mb-0 ${classLocal ? classLocal : ''
                                } ${btnText === 'uppercase' ? 'uppercase' : ''}`}
                            href={href}
                        >
                            {Icon && <Icon className="mr-1 -ml-1.5 h-5 w-5" />} {text}
                        </Link>
                    )}
                </div>
            )}
        </>
    )
}

export default CTA 