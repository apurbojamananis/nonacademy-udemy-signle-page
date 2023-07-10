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
          <Tab>learnings tools</Tab>
        </TabList>

        <TabPanel>
          <div className="flex gap-5 items-top mt-10 hover:bg-DarkBlue px-5 py-3 w-[50%] min-h-[400px]">
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
                <button className="bg-gradient-to-r from-sky-500 to-pink-600 py-3 px-5 rounded">
                  Get Started
                </button>
                <button className="ml-5">Dismiss</button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="min-h-[400px] mt-10">
            <textarea
              cols="100"
              rows="1"
              className="rounded bg-DarkBlue border py-3 px-5"
              placeholder="Type your Notes"
            ></textarea>
            <br />
            <button className="bg-gradient-to-r from-sky-500 to-pink-600 py-3 px-5 rounded mt-3 ">
              Submit Notes
            </button>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="w-1/3 min-h-[400px] mt-10">
            <h3 className="text-xl font-semibold">
              Ultimate Jenkins Guide with Interview Preparation
            </h3>
            <p className="mt-5 font-medium">Hello everyone</p>
            <p className="mt-6 font-semibold">100% Free</p>
            <p className="mt-5">
              now our Paid course{" "}
              <b>${`"Ultimate Jenkins Guide with Interview Preparation "`}</b>{" "}
              is fully Free and Available on our YouTube Channel
            </p>
            <p className="mt-5">
              check this Playlist we will upload daily three videos and will be
              available fully for free on our YouTube
            </p>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="w-1/2 min-h-[400px] mt-10">
            <h2 className="text-2xl font-semibold">Learnings tools</h2>
            <h3 className="text-xl mt-3">Calendar events</h3>
            <p className="mt-5">
              Learning a little each day adds up. Research shows that students
              who make learning a habit are more likely to reach their goals.
              Set time aside to learn and get reminders using your learning
              scheduler.
            </p>
            <button className="bg-gradient-to-r from-sky-500 to-pink-600 py-3 px-5 rounded mt-3 ">
              Schedule Learning time
            </button>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AllTabs;
