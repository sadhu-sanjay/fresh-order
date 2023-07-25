'use client'

import { useCycle } from 'framer-motion';
import Link from 'next/link';
import logo from '~/assets/images/front.webp'
import { motion } from 'framer-motion';
import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { headerData } from '~/data/data'
import ToggleDarkMode from '~/components/atoms/ToggleDarkMode';
import CTA from '../atoms/CTA';
import { CallToAction } from '../../shared/types';
import MenuItemNew from '../organisms/MenuItemNew';
import { Heading2 } from '../atoms/Heading2';
import { Heading4 } from '../atoms/Heading4';
import { Heading3 } from '../atoms/Heading3';


export const MobileNav = () => {

    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);
    const { links, actions, isSticky, showToggleTheme, showRssFeed, position } = headerData;

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
            className={`fixed inset-0 z-50 w-full sm:hidden ${isOpen ? "" : "pointer-events-none"}`}
        >
            <motion.div
                className='absolute inset-0 w-full right-0 
                bg-gradient-to-l from-slate-300 to-slate-200
                dark:bg-gradient-to-l dark:from-slate-800 dark:bg-slate-900'
                variants={sidebar}
            />
            <motion.ul
                variants={variants}
                className={`absolute max-h-[500px] overflow-scroll flex w-full flex-col gap-3 px-10  mt-20 `} >
                {headerData.links?.map((menulink, index) => (
                    <motion.li key={index} variants={MenuItemVariants} >
                        <MenuItemNew menuLink={menulink} toggle={toggleOpen} />
                    </motion.li>
                ))}

            </motion.ul>
            <MenuToggle toggle={toggleOpen} />
            <div
                className={`${isOpen ? 'block' : 'hidden'} 
                fixed bottom-0 left-0 w-full justify-end p-10 md:static 
                md:mb-0 md:flex md:w-auto md:self-center md:p-0`}
            >
                <div className="flex w-full items-center justify-between md:w-auto">
                    {showToggleTheme && <ToggleDarkMode />}
                    {actions && actions.length > 0 && (
                        <div className="ml-4 flex w-max flex-wrap justify-end">
                            {actions.map((callToAction, index) => (
                                <CTA
                                    key={`item-action-${index}`}
                                    data={callToAction as CallToAction}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </motion.nav>
    );
}

const navItems = ["pricing", "changelog"];

const variants = {
    open: {
        transition: { staggerChildren: 0.04, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.02, staggerDirection: -1 },
    },
};

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(0px at 100% 0)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};

const MenuItem = ({
    className,
    children,
}: {
    className?: string;
    children?: ReactNode;
}) => {
    return (
        <motion.li variants={MenuItemVariants} className={className}>
        </motion.li>
    );
};

const MenuItemVariants = {
    open: {
        y: 0,
        opacity: 1,
        height: 'auto',
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        height: 0,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
            duration: 0.04,
        },
    },
};

const MenuToggle = ({ toggle }: { toggle: any }) => (
    <button
        onClick={toggle}
        className="pointer-events-auto absolute right-10 top-8 z-20"
    >
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
        </svg>
    </button>
);

const Path = (props: any) => (
    <motion.path
        fill="transparent"
        strokeWidth="2.3"
        // stroke="hsl(0, 0%, 18%)"
        className="dark:stroke-white stroke-black"
        strokeLinecap="round"
        {...props}
    />
);