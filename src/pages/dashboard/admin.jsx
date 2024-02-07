import React, { useEffect } from 'react';
import TopNavBar from '../../components/topNavbar';
import DashboardPageOne from '../../components/dashboardPageOne';
import DashboardContentOne from '../../components/dashboardContentOne';
import Sidebar from '../../components/sidebar';
import Breadcub from '../../components/breadcub';
import Preloader from '../../components/preloader';
import Footer from '../../components/footer';
import GroupItem from '../../components/sidebar/groupItem';
import MenuItem from '../../components/sidebar/item';
import AdminRoutes from '../../routes/admin';
import * as studentPaths from '../../constants/students/paths';
import * as teacherPaths from '../../constants/teachers/paths';
import * as parentPaths from '../../constants/parents/paths';
import * as programPaths from '../../constants/programs/paths';
import * as coursePaths from '../../constants/courses/paths';
import * as levelProgramPaths from '../../constants/level_programs/paths';
import * as classRoutinePaths from '../../constants/classRoutines/paths';
import AlertContainer from '../../components/Alert';

const Admin = props => {
  useEffect(() => {
    // @ts-ignore
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade',
    });
  }, []);
  return (
    <div>
      <Preloader />

      <div id="wrapper" className="wrapper bg-ash">
        <TopNavBar {...props} homePath={studentPaths.home} />
        {/* Page Area Start Here */}
        <DashboardPageOne>

          {/* Sidebar Area Start Here */}
          <Sidebar>
            <GroupItem groupName="Students" icon="classmates">
              <MenuItem title="All Studens" path={studentPaths.index} />
              <MenuItem
                title="Student Promotion"
                onClick={() => console.warn('Move to Student Promotion Page')}
              />
            </GroupItem>
            <GroupItem groupName="Teachers" icon="multiple-users-silhouette">
              <MenuItem title="All Teachers" path={teacherPaths.index} />
              <MenuItem title="Add Teacher" path={teacherPaths.add} />
              <MenuItem title="Payments" path={teacherPaths.payments} />
              <MenuItem title="Add Class Routine" path={classRoutinePaths.add} />
            </GroupItem>
            <GroupItem groupName="Parents" icon="couple">
              <MenuItem title="All Parents" path={parentPaths.index} />
              <MenuItem title="Add Parent" path={parentPaths.add} />
            </GroupItem>
            <GroupItem groupName="Programs" icon="settings-work-tool">
              <MenuItem title="All Programs" path={programPaths.index} />
              <MenuItem title="Add Program" path={programPaths.add} />
              <MenuItem
                title="All Level Programs"
                path={levelProgramPaths.index}
              />
              <MenuItem title="Add Level Program" path={levelProgramPaths.add} />
              <MenuItem title="Add Course" path={coursePaths.add} />
              <MenuItem title="All Courses" path={coursePaths.index} />
              <MenuItem title="Add Course Level Program" />
            </GroupItem>
            {/* <GroupItem groupName="Library" icon="books"> */}
            {/*   <MenuItem */}
            {/*     title="All Books" */}
            {/*     onClick={() => console.warn('Move to Books Page')} */}
            {/*   /> */}
            {/*   <MenuItem */}
            {/*     title="Add New Book" */}
            {/*     onClick={() => console.warn('Move to Add Book Page')} */}
            {/*   /> */}
            {/*   <MenuItem */}
            {/*     title="Add New Book" */}
            {/*     onClick={() => console.warn('Move to Add Book Page')} */}
            {/*   /> */}
            {/* </GroupItem> */}
            {/* <GroupItem groupName="Acconunt" icon="technological"> */}
            {/*   <MenuItem */}
            {/*     title="All Fees Collection" */}
            {/*     onClick={() => console.warn('Move to all fees collection Page')} */}
            {/*   /> */}
            {/*   <MenuItem */}
            {/*     title="Expenses" */}
            {/*     onClick={() => console.warn('Move to List Expenses Page')} */}
            {/*   /> */}
            {/*   <MenuItem */}
            {/*     title="Add Expenses" */}
            {/*     onClick={() => console.warn('Move to Add Expenses Page')} */}
            {/*   /> */}
            {/* </GroupItem> */}
            <GroupItem
              groupName="Class"
              icon="maths-class-materials-cross-of-a-pencil-and-a-ruler"
            >
              <MenuItem
                title="All Classes"
                onClick={() => console.warn('Move to All Classes Page')}
              />
              <MenuItem
                title="Add New Class"
                onClick={() => console.warn('Move to Add New Class Page')}
              />
            </GroupItem>
            <MenuItem
              title="Subject"
              single
              icon="open-book"
              onClick={() => console.warn('Subject Page')}
            />
            <MenuItem
              title="Routine"
              single
              icon="checklist"
              onClick={() => console.warn('Routine Page')}
            />
            <MenuItem
              title="Class Routine"
              single
              icon="calendar"
              onClick={() => console.warn('Class Routine Page')}
            />
            {/* <MenuItem */}
            {/*   title="Attendence" */}
            {/*   single */}
            {/*   icon="checklist" */}
            {/*   onClick={() => console.warn('Attendence Page')} */}
            {/* /> */}
            {/* <GroupItem groupName="Exam" icon="shopping-list"> */}
            {/*   <MenuItem */}
            {/*     title="Exam Schedule" */}
            {/*     onClick={() => console.warn('Move to Exam Schedule Page')} */}
            {/*   /> */}
            {/*   <MenuItem */}
            {/*     title="Exam Grades" */}
            {/*     onClick={() => console.warn('Move to Exam Grades Page')} */}
            {/*   /> */}
            {/* </GroupItem> */}

            {/* <MenuItem */}
            {/*   title="Transport" */}
            {/*   single */}
            {/*   icon="bus-side-view" */}
            {/*   onClick={() => console.warn('Transport Page')} */}
            {/* /> */}
            {/* <MenuItem */}
            {/*   title="Notice" */}
            {/*   single */}
            {/*   icon="script" */}
            {/*   onClick={() => console.warn('Notice Page')} */}
            {/* /> */}
            {/* <MenuItem */}
            {/*   title="Messeage" */}
            {/*   single */}
            {/*   icon="chat" */}
            {/*   onClick={() => console.warn('Messeages Page')} */}
            {/* /> */}
            {/*  */}
            {/* <GroupItem groupName="UI Elements" icon="menu-1"> */}
            {/*   <MenuItem */}
            {/*     title="Alert" */}
            {/*     onClick={() => console.warn('Show Alert Page')} */}
            {/*   /> */}
            {/*   <MenuItem */}
            {/*     title="Button" */}
            {/*     onClick={() => console.warn('Show Buttons Page')} */}
            {/*   /> */}
            {/*   <MenuItem */}
            {/*     title="Grid" */}
            {/*     onClick={() => console.warn('Show Grid Element')} */}
            {/*   /> */}
            {/*   <MenuItem */}
            {/*     title="Modal" */}
            {/*     onClick={() => console.warn('Show Modal Element')} */}
            {/*   /> */}
            {/*   <MenuItem */}
            {/*     title="Progress Bar" */}
            {/*     onClick={() => console.warn('Show Progress Bar Elements')} */}
            {/*   /> */}
            {/*   <MenuItem */}
            {/*     title="Tab" */}
            {/*     onClick={() => console.warn('Show Tab Element')} */}
            {/*   /> */}
            {/*   <MenuItem */}
            {/*     title="Widget" */}
            {/*     onClick={() => console.warn('Show Widget Element')} */}
            {/*   /> */}
            {/* </GroupItem> */}
            {/*  */}
            {/* <MenuItem */}
            {/*   title="Map" */}
            {/*   single */}
            {/*   icon="planet-earth" */}
            {/*   onClick={() => console.warn('Map Element')} */}
            {/* /> */}
            {/* <MenuItem */}
            {/*   title="Account" */}
            {/*   single */}
            {/*   icon="settings" */}
            {/*   onClick={() => console.warn('Account Form')} */}
            {/* /> */}
          </Sidebar>
          {/* Sidebar Area End Here */}

          <DashboardContentOne>
            <AlertContainer />
            {/* Dashboard Content Start Here */}

            {/* Breadcubs Area Start Here */}
            <Breadcub {...props} paths={studentPaths} />
            {/* Breadcubs Area End Here */}

            <AdminRoutes />

            {/* Footer Area Start Here */}
            <Footer />
            {/* Footer Area End Here */}

            {/* Dashboard content End Here */}
          </DashboardContentOne>

        </DashboardPageOne>
        {/* Page Area End Here */}
      </div>
    </div>
  );
};

export default Admin;
