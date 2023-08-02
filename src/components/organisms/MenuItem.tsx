import { useState, ReactNode } from "react";
import { Cycle, motion, useCycle, Variants } from "framer-motion";
import { MenuLink } from "~/shared/types";
import { IconChevronRight, IconCircleChevronRight } from "@tabler/icons-react";
import { Heading3 } from "../atoms/Heading3";
import { Heading2 } from "../atoms/Heading2";
import { Subtitle1 } from "../atoms/Subtitle1";
import Link from "next/link";
import { useRouter } from "next/navigation";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    height: "auto",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: "50%",
    opacity: 0,
    height: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.04,
    },
  },
};

export function MenuItem({
  menuLink,
  className,
  children,
  toggle,
}: {
  menuLink: MenuLink;
  className?: string;
  children?: ReactNode;
  toggle?: Cycle;
}) {
  const router = useRouter();
  const [open, toggleOpen] = useCycle(false, true);
  const Icon = menuLink.icon;
  const handleClick = (e: React.MouseEvent) => {
    if (menuLink.links && menuLink.links.length > 0) {
      e.preventDefault();
      toggleOpen();
    } else {
      if (toggle) toggle();
      router.push(menuLink.href);
    }
  };

  return (
    <div>
      <Link
        href={menuLink.href}
        //     className={`
        // transition-colors ease-in-out hover:text-black
        // dark:hover:bg-gray-700 hover:bg-gray-100 rounded-full drop-shadow-sm
        // dark:text-white dark:hover:text-white `
        //     }
      >
        <motion.div
          className="flex flex-col hover:bg-gray-100 dark:hover:bg-gray-800
                    p-4 m-2 sm:py-2 sm:m-1 relative  rounded-sm "
          // whileHover={{ scale: 1.1 }}
          onMouseEnter={() => toggleOpen()}
          onMouseLeave={() => toggleOpen()}
          onClick={handleClick}
        >
          <motion.div className="flex-grow align-middle flex justify-start">
            {Icon && <Icon className="mr-4 dark:text-slate-200 w-6 sm:hidden" />}
            <Heading3
              className="flex flex-col justify-center"
              text={menuLink.label}
            />
            {menuLink.links && menuLink.links.length > 0 && (
              <motion.button
                variants={{
                  open: { rotate: 90 },
                  closed: { rotate: 0 },
                }}
                animate={open ? "open" : "closed"}
                transition={{ duration: 0.2 }}
              >
                <IconChevronRight className="dark:text-gray-200 text-gray-800 w-5 " />
              </motion.button>
            )}
          </motion.div>
          {menuLink.links && (
            <motion.ul
              animate={open ? "open" : "closed"}
              className={`${open ? "block" : "hidden"} 
                        relative sm:absolute 
                        left-0 top-full
                        rounded-sm
                        shadow-sm 
                        bg-slate-100
                        dark:bg-slate-800 
                        grid gap-3
                        w-full max-w-auto
                        px-4 py-4 `}
            >
              {menuLink.links.map((value: MenuLink, index: number) => {
                return (
                  <motion.li key={index} variants={MenuItemVariants}>
                    {/* <Subtitle1 props={{ text: value.label }} /> */}
                    <div
                      className="flex-shrink-0 
                w-auto whitespace-pre 
                relative 
                font-semibold 
                font-inter 
                text-gray-500 
                dark:text-gray-400
                text-xs 
                leading-5"
                    >
                      {/* Content */}
                      {value.label}
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </motion.div>
      </Link>

      {/* {children} */}
      <div className="sm:hidden  h-px w-full bg-gray-300" />
    </div>
  );
}
