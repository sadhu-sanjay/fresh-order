
import { useState, ReactNode } from "react";
import { motion, useCycle, Variants } from "framer-motion";
import { MenuLink } from "~/shared/types";
import { IconCircleChevronRight } from "@tabler/icons-react";
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

    return (
        <>
            <motion.div className="flex  g-3">
                <motion.div className="flex-grow" whileTap={{ scale: 0.97 }} onClick={() => toggleOpen()}>
                    <Heading3 text={menuLink.label} />
                </motion.div>
                <motion.div
                    variants={{
                        open: { rotate: 90 },
                        closed: { rotate: 0 }
                    }}
                    animate={open ? 'open' : 'closed'}
                    transition={{ duration: 0.2 }}
                >
                    <IconCircleChevronRight className="w-6" />
                </motion.div>
            </motion.div>

            {menuLink.links && // render dropdown if menuitems are there 
                <motion.ul

                    animate={open ? 'open' : 'closed'}
                    className={`${open ? 'block' : 'hidden'} transition-all ease-in-out grid w-full gap-3 px-10 py-5 `} >
                    {menuLink.links.map((value: MenuLink, index: number) => {
                        return (
                            <motion.li key={index} variants={MenuItemVariants} >
                                <Subtitle1 props={{ text: value.label }} />
                            </motion.li>
                        )
                    })}
                </motion.ul>
            }

            {children}
            <div className="my-3 h-0 w-full bg-gray-300" />

        </>
    )
}




function MenuItem({ className, children }: { className?: string, children?: any; }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className="menu"
        >
            <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                Menu
                <motion.div
                    variants={{
                        open: { rotate: 180 },
                        closed: { rotate: 0 }
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                >
                    <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </motion.div>
            </motion.button>
            <motion.ul

                variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.7,
                            delayChildren: 0.3,
                            staggerChildren: 0.05
                        }
                    },
                    closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                            type: "spring",
                            bounce: 0,
                            duration: 0.3
                        }
                    }
                }}
                style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
                <motion.li variants={itemVariants}>Item 1 </motion.li>
                <motion.li variants={itemVariants}>Item 2 </motion.li>
                <motion.li variants={itemVariants}>Item 3 </motion.li>
                <motion.li variants={itemVariants}>Item 4 </motion.li>
                <motion.li variants={itemVariants}>Item 5 </motion.li>
            </motion.ul>
        </motion.nav>
    );
}

