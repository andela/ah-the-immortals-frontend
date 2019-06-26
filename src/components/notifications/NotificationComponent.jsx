/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import '../../styles/style.css';
import push from '../../services/images/push.png';
import email from '../../services/images/email.png';

const NotificationModal = ({ show,
  closeModal,
  onToggle,
  notification
}) => {
  return (
    <>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <h5>
            <b>
              Notification Settings
            </b>
          </h5>
        </Modal.Header>
        <Modal.Body>
          <div className="shadow-lg p-3 mb-4 bg-light rounded form-div">
            <h6>
              <b>
              Choose the type of notifications to receive
              </b>
            </h6>
            <div className="row notif-content push">
              <img src={push} alt="push" className="notif-icons" />
              <h6 className="notif-title">
                <small>
                  <b>
                    Push
                  </b>
                </small>
              </h6>
              {Object.values(notification)[0].in_app_notifications ? (
                <>
                  <h6 className="notif-status-app">
                    <small>
                      <b>
                        On
                      </b>
                    </small>
                  </h6>
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="in_app_notifications"
                      checked 
                      onChange={(event) => onToggle(event, false)}
                    />
                    <span className="slider round" />
                  </label>
                </>
              ):(
                <>
                  <h6 className="notif-status-app">
                    <small>
                      <b>
                        Off
                      </b>
                    </small>
                  </h6>
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="in_app_notifications"
                      checked={false} onChange={(event) => onToggle(event, true)}
                    />
                    <span className="slider round" />
                  </label>
                </>
              )}
            </div>
            <hr />
            <div className="row notif-content">
              <img src={email} alt="push" className="notif-icons" />
              <h6 className="notif-title">
                <small>
                  <b>
                    Email
                  </b>
                </small>
              </h6>
              {Object.values(notification)[0].email_notifications ? (
                <>
                  <h6 className="notif-status-email">
                    <small>
                      <b>
                        On
                      </b>
                    </small>
                  </h6>
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="email_notifications" 
                      checked 
                      onChange={(event) => onToggle(event, false)} />
                    <span className="slider round" />
                  </label>
                </>
              ):(
                <>
                  <h6 className="notif-status-email">
                    <small>
                      <b>
                        Off
                      </b>
                    </small>
                  </h6>
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="email_notifications"
                      checked={false}
                      onChange={(event) => onToggle(event, true)} />
                    <span className="slider round" />
                  </label>
                </>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

NotificationModal.propTypes = {
  notification: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default NotificationModal;
