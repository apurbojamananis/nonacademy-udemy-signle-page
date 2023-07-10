import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./tabs.css";

import "react-tabs/style/react-tabs.css";
import { FaClock } from "react-icons/fa";

const AllTabs = () => {
  return (
    <div className="mt-10 mx-10">
      <Tabs className="text-white ">
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Notes</Tab>
          <Tab>Announcements</Tab>
          <Tab>Reviews</Tab>
          <Tab>learnings tools</Tab>
        </TabList>

        <TabPanel>
          <div className="flex gap-5 items-top mt-2 hover:bg-DarkBlue px-5 py-3 w-[50%]">
            <div>
              <FaClock className="text-2xl"></FaClock>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Schedule learning time</h3>
              <p className="mt-2">
                Learning a little each day adds up. Research shows that students
                who make learning a habit are more likely to reach their goals.
                Set time aside to learn and get reminders using your learning
                scheduler.
              </p>
              <div className="mt-5">
                <button className="bg-gradient-to-r from-sky-500 to-pink-600 py-3 px-3 rounded">
                  Get Started
                </button>
                <button className="ml-5">Dismiss</button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Notes</h2>
        </TabPanel>
        <TabPanel>
          <h2>Announcements</h2>
        </TabPanel>
        <TabPanel>
          <h2>Reviews</h2>
        </TabPanel>
        <TabPanel>
          <h2>learnings tools</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AllTabs;
