function Header() {

    return(
        // <!-- Header Start -->

      <header>

        {/* <!-- Header Main Start --> */}
        <div className="header_item header_left header_main">
          <div className="header_logo-container">
            <img src="/logo-square (2).png" className="header_logo-image" />
          </div>
          <div className="header_title">Espello</div>
        </div>
        {/* <!-- Header Main End --> */}

        {/* <!-- Header Nav Start --> */}
        <nav className="header_item header_center header_nav">
          <a href="#" className="nav_item"> Inbox </a>
          <a href="#" className="nav_item"> Candidates </a>
          <a href="#" className="nav_item nav_item-active"> Comparision</a>
          <a href="#" className="nav_item"> Reports </a>
        </nav>
        {/* <!-- Header Nav End --> */}

        {/* <!-- Header Profile and Updates Start --> */}
        <div className="header_item header_right header_profile-n-updates">

          <div className="header_updates">

            <a href="#" className="updates_item updates_inbox">
              <img src="envelope.png" className="inbox_icon" />
            </a>

            <div className="notif_container_for_dot">
              <a href="#" className="updates_item updates_notif">
                <img src="bell.png" className="notif_icon" />
              </a>
              <div className="notif_dot"></div>
            </div>

          </div>

          <a href="#" className="header_profile">
            <div className="header_profile-info">
              <div className="user_name"> Tom Evertons </div>
              <div className="user_email"> tomdigital@mail.com </div>
            </div>
            <div className="header_pfp_Maincontainer">
              <div className="header_profilePic_container">
                <img src="user_pfp.jpg" className="user_pfp" />
              </div>
              <div className="user_status_dot"></div>
              <div className="dropdown_arrow">&#9660;</div>
            </div>
          </a>

        </div>
        {/* <!-- Header Profile and Updates End --> */}

      </header>

    //   <!-- Header End -->
    );

}

export default Header;