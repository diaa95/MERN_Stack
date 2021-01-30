import React, {Component} from 'react';
import styles from './blocks.module.css';
class Main extends Component{
    render() {
        return (
            <>
                <div className={styles.header}></div>
                <div className={styles.navigation}></div>
                <div className={styles.main}>
                    <div className={styles.subContent}></div>
                    <div className={styles.subContent}></div>
                    <div className={styles.subContent}></div>
                    <div className={styles.advertisement}></div>
                </div>
            </>
        );
    }
}
export default Main;