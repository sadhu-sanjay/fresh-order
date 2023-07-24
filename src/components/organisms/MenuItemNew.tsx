
import { useState, ReactNode } from "react";
import { motion, useCycle, Variants } from "framer-motion";
import { MenuLink } from "~/shared/types";
import { IconChevronRight, IconCircleChevronRight } from "@tabler/icons-react";
import { Heading3 } from "../atoms/Heading3";
import { Heading2 } from "../atoms/Heading2";
import { Subtitle1 } from "../atoms/Subtitle1";

const itemVariants: Variants = {
    open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
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
        y: '50%',
        opacity: 0,
        height: 0,
        transition: {
            y: { stiffness: 1000 },
            duration: 0.04,
        },
    },
}

export default function MenuItemNew({ menuLink,
    className,
    children }: {
        menuLink: MenuLink,
        className?: string,
        children?: ReactNode
    }) {

    const [open, toggleOpen] = useCycle(false, true);
    const Icon = menuLink.icon

    return (
        <>
            <motion.div className="flex  g-3"
                whileHover={{ scale: 1.1 }}
                onClick={() => toggleOpen()}
            >
                <motion.div
                    className="flex-grow align-middle gap-2 flex justify-start" >
                    {Icon && <Icon className="w-6" />}
                    
                    <Heading3 className="flex flex-col justify-center" text={menuLink.label} />
                </motion.div>
                <motion.button
                    variants={{
                        open: { rotate: 90 },
                        closed: { rotate: 0 }
                    }}
                    animate={open ? 'open' : 'closed'}
                    transition={{ duration: 0.2 }}
                >
                    <IconChevronRight className="dark:text-gray-200 text-gray-800 w-6" />
                </motion.button>
            </motion.div>

            {menuLink.links && <motion.ul

                animate={open ? 'open' : 'closed'}
                className={`${open ? 'block' : 'hidden'} transition-all ease-in-out grid w-full gap-3 px-10 py-5 `} >
                {menuLink.links.map((value: MenuLink, index: number) => {
                    return (
                        <motion.li key={index} variants={MenuItemVariants} whileHover={{scale: 1.1}} >
                            <Subtitle1 props={{ text: value.label }} />
                        </motion.li>
                    )
                })}
            </motion.ul>
            }

            {children}
            <div className="my-3 h-px w-full bg-gray-300" />

        </>
    )
}