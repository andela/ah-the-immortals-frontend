import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import NotificationModal from '../notifications/NotificationComponent';
import '../../styles/App.css';

const SignedInLinks = ({handleLogout, username, handleClick, notifications, unread, handleClear, showModal, show, closeModal, notification, onToggle}) => (
  <div className="nav ml-auto">
    <div
      className="bell"
    >
      <p className="notification">
        <button
          type="button"
          onClick={handleClick}
          id="note-bell"
          data-toggle="dropdown"
          className="button-bell"
          aria-haspopup="true"
          aria-expanded="false"
          data-target="#notificationsmenu"
        >
          <i className="fa fa-bell notnotif text-dark mt-3" />
        </button>
        <span className={unread ? 'badge' : 'hidden'}>{unread}</span>
      </p>
      <div className="dropdown-menu  dropdown-menu-sm-left scrollable-menu" id="notificationsmenu">
        <p className="notes">
          Notifications
          <button type="button" id="clear-btn" className="clear-note" onClick={handleClear}>Clear All</button>
        </p>

        <div className="dropdown-divider" />
        {notifications.length > 0 ? notifications.map(notification => (
          <ul className="text-left notify" key={notification.id}>
            <li className="dropdown-item menu-item">
              <Link to={`/post/${notification.verb}`}>
                {notification.description }
              </Link>
            </li>
          </ul>
        )): <p className="empty-note">You have no notifications</p>}
      </div>
    </div>
    <NavLink to="/postarticle" className="nav-link mt-1 mr-1">
      Post Article
    </NavLink>
    <NavLink
      className="nav-link dropdown-toggle"
      role="button"
      data-toggle="dropdown"
      data-target="#profileDropdown"
      aria-expanded="true"
      to=""
    >
      <i className="fa fa-user-circle ml-3 mr-2 mt-2" />
      <span className="mr-1">{username}</span>
    </NavLink>
    <div className="dropdown-menu ml-5" id="profileDropdown">
      <div className="dropdown-item">
        <NavLink to={`/myProfile/${username}`} className="nav-link">
          Profile
        </NavLink>
      </div>
      <div className="dropdown-item">
        <button type="button" className="btn btn-link settings-link" onClick={showModal}>Settings</button>
        <NotificationModal showModal={showModal} show={show} closeModal={closeModal} notification={notification} onToggle={onToggle} />
      </div>
      <div className="dropdown-item">
        <NavLink
          to="/"
          className="nav-link"
          onClick={handleLogout}
        >
          Logout
        </NavLink>
      </div>
    </div>
  </div>
);
SignedInLinks.propTypes = {
  handleLogout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  notifications: PropTypes.array.isRequired,
  unread: PropTypes.number.isRequired,
  handleClear: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  notification: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired
};
export default SignedInLinks;
