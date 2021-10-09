function BodyCard() {

    return(
        // <!-- Main Body Card 1 Starts -->
          <div class="main_item main_body-card">

            {/* <!-- Main Nav Starts --> */}
            <div class="main_nav">
              <a href="#" class="main_nav-item main_nav-item_active"> Profile </a>
              <a href="#" class="main_nav-item"> Work History </a>
              <a href="#" class="main_nav-item"> Reports </a>
              <a href="#" class="main_nav-item"> GitHub </a>
              <a href="#" class="main_nav-item"> Skills </a>
            </div>
            {/* <!-- Main Nav Ends --> */}

            {/* <!-- Main Body Content Starts --> */}
            <div class="main_body-content">

              {/* <!-- Main Body Profile Starts --> */}
              <div class="main_body-content_item main_profile">

                <div class="main_profile_left">
                  <div class="main_pfp-and-weirdNum">
                    <div class="main_profilePic-container">
                      <img src="profile_pic_1.jpg" class="main_profilePic" />
                    </div>
                    <div class="someRandomNum_thatidk">75</div>
                  </div>
                  <div class="main_profileInfo">
                    <div class="main_profile-name"> Jessica Crow </div>
                    <div class="main_profile-designation"> FullStack Developer </div>
                    <div class="main_profile-location"> San Jose, California </div>
                  </div>
                </div>

                <div class="main_profile_right">
                  <div class="main_profile_right-item main_profile-status">
                    <div class="status-dot"></div>
                    <div class="activity-status"> Available </div>
                  </div>
                  <div class="main_profile_right-item main_profile-rate"> <span class="bold">75$</span>/h</div>
                </div>

              </div>
              {/* <!-- Main Body Porfile Ends --> */}

              <hr class="main_separator" />

              <div class="main_body-content_item">
                <h2 class="main_body_title">
                  Focus Area
                </h2>
                <div class="main_body-content_item-stuff">
                  I have experience with web development, making websites, online stores, and web-apps. The software I use to make websites ensrues responsive behaviour (so the website looks good on any screen size) and does SEO automatically.
                </div>
              </div>

              <hr class="main_separator" />

              <div class="main_body-content_item">
                <h2 class="main_body_title">
                  Skills
                </h2>
                <div class="main_body-content_item-stuff">
                  <div class="main_body-content_item-box">Laravel</div>
                  <div class="main_body-content_item-box">React</div>
                  <div class="main_body-content_item-box">Node.js</div>
                  <div class="main_body-content_item-box">JavaScript</div>
                  <div class="main_body-content_item-box">MySQL</div>
                  <div class="main_body-content_item-box">Git</div>
                  <div class="main_body-content_item-box">Symphony 3/4</div>
                  <div class="main_body-content_item-box">Vue.js</div>
                  <div class="main_body-content_item-box">TypeScript</div>
                  <div class="main_body-content_item-box">Docker</div>
                </div>
              </div>

              <hr class="main_separator" />

              <div class="main_body-content_item main_body-content_stats">
                <h2 class="main_body_title">
                </h2>
                <div class="main_body-content_item-stuff">
                  <div class="main_body-content_item-box_2">
                    <div class="box_2-image_container">
                      <img src="file_uploaded-icon.png" class="box_2-image" />
                    </div>
                    <div class="box_2-info">
                      <div class="box_2-info_number">280</div>
                      <div class="box_2-info_what">Files Uploaded</div>
                    </div>
                  </div>
                  <div class="main_body-content_item-box_2">
                    <div class="box_2-image_container">
                      <img src="projects-icon.png" class="box_2-image" />
                    </div>
                    <div class="box_2-info">
                      <div class="box_2-info_number">4</div>
                      <div class="box_2-info_what">Projects</div>
                    </div>
                  </div>
                  <div class="main_body-content_item-box_2">
                    <div class="box_2-image_container">
                      <img src="reviews-icon.png" class="box_2-image" />
                    </div>
                    <div class="box_2-info">
                      <div class="box_2-info_number">25</div>
                      <div class="box_2-info_what">Reviews</div>
                    </div>
                  </div>
                </div>
                <div class="main_body-content_item-stuff">
                  <img src="temp_stats_img.PNG" class="temp_stats_img" />
                </div>
              </div>

            </div>
            {/* <!-- Main Body Content Ends --> */}

          </div>
        //  <!-- Main Body Card 1 Ends --> 
    );

}

export default BodyCard;