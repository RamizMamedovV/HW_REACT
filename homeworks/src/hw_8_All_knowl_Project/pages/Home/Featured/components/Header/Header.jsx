import React from 'react';
import styles from'./Header.module.css';

function Hrader() {
    return ( 
        <div className={styles.feature_header}>
            <h2 className={styles.feature_h2}>Fetured Items</h2>
            <p className={styles.feature_p}>Shop for items based on what we featured in this week</p>
        </div>
     );
}

export default Hrader;