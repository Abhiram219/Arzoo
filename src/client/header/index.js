import React from 'react';
import { ShoppingCartOutlined, UserOutlined, SearchOutlined,LineOutlined } from '@ant-design/icons'
import './index.scss';

const Header = () => {
  return(
    <React.Fragment>
      <div className="header">
        <div className="header__titleContainer">
          <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="80" height="10" rx="8"></rect>
              <rect y="20" width="80" height="10" rx="8"></rect>
              <rect y="40" width="60" height="10" rx="8"></rect>
          </svg>
          <span> White Orange </span>
        </div>
        <div className="header__location">
        <svg id="Layer_1" enable-background="new 0 0 512 512" height="24" viewBox="0 0 512 512" width="24" xmlns="http://www.w3.org/2000/svg"><g><path d="m407.579 87.677c-31.073-53.624-86.265-86.385-147.64-87.637-2.62-.054-5.257-.054-7.878 0-61.374 1.252-116.566 34.013-147.64 87.637-31.762 54.812-32.631 120.652-2.325 176.123l126.963 232.387c.057.103.114.206.173.308 5.586 9.709 15.593 15.505 26.77 15.505 11.176 0 21.183-5.797 26.768-15.505.059-.102.116-.205.173-.308l126.963-232.387c30.304-55.471 29.435-121.311-2.327-176.123zm-151.579 144.323c-39.701 0-72-32.299-72-72s32.299-72 72-72 72 32.299 72 72-32.298 72-72 72z"/></g></svg>
          <span>Bengaluru</span>
        </div>
        <div className="header__options">
          <SearchOutlined style={{fontSize:32, cursor:'pointer'}} />
          <UserOutlined style={{fontSize:32, cursor:'pointer', marginLeft:32}} />
          <ShoppingCartOutlined style={{fontSize:32, cursor:'pointer', marginLeft:32}} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;