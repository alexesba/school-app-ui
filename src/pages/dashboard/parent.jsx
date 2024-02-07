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

const Parent = props => (
  <div>
    <Preloader/>

    <div id="wrapper" className="wrapper bg-ash">
      <TopNavBar/>
      {/* Page Area Start Here */}
      <DashboardPageOne>

        {/* Sidebar Area Start Here */}
        <Sidebar>
          <GroupItem groupName='Students' icon='classmates'>
            <MenuItem title='Student Details' onClick={() => console.log('Move to Student Details Page')}/>
          </GroupItem>
          <GroupItem groupName='Teachers' icon='multiple-users-silhouette'>
            <MenuItem title='All Teachers' onClick={() => console.log('Move to all teachers')}/>
            <MenuItem title='Teacher Details' onClick={() => console.log('Move to Teachers details')}/>
          </GroupItem>
          <GroupItem groupName='Library' icon='books'>
            <MenuItem title='All Books' onClick={() => console.log('Move to Books Page')}/>
          </GroupItem>
          <GroupItem groupName='Class' icon='maths-class-materials-cross-of-a-pencil-and-a-ruler'>
            <MenuItem title='All Classes' onClick={() => console.log('Move to All Classes Page')}/>
          </GroupItem>
          <MenuItem title='Subject' single icon='open-book' onClick={() => console.log('Subject Paage') }/>
          <MenuItem title='Routine' single icon='checklist' onClick={() => console.log('Routine Page') }/>
          <GroupItem groupName='Exam' icon='shopping-list'>
            <MenuItem title='Exam Schedule' onClick={() => console.log('Move to Exam Schedule Page')}/>
            <MenuItem title='Exam Grades' onClick={() => console.log('Move to Exam Grades Page')}/>
          </GroupItem>

          <MenuItem title='Notice' single icon='script' onClick={() => console.log('Notice Page') }/>
          <MenuItem title='Messeage' single icon='chat' onClick={() => console.log('Messeages Page') }/>

          <MenuItem title='Map' single icon='planet-earth' onClick={() => console.log('Map Element') }/>
          <MenuItem title='Account' single icon='settings' onClick={() => console.log('Account Form') }/>
        </Sidebar>
        {/* Sidebar Area End Here */}

        <DashboardContentOne>
          {/* Dashboard Content Start Here */}

          {/* Breadcubs Area Start Here */}
          <Breadcub/>
          {/* Breadcubs Area End Here */}

          {/* Dashboard summery Start Here */}
          <DashboardContentRow>
            <DashboardSummaryOne
              number={15000}
              title='Studends'
              iconClass='classmates'
              textColor='green'
              backgroundColor='green'
            />

          <DashboardSummaryOne
            number={2250}
            title='Teachers'
            iconClass='multiple-users-silhouette'
            textColor='blue'
            backgroundColor='blue'
          />

        <DashboardSummaryOne
          number={5690}
          title='Parents'
          iconClass='couple'
          textColor='yellow'
          backgroundColor='yellow'
        />

      <DashboardSummaryOne
        number={193000}
        title='Earnings'
        iconClass='money'
        textColor='red'
        backgroundColor='red'
      />
    </DashboardContentRow>

    <DashboardContentRow>
      <Col size={6}>
        <EarningsChart/>
      </Col>
      <Col size={3}>
        <ExpensesChart/>
      </Col>
      <Col size={3}>
        <StudentsChart />
      </Col>
      <Col size={4}>
        <EventCalendar />
      </Col>
      <Col size={4}>
        <WebsiteTraffic />
      </Col>
      <Col size={4}>
        <NoticeBoard />
      </Col>

    </DashboardContentRow>
    {/* Dashboard summery Start Here */}

    {/* Social Media Start Here */}
    <DashboardContentRow>
      <SocialMediaItem
        icon='facebook-f'
        total={30000}
        backgroundColor='fb'
        title='Like us on facebook'
      />
      <SocialMediaItem
        icon='twitter'
        backgroundColor='twitter'
        total={111000}
        title='Follow us on Twitter'
      />
      <SocialMediaItem
        icon='google-plus-g'
        backgroundColor='gplus'
        total={19000}
        title='Follow us on googleplus'
      />
      <SocialMediaItem
        icon='linkedin-in'
        backgroundColor='linkedin'
        total={45000}
        title='Follow us on linkedin'

      />
    </DashboardContentRow>
    {/* Social Media End Here */}

    {/* Footer Area Start Here */}
    <Footer/>
    {/* Footer Area End Here */}

    {/* Dashboard content End Here */}
  </DashboardContentOne>

</DashboardPageOne>
{/* Page Area End Here */}
        </div>
      </div>
)

export default Parent;
