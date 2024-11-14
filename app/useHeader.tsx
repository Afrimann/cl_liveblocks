// app/hooks/useHeader.ts
'use client'
import { useState } from 'react';

export const useHeader = () => {
    const [mobileNav, setMobileNav] = useState<boolean>(false)
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const openMobileNav = () => setMobileNav((prev) => !prev);
    const closeMobileNav = () => setMobileNav(false);

    const handleMouseEnter = (item: string) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return {
        openMobileNav,
        closeMobileNav,
        handleMouseEnter,
        handleMouseLeave,
        hoveredItem,
        mobileNav,
        setMobileNav,
    };
};
