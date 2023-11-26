import React from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import ModalFooter from './ModalFooter'
import styles from './DigiModal.module.scss'
import {BsFillCalendar2CheckFill} from 'react-icons/bs'


const DigiModal = (props) => {
 
  return (
   
    <Modal className={`${styles.modalWindow}`} {...props} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header  closeButton>
      <Modal.Title className={`${styles.title}`} id="contained-modal-title-vcenter">
        خرید اشتراک دیجی پلاس
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="grid-example">
      <Container>
        <Row>
          <div className={`${styles.modalContainer}`}>
            <div className={`${styles.modalBox}`}>
              <div className={`${styles.topBox}`}>
                 <div className={`${styles.calendar}`}><BsFillCalendar2CheckFill /></div>
                 <div className={`${styles.calendarText}`}>اشتراک ۱ ماهه</div>
                 <div className={`${styles.deliver}`}>۴ ارسال رایگان</div>
              </div>
              <div className={`${styles.bottomBox}`}>
                <span>ماهانه</span>
                <span className={`${styles.price}`}>۷۵۰۰۰</span>
                <span>تومان</span>
              </div>
            </div>
            <div className={`${styles.modalBox}`}>
              <div className={`${styles.topBox}`}>
                 <div className={`${styles.calendar}`}><BsFillCalendar2CheckFill /></div>
                 <div className={`${styles.calendarText}`}>اشتراک ۳ ماهه</div>
                 <div className={`${styles.deliver}`}>۱۲ ارسال رایگان</div>
              </div>
              <div className={`${styles.bottomBox}`}>
                <span>ماهانه</span>
                <span className={`${styles.price}`}>۵۹،۶۶۶</span>
                <span>تومان</span>
              </div>
            </div>
            <div className={`${styles.modalBox}`}>
              <div className={`${styles.topBox}`}>
                 <div className={`${styles.calendar}`}><BsFillCalendar2CheckFill /></div>
                 <div className={`${styles.calendarText}`}>اشتراک ۱۲ ماهه</div>
                 <div className={`${styles.deliver}`}>۴۸ ارسال رایگان</div>
              </div>
              <div className={`${styles.bottomBox}`}>
                <span>ماهانه</span>
                <span className={`${styles.price}`}>۷۴،۸۳۳</span>
                <span>تومان</span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Modal.Body>
    <Modal.Footer className={`${styles.modalFooter}`}>
      <ModalFooter />
    </Modal.Footer>
  </Modal>
  
  )
}

export default DigiModal