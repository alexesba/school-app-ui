import React from 'react';
import TopNavBar from '../../components/topNavbar';
import DashboardPageOne from '../../components/dashboardPageOne';
import DashboardContentOne from '../../components/dashboardContentOne';
import Sidebar from '../../components/sidebar';
import Breadcub from '../../components/breadcub';
import Preloader from '../../components/preloader';
import DashboardContentRow from '../../components/dashboardContentRow';
import DashboardSummaryOne from '../../components/dashboardSummaryOne';
import SocialMediaItem from '../../components/SocialMediaItem';
import Footer from '../../components/footer';
import EarningsChart from '../../components/charts/earnings';
import ExpensesChart from '../../components/charts/expenses';
import StudentsChart from '../../components/charts/students';
import EventCalendar from '../../components/widgets/eventCalendar';
import WebsiteTraffic from '../../components/widgets/websiteTraffic';
import NoticeBoard from '../../components/widgets/noticeBoard';
import Col from '../../components/col';
import GroupItem from '../../components/sidebar/groupItem';
import MenuItem from '../../components/sidebar/item';
import * as studentPaths from '../../constants/students/paths';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';

const Student = props => (
  <div>
    <Preloader />

    <div id="wrapper" className="wrapper bg-ash">
      <TopNavBar />
      {/* Page Area Start Here */}
      <DashboardPageOne>

        {/* Sidebar Area Start Here */}
        <Sidebar>
          <MenuItem title='Transport' single icon='bus-side-view' onClick={() => console.log('Transport Page')} />
          <MenuItem title='Notice' single icon='script' onClick={() => console.log('Notice Page')} />
          <MenuItem title='Messeage' single icon='chat' onClick={() => console.log('Messeages Page')} />
          <MenuItem title='Map' single icon='planet-earth' onClick={() => console.log('Map Element')} />
          <MenuItem title='Account' single icon='settings' onClick={() => console.log('Account Form')} />
        </Sidebar>
        {/* Sidebar Area End Here */}

        <DashboardContentOne>
          {/* Dashboard Content Start Here */}

          {/* Breadcubs Area Start Here */}
          <Breadcub {...props} paths={studentPaths} />
          {/* Breadcubs Area End Here */}
          <Link to="/app"> root </Link>
          <Link to="/app/users">Users </Link>
          <Link to="/app/users/1/edit">Edit User </Link>

          <Routes>
            <Route path="/app" element={<div> default </div>} />
            <Route path="/app/users" element={<div> HASTA PASANDA</div>} />
            <Route
              path="/app/users/:id/edit"
              element={<div> Edit User </div>}
            />
          </Routes>

          {/* Footer Area Start Here */}
          <Footer />
          {/* Footer Area End Here */}

          {/* Dashboard content End Here */}
        </DashboardContentOne>

      </DashboardPageOne>
      {/* Page Area End Here */}
    </div>
  </div>
)

export default Student;
