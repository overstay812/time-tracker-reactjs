import React from 'react'
import { connect } from 'react-redux'
import { deleteWorklog, popupDeleteToggle } from '../redux/actions'
import styles from './DeleteWarning.module.css'
import apply from './Vector (Stroke).svg'
import cancel from './x.svg'

const DeleteWarning = ({ deleteWorklog, popupToggle, popupDeleteToggle }) => {
    return (
        <div className={popupToggle ? styles.wrapper : styles.wrapperHide}>
            <div className={styles.popup}>

                <div className={styles.header}>
                    <span className={styles.headerTitle}>Are you sure you want to delete the worklog?</span>
                </div>

                <div className={styles.main}>
                </div>
                <div className={styles.footer}>
                    <button className={styles.apply} onClick={() => {
                        deleteWorklog()
                        popupDeleteToggle()
                        }}><img src={apply} alt="Apply button" /></button>
                    <button className={styles.cancel} onClick={()=>popupDeleteToggle()}><img src={cancel} alt="Cancel button" /></button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        popupToggle: state.worklogReducer.popupDeleteWOrklogToggle
    }
}

const mapDispatchToPRops = {
    deleteWorklog,
    popupDeleteToggle
}
export default connect(mapStateToProps, mapDispatchToPRops)(DeleteWarning) 