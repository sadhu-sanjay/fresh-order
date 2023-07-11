import { MouseEventHandler } from "react";
import { IconHome2 } from '@tabler/icons-react'


interface Grid1ItemProps {
    image?: ChicaneImage
    title?: TextProps
    subtitle?: TextProps
    actions?: Array<CallToAction>
}

interface TwoColumnImageTextProps {
    title?: TextProps
    subtitle?: TextProps
    image?: ChicaneImage
}

interface FeatureProps {
    actionSection: ActionSectionProps;
    image?: ChicaneImage;
}
interface ActionSectionProps {
    twoText: DoubleTextProps;
    actions: Array<CallToAction>;
}
interface DoubleTextProps {
    title?: TextProps
    subtitle?: TextProps
}
interface TextProps {
    textClassNames?: string
    text?: string
    color?: string
    size?: string
    fontSize?: TailWindTextSizes
    alignment?: TailWindTextAlign
}
interface ChicaneImage {
    url?: string
    alt?: string
    width?: string
    height?: string
}


interface ToggleMenuProps {
    handleToggleMenuOnClick: MouseEventHandler<HTMLButtonElement>
    isToggleMenuOpen: boolean
}

interface Link {
    label?: string
    href?: string
    ariaLabel?: string
    icon?: Function
}

interface MenuLink extends Link {
    links?: Array<Link>
}

interface CallToAction {
    text: string;
    href?: string;
    icon?: Function;
    targetBlank?: boolean;
    btnText?: 'uppercase' | 'capitalize'
    btnType?: 'primary' | 'secondary'
}

export interface HeaderProps {
    links?: Array<MenuLink>;
    actions?: Array<CallToAction>;
    isSticky?: boolean;
    showToggleTheme: boolean;
    showRssFeed?: boolean;
    position: 'left' | 'right' | 'center';
}


// TailWind Types
type TailWindTextSizes = 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl' | 'text-6xl' | 'text-7xl' | 'text-8xl' | 'text-9xl'
type TailWindSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl'
type TailWindColor = 'primary' | 'secondary' | 'accent' | 'neutral' | 'base-100' | 'info' | 'success' | 'warning' | 'error'
type TailWindFont = 'sans' | 'serif' | 'mono'
type TailWindFontWeight = 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
type TailWindTextAlign = 'text-left' | 'text-center' | 'tex-right' | 'text-justify'
type GridStyle = 'style1' | 'style2'
