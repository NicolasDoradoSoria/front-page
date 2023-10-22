"use client"
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'
import { useCallback } from 'react';
 
function UseHeader() {
    const [elementVisible, setElementVisible] = useState(false);
    const callback = (entries, observer) => {
        console.log(entries)
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setElementVisible(true);
            } else {
                setElementVisible(false);
            }
        });
    };
    
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

     

        const observer = new IntersectionObserver(callback, options);

        observer.observe(document.documentElement);

        return () => {
            observer.unobserve(document.documentElement);
        };
    }, []);

    

    return {
        elementVisible,
    }
}

export default UseHeader;