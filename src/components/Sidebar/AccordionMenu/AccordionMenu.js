import React, { useState, useRef, useEffect } from 'react';

import classes from './AccordionMenu.module.scss';
import AccordionMenuItem from './AccordionMenuItem/AccordionMenuItem' ;

const AccordionMenu = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [height, setHeight] = useState(0);

    const innerElementRef = useRef(null);
    let timeout = useRef(null);

    useEffect(() => {
        timeout.current = setTimeout(() => {
            setHeight(innerElementRef.current.scrollHeight);
        }, 333);

        return () => {
            clearTimeout(timeout.current);
        }
    }, []);

    const toggleMenu = () => {
        setIsActive(prevState => !prevState);
    }

    const innerStyle = {
        height: `${isActive ? height : 0}px`
    };

    return (
        <div className={classes.AccordionMenu} aria-expanded={isActive}>
            <button className={classes.AccordionMenu__label} role='tab' onClick={toggleMenu}>
                {props.label}
            </button>

            <div className={classes.AccordionMenu__inner}
                style={innerStyle}
                aria-hidden={!isActive}
                ref={innerElementRef}>
                <div className={classes.AccordionMenu__content}>
                    <ul>
                        {props.subItems.map((item, index) => {
                            return <AccordionMenuItem key={index} data={item} />
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AccordionMenu;