import React from 'react';

class NoticeBoard extends React.Component {
  render() {
    return(
      <div className="card dashboard-card-six pd-b-20">
        <div className="card-body">
          <div className="heading-layout1 mg-b-17">
            <div className="item-title">
              <h3>Notice Board</h3>
            </div>
            <div className="dropdown">
              <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                aria-expanded="false">...</a>

              <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#"><i
                    className="fas fa-times text-orange-red"></i>Close</a>
                <a className="dropdown-item" href="#"><i
                    className="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                <a className="dropdown-item" href="#"><i
                    className="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
              </div>
            </div>
          </div>
          <div className="notice-box-wrap">
            <div className="notice-list">
              <div className="post-date bg-skyblue">16 June, 2019</div>
              <h6 className="notice-title"><a href="#">Great School manag mene esom text of the
                  printing.</a></h6>
              <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
            </div>
            <div className="notice-list">
              <div className="post-date bg-yellow">16 June, 2019</div>
              <h6 className="notice-title"><a href="#">Great School manag printing.</a></h6>
              <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
            </div>
            <div className="notice-list">
              <div className="post-date bg-pink">16 June, 2019</div>
              <h6 className="notice-title"><a href="#">Great School manag meneesom.</a></h6>
              <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
            </div>
            <div className="notice-list">
              <div className="post-date bg-skyblue">16 June, 2019</div>
              <h6 className="notice-title"><a href="#">Great School manag mene esom text of the
                  printing.</a></h6>
              <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
            </div>
            <div className="notice-list">
              <div className="post-date bg-yellow">16 June, 2019</div>
              <h6 className="notice-title"><a href="#">Great School manag printing.</a></h6>
              <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
            </div>
            <div className="notice-list">
              <div className="post-date bg-pink">16 June, 2019</div>
              <h6 className="notice-title"><a href="#">Great School manag meneesom.</a></h6>
              <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NoticeBoard;
