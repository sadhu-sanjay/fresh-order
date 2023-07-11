import { IconMenu, IconX } from '@tabler/icons-react'
import { ToggleMenuProps } from '~/components/shared/types'

const ToggleMenu = ({ handleToggleMenuOnClick, isToggleMenuOpen }: ToggleMenuProps) => {
    return <button
        type='button'
        className='ml-1.5 inline-flex items-center rounded-lg'
        onClick={handleToggleMenuOnClick}
    >
        {isToggleMenuOpen ? <IconX className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
    </button>
};

export default ToggleMenu;


