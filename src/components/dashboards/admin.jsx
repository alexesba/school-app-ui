import React from 'react';

import DashboardContentRow from '../../components/dashboardContentRow';
import DashboardSummaryOne from '../../components/dashboardSummaryOne';
import SocialMediaItem from '../../components/SocialMediaItem';
import EarningsChart from '../../components/charts/earnings';
import ExpensesChart from '../../components/charts/expenses';
import StudentsChart from '../../components/charts/students';
import EventCalendar from '../../components/widgets/eventCalendar';
import WebsiteTraffic from '../../components/widgets/websiteTraffic';
import NoticeBoard from '../../components/widgets/noticeBoard';
import Col from '../../components/col';

const DashboardAdmin = () => (
  <div>
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
  </div>
)

export default React.memo(DashboardAdmin);
