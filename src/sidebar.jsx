function SideBar() {
    
    return(
        // <!-- Main Sidebar Starts -->
        <div className="main_item main_left main_side-bar">
          <a href="#" className="side-bar_item side-bar_active">
            <img src="files.png" className="side-bar_item-icon" />
          </a>
          <a href="#" className="side-bar_item">
            <img src="sticky-note.png" className="side-bar_item-icon" />
          </a>
          <a href="#" className="side-bar_item">
            <img src="envelope.png" className="side-bar_item-icon" />
          </a>
          <a href="#" className="side-bar_item">
            <img src="pie-chart.png" className="side-bar_item-icon" />
          </a>
          <a href="#" className="side-bar_item side-bar_exit">
            <img src="exit.png" className="side-bar_item-icon" />
          </a>
        </div>
        // <!-- Main Sidebar Ends -->
    );

}

export default SideBar;