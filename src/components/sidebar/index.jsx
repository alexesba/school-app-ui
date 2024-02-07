import React from 'react';
import PropTypes from 'prop-types';
import logo1 from 'images/logo1.png';

function toggleMenu(e) {
    if (!$(this).parents('#wrapper').hasClass('sidebar-collapsed')) {
      var animationSpeed = 300,
        subMenuSelector = '.sub-group-menu',
        $this = $(this),
        checkElement = $this.next();
      if (checkElement.is(subMenuSelector) && checkElement.is(':visible')) {
        checkElement.slideUp(animationSpeed, function () {
          checkElement.removeClass('menu-open');
        });
        checkElement.parent('.sidebar-nav-item').removeClass('active');
      } else if ((checkElement.is(subMenuSelector)) && (!checkElement.is(':visible'))) {
        var parent = $this.parents('ul').first();
        var ul = parent.find('ul:visible').slideUp(animationSpeed);
        ul.removeClass('menu-open');
        var parent_li = $this.parent('li');
        checkElement.slideDown(animationSpeed, function () {
          checkElement.addClass('menu-open');
          parent.find('.sidebar-nav-item.active').removeClass('active');
          parent_li.addClass('active');
        });
      }
      if (checkElement.is(subMenuSelector)) {
        e.preventDefault();
      }
    } else {
      if ($(this).attr('href') === '#') {
        e.preventDefault();
      }
    }
}

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.sideBarToggleViewRef = React.createRef();
  }

  componentDidMount() {
    $(this.sideBarToggleViewRef.current).on(
      'click',
      '.sidebar-nav-item .nav-link',
      toggleMenu,
    );
  }

  render() {
    return (
      <div className="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
        <div className="mobile-sidebar-header d-md-none">
          <div className="header-logo">
            <a href='index.html'>
              <img src={logo1} alt='logo'/>
            </a>
          </div>
        </div>
        <div className='sidebar-menu-content'>
          <ul className='nav nav-sidebar-menu sidebar-toggle-view' ref={this.sideBarToggleViewRef}>
            {this.props.children}
          </ul>
        </div>
      </div>
    )
  }
}

export default Sidebar;
