import { motion } from "framer-motion";

export default function ListItem({ title, onClick }) {
    return (
        <motion.li
        className="w-full font-patrick md:text-2xl pb-1 cursor-pointer relative"
        initial="rest"
        whileHover="hover"
        onClick={onClick}
        >
        {title}

        {/* animates line*/}
        <motion.span
            variants={{
            rest: { width: 0 },
            hover: { width: "100%" }
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 bottom-0 h-1 bg-[#2cde73] block"
        />
        </motion.li>
    );
}