import { designData } from "~/data/data"
import { DesignOption } from "~/shared/types"

export default function Editor({ onImageSelect }: { onImageSelect: (URL: string) => void }) {

    const handleFileChange = (e: any) => {
        if (e.target.files && e.target.files[0]) {
            onImageSelect(URL.createObjectURL(e.target.files[0]));
        }
    };

    const items = designData.options.map((each: DesignOption, index: number) => {

        const { icon: Icon, name } = each
        return (
            <div key={index} className={`hover:bg-blue-600 hover:shadow-md hover:shadow-blue-900/50 hover:text-[white]
          text-[#424447] border-dotted border border-bed-200
          transition-all duration-200 ease-in-out cursor-pointer 
          rounded-lg aspect-square h-full
          flex flex-col justify-center items-center`}>
                <label htmlFor='uploadImg' className=' gap-1 cursor-pointer flex flex-col items-center'>
                    {Icon && <Icon className='w-6' />}
                    <div className='text-xs' >
                        {name}
                    </div>
                    <input onChange={handleFileChange} id='uploadImg' type='file' hidden />
                </label>
            </div>
        )
    })

    return (

        <aside className='bg-white col-[1/21] row-[20/21] lg:col-[1/2] lg:row-[2/10] '>
            <div className='grid grid-cols-4 lg:grid-cols-1
gap-3 md:gap-1 
p-3 md:p-1
w-full h-auto'>
                {items}
            </div>
        </aside>
    )
}