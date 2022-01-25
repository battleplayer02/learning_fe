import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';
import SideBarContext from '../context/SideBarContext';
import styles from "../Sidebar.module.css";
export default function SideBar() {
    const { open, setOpen } = useContext(SideBarContext);
    const { filter, setFilter } = useContext(FilterContext);
    if (open) {
        return (<div className={styles.main__sidebar}>
            <div className={styles.sidebar}>
                <div className={styles.heading}>
                    Categories
                    <div className={styles.cross} onClick={() => setOpen(false)}>x</div>
                </div>
                <div className={styles.categories}>
                    <div className={styles.category} onClick={() => setFilter({ ...filter, category: "" })} >
                        All
                    </div>
                    <div className={styles.category} onClick={() => setFilter({ ...filter, category: "Shirts" })} >
                        Shirts
                    </div>
                    <div className={styles.category} onClick={() => setFilter({ ...filter, category: "Pants" })}>
                        Pants
                    </div>
                </div>
            </div>
        </div>);
    }
    else {
        return <></>
    }
}
