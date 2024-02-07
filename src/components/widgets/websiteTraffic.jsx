import React from 'react';

class WebsiteTraffic extends React.Component {
  render() {
    return(
      <div className="card dashboard-card-five pd-b-20">
        <div className="card-body pd-b-14">
          <div className="heading-layout1">
            <div className="item-title">
              <h3>Website Traffic</h3>
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
          <h6 className="traffic-title">Unique Visitors</h6>
          <div className="traffic-number">2,590</div>
          <div className="traffic-bar">
            <div className="direct" data-toggle="tooltip" data-placement="top" title="Direct">
            </div>
            <div className="search" data-toggle="tooltip" data-placement="top" title="Search">
            </div>
            <div className="referrals" data-toggle="tooltip" data-placement="top" title="Referrals">
            </div>
            <div className="social" data-toggle="tooltip" data-placement="top" title="Social">
            </div>
          </div>
          <div className="traffic-table table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td className="t-title pseudo-bg-Aquamarine">Direct</td>
                  <td>12,890</td>
                  <td>50%</td>
                </tr>
                <tr>
                  <td className="t-title pseudo-bg-blue">Search</td>
                  <td>7,245</td>
                  <td>27%</td>
                </tr>
                <tr>
                  <td className="t-title pseudo-bg-yellow">Referrals</td>
                  <td>4,256</td>
                  <td>8%</td>
                </tr>
                <tr>
                  <td className="t-title pseudo-bg-red">Social</td>
                  <td>500</td>
                  <td>7%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default WebsiteTraffic;
