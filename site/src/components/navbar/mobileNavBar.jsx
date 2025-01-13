import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { throttle } from 'lodash';
import './mobileNav.css';

export function MobileNav({ lang, setLang }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const itemRefs = useRef([]);
    const scrollTimeout = useRef(null);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    // Memoize the pages object
    const pages = useMemo(() => ({
        EN: [
            { name: 'Home', path: '/' },
            { name: 'Quest', path: '/quest' },
            { name: 'Team', path: '/team' },
            { name: 'Divisions', path: '/divisions' },
            { name: 'Logs', path: '/logs' },
            { name: 'Media', path: '/media' }
        ],
        FR: [
            { name: 'Accueil', path: '/' },
            { name: 'Quête', path: '/quest' },
            { name: 'Équipe', path: '/team' },
            { name: 'Divisions', path: '/divisions' },
            { name: 'Journaux', path: '/logs' },
            { name: 'Médias', path: '/media' }
        ]
    }), []); // Empty dependency array since pages never change

    // Find current index based on pathname
    const currentIndex = useMemo(() => 
        pages[lang].findIndex(page => page.path === location.pathname),
        [pages, lang, location.pathname]
    );

    const getOrderedItems = useCallback(() => {
        const items = [...pages[lang]]; // Clone the pages array
        const centerIndex = Math.floor(items.length / 2);
    
        if (currentIndex === -1) return items;
    
        // Calculate rotation needed to bring the current item to the center
        let rotation = (currentIndex - centerIndex + items.length) % items.length;
    
        // Handle negative rotation for upward wrapping
        if (rotation < 0) {
            rotation += items.length;
        }
    
        // Rotate the array
        const rotatedItems = [
            ...items.slice(rotation),
            ...items.slice(0, rotation)
        ];
    
        return rotatedItems;
    }, [currentIndex, lang, pages]);

    // Cleanup scroll timeout on unmount
    useEffect(() => {
        return () => {
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isOpen && itemRefs.current[Math.floor(pages[lang].length / 2)]) {
            setTimeout(() => {
                const element = itemRefs.current[Math.floor(pages[lang].length / 2)];
                const container = element.parentElement;
                const offset = element.offsetTop - container.offsetHeight / 2 + element.offsetHeight / 2;
    
                container.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }, 0);
        }
    }, [isOpen, location.pathname, lang, pages]);

    const handleItemClick = (path) => {
        navigate(path);
        setIsOpen(false);
    };

    const onLangClick = useCallback(() => {
        setLang(lang === 'EN' ? 'FR' : 'EN');
    }, [lang, setLang]);

    // Touch handlers
    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientY);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientY);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isUpSwipe = distance > minSwipeDistance;
        const isDownSwipe = distance < -minSwipeDistance;

        if (isUpSwipe && currentIndex < pages[lang].length - 1) {
            navigate(pages[lang][currentIndex + 1].path);
        }
        if (isDownSwipe && currentIndex > 0) {
            navigate(pages[lang][currentIndex - 1].path);
        }
    };

    const handleWheel = throttle((e) => {
        if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
        }
    
        setIsScrolling(true);
    
        if (e.deltaY > 0) {
            // Scrolling down
            const nextIndex = (currentIndex + 1) % pages[lang].length; // Wrap to the start
            navigate(pages[lang][nextIndex].path);
        } else if (e.deltaY < 0) {
            // Scrolling up
            const prevIndex = (currentIndex - 1 + pages[lang].length) % pages[lang].length; // Wrap to the end
            navigate(pages[lang][prevIndex].path);
        }
    
        scrollTimeout.current = setTimeout(() => {
            setIsScrolling(false);
        }, 150);
    
        e.preventDefault();
    }, 300);

    const orderedItems = getOrderedItems();

    return (
        <div className="mobile-nav">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="toggle-button"
            >
                <span className="toggle-text">Menu</span>
            </button>

            {isOpen && (
                <div className="nav-overlay">
                    <div className="nav-container">
                        <div className="nav-header">
                            <button
                                onClick={onLangClick}
                                className="lang-button"
                            >
                                {lang}
                            </button>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="close-button"
                            >
                                x
                            </button>
                        </div>

                        <div
                            className={`mobile-nav-items ${isScrolling ? 'is-scrolling' : ''}`}
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                            onWheel={handleWheel}
                        >
                            {orderedItems.map((item, index) => {
                                // Calculate the actual index in the original array
                                const originalIndex = pages[lang].findIndex(page => page.path === item.path);
                                
                                return (
                                    <div
                                        key={item.path}
                                        ref={el => itemRefs.current[index] = el}
                                        onClick={() => handleItemClick(item.path)}
                                        className={`mobile-nav-item ${
                                            originalIndex === currentIndex ? 'MobileActive' : ''
                                        } ${
                                            Math.abs(index - Math.floor(orderedItems.length / 2)) === 1 
                                                ? 'adjacent' 
                                                : Math.abs(index - Math.floor(orderedItems.length / 2)) > 1 
                                                    ? 'distant' 
                                                    : ''
                                        }`}
                                    >
                                        <div className="mobile-nav-item-text">
                                            {item.name}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}