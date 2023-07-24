import { IconHome2, IconChevronDown, IconFileTypography, IconDeviceMobile, IconHelpCircle, IconShirtSport, IconTemplate, IconInfoCircle } from '@tabler/icons-react'
import { CircleStackIcon, PhotoIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid'

import {
    DoubleTextProps,
    FeatureProps,
    HeaderProps,
    ActionSectionProps
} from '../shared/types'

interface CreateDesign {
    heading: string
    options: Array<DesignOption>
}
interface DesignOption {
    name: string
    icon?: Function
}

export const designData: CreateDesign = {
    heading: 'Create your own design',
    options: [
        {
            name: 'Add Image',
            icon: PhotoIcon
        },
        {
            name: 'Add Text',
            icon: IconFileTypography
        },
        {
            name: 'Add Text',
            icon: CircleStackIcon
        }
    ]
}


export const actionSectionData: ActionSectionProps = {
    twoText: {
        title: {
            text: 'Double Click to Update Anything',
        },
        subtitle: {
            text: 'Double click the image placeholders to add images. Do the same for any text, then tweak styles and publish.',
        },
    },
    actions: []
}


export const heroProps: DoubleTextProps = {
    title: {
        text: "Welcome to Chicane",
        alignment: 'text-center',
        fontSize: 'text-7xl'
    },
    subtitle: {
        text: "Find the world of opportunites",
        alignment: 'text-center',
    }
}

export const twoColumnImageTextData: FeatureProps = {
    actionSection: {
        twoText: {
            title: {
                text: 'The Leader in Quality Custom T-Shirts'
            },
            subtitle: {
                text: 'For events, businesses, schools, groups, and nonprofits',
            },
        },
        actions: [
            {
                text: 'Start Designing',
                href: '/design',
                targetBlank: false,
                btnType: 'primary',
            },
            {
                text: 'Read More',
                href: 'https://github.com/onwidget/tailnext',
                targetBlank: true,
                btnType: 'secondary',
            }
        ]
    },
    image: {
        url: '',
        alt: 'Front Image',
        width: '100%',
        height: '100%',
    },
}

export const featuresLargeData: FeatureProps = {
    actionSection: {
        twoText: {
            title: {
                text: 'The Leader in Quality Custom T-Shirts',
                fontSize: 'text-5xl',
                alignment: 'text-left',
            },
            subtitle: {
                // text: 'You have never made website this fast before',
                text: 'For events, businesses, schools, groups, and nonprofits'
            },
        },
        actions: [
            {
                text: 'Read More',
                href: 'https://github.com/onwidget/tailnext',
                targetBlank: true,
                btnType: 'primary',
            }
        ]
    },
    image: {
        url: '',
        alt: 'Front Image',
        width: '100%',
        height: '100%',
    },
}

export const headerData: HeaderProps = {
    links: [
        
        {
            label: 'Products',
            icon: IconShirtSport,
            links: [
                {
                    label: 'About Us',
                    href: '/about',
                },
                {
                    label: 'Contact Us',
                    href: '/contact',
                },
                {
                    label: 'FAQ',
                    href: '/faq',
                },
                {
                    label: 'Pricing',
                    href: '/pricing',
                },
                {
                    label: 'Privacy Policy',
                    href: '/privacy',
                },
                {
                    label: 'Terms & Condition',
                    href: '/terms',
                },
            ]
        },
        {
            label: 'Services',
            href: '/services',
            icon: WrenchScrewdriverIcon,
            links: [
                {
                    href: '/',
                    label: 'SomeLik'
                }
            ]
        },
        {
            label: 'Templates',
            href: '/templates',
            icon: IconTemplate,
        },
        {
            label: 'Help',
            href: '/help',
            icon: IconHelpCircle,
        },
        {
            label: 'About',
            href: '/about',
            icon: IconInfoCircle,
        },

    ],
    actions: [
        {
            text: 'Download',
            href: 'https://github.com/onwidget/tailnext',
            targetBlank: true,
            btnType: 'primary',
        },

    ],
    isSticky: true,
    showToggleTheme: true,
    showRssFeed: false,
    position: 'right',
}
