'use client';

import { useEffect } from 'react';

/**
 * Handles dynamic scaling when moving windows between monitors with different DPIs.
 * This complements the inline script in layout.tsx which handles the initial load.
 */
export default function DynamicScaling() {
    useEffect(() => {
        const handleResize = () => {
            try {
                // Safety check for mobile context (similar to inline script)
                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                if (isMobile) return;

                const r = window.devicePixelRatio;
                // Apply zoom if significant scaling detected
                if (r > 1.2) {
                    document.body.style.zoom = (1 / r) as any;
                } else {
                    // Reset to normal if on a standard 100% scale monitor
                    document.body.style.zoom = '1';
                }
            } catch (e) {
                console.warn('Scaling adjustment failed', e);
            }
        };

        // Listen for standard resize events
        window.addEventListener('resize', handleResize);

        // Optional: Listen for matchMedia changes which can trigger on DPI change
        const mediaQuery = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
        const handleChange = () => handleResize();

        try {
            // Modern browsers
            mediaQuery.addEventListener('change', handleChange);
        } catch (e) {
            // Fallback for older browsers
            mediaQuery.addListener(handleChange);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            try {
                mediaQuery.removeEventListener('change', handleChange);
            } catch (e) {
                mediaQuery.removeListener(handleChange);
            }
        };
    }, []);

    return null;
}
