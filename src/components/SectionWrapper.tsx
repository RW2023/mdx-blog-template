'use client';
import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

interface SectionWrapperProps {
    id: string;
    children: ReactNode;
}

const SectionWrapper: FC<SectionWrapperProps> = ({ id, children }) => {
    return (
        <motion.section
            id={id}
            className="min-h-screen w-full flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.section>
    );
};

export default SectionWrapper;
