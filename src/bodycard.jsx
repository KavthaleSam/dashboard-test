import BarChart from "./ChartTypes/bar";

const BodyCard = ({user}) =>{
    // console.log(user);
  return(
      // <!-- Main Body Card 1 Starts -->
        <div className="main_item main_body-card">

          {/* <!-- Main Nav Starts --> */}
          <div className="main_nav">
            <a href="#" className="main_nav-item main_nav-item_active"> Profile </a>
            <a href="#" className="main_nav-item"> Work History </a>
            <a href="#" className="main_nav-item"> Reports </a>
            <a href="#" className="main_nav-item"> GitHub </a>
            <a href="#" className="main_nav-item"> Skills </a>
          </div>
          {/* <!-- Main Nav Ends --> */}

          {/* <!-- Main Body Content Starts --> */}
          <div className="main_body-content">

            {/* <!-- Main Body Profile Starts --> */}
            <div className="main_body-content_item main_profile">

              <div className="main_profile_left">
                <div className="main_pfp-and-weirdNum">
                  <div className="main_profilePic-container">
                    <img src={user.avatar_url} className="main_profilePic" />
                  </div>
                  <div className="someRandomNum_thatidk">{user.followers}</div>
                </div>
                <div className="main_profileInfo">
                  <div className="main_profile-name"> {user.username} </div>
                  <div className="main_profile-designation"> {user.name} </div>
                  <div className="main_profile-location"> San Jose, California </div>
                </div>
              </div>

              <div className="main_profile_right">
                <div className="main_profile_right-item main_profile-status">
                  <div className="status-dot"></div>
                  <div className="activity-status"> Available </div>
                </div>
                <div className="main_profile_right-item main_profile-rate"> <span className="bold">75$</span>/h</div>
              </div>

            </div>
            {/* <!-- Main Body Porfile Ends --> */}

            <hr className="main_separator" />

            <div className="main_body-content_item">
              <h2 className="main_body_title">
                Focus Area
              </h2>
              <div className="main_body-content_item-stuff">
                {user.bio}
              </div>
            </div>

            <hr className="main_separator" />

            <div className="main_body-content_item">
              <h2 className="main_body_title">
                Skills
              </h2>
              <div className="main_body-content_item-stuff">
                {user.skills.map((skill, id) => 
                  <div className="main_body-content_item-box" key={id}>{skill}</div>
                )}
              </div>
            </div>

            <hr className="main_separator" />

            <div className="main_body-content_item main_body-content_stats">
              <h2 className="main_body_title">
              </h2>
              <div className="main_body-content_item-stuff">
                <div className="main_body-content_item-box_2">
                  <div className="box_2-image_container">
                    <img src="file_uploaded-icon.png" className="box_2-image" />
                  </div>
                  <div className="box_2-info">
                    <div className="box_2-info_number">280</div>
                    <div className="box_2-info_what">Files Uploaded</div>
                  </div>
                </div>
                <div className="main_body-content_item-box_2">
                  <div className="box_2-image_container">
                    <img src="projects-icon.png" className="box_2-image" />
                  </div>
                  <div className="box_2-info">
                    <div className="box_2-info_number">{user.repos.length}</div>
                    <div className="box_2-info_what">Repositories</div>
                  </div>
                </div>
                <div className="main_body-content_item-box_2">
                  <div className="box_2-image_container">
                    <img src="reviews-icon.png" className="box_2-image" />
                  </div>
                  <div className="box_2-info">
                    <div className="box_2-info_number">25</div>
                    <div className="box_2-info_what">Reviews</div>
                  </div>
                </div>
              </div>
              <div className="main_body-content_item-stuff">
                {/* <img src="temp_stats_img.PNG" className="temp_stats_img" /> */}
                  <BarChart />
              </div>
            </div>

          </div>
          {/* <!-- Main Body Content Ends --> */}

        </div>
      //  <!-- Main Body Card 1 Ends --> 
  );

}

export default BodyCard;