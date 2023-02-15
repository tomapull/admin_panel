import
React,
{
  useState,
  createContext,
  useEffect,
}
  from "react";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router";
import { getProjects } from '../../../../../../utils/api';

import ProjectItem from "./ProjectItem";
// import ModalProject Component
import ModalProject from './ModalProjectEdit/ModalProject';
import ModalTask from './ModalProjectEdit/ModalTask';

//  import ModalDetailProejct Component
import ModalProjectDetail from './ModalProjectDetail/ModalProjectDetail';

<<<<<<< HEAD
import axios from "axios";

const samplemembers = [
  {
    id: 1,
    username: "member1",
    full_name: "Member 1",
    role: "string",
    email: "member1@gmail.com",
    password: "password1",
    contact: 0,
    address: "Address 1",
    created_at: new Date(),
  },
  {
    id: 2,
    username: "member2",
    full_name: "Member 2",
    role: "string",
    email: "member2@gmail.com",
    password: "password2",
    contact: 0,
    address: "Address 2",
    created_at: new Date(),
  },
  {
    id: 3,
    username: "member3",
    full_name: "Member 3",
    role: "string",
    email: "member1@gmail.com",
    password: "password3",
    contact: 0,
    address: "Address 3",
    created_at: new Date(),
  },
  {
    id: 4,
    username: "member4",
    full_name: "Member 4",
    role: "string",
    email: "member1@gmail.com",
    password: "password4",
    contact: 0,
    address: "Address 4",
    created_at: new Date(),
  },
];
=======
>>>>>>> 0bba1fc0ca7bf8ce5ab4bd65410abdd7ae4edcc3

const sampleproject = {
  _id: {
    "$oid": "63e7b83a61f52bcb02c86fac"
  },
  title: 'Sample Project',
  description: 'Sample Description',
  status: true,
  users: [
    {
      username: "member1",
      full_name: "Member 1",
      role: "sample role",
      email: "email@gmail.com",
      password: "sample password",
      contact: 0,
      address: "Member1's Address",
      created_at: "2023-02-14T06:54:34.526Z"
    },
  ],
  tasks: [
    {
      title: "task title",
      description: "task description",
      status: true,
      due_date: "2023-02-14T06:54:34.526Z"
    }
  ],
  created_at: {
    $date: 1676150162344
  }
};

axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiaXBpbiIsImV4cCI6MTY3NjQwMjQwM30.xftGwJvjm47IV4m62pIHTFWWbASpUJOub0eX_IF-vrY';

export default function ProjectsContainer(props) {
<<<<<<< HEAD

  const [projects, setProject] = useState([{}]);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [currentTasks, setCurrentTask] = useState([{}]);
  const [currentMembers, setCurrentMembers] = useState([{}]);
  const [projectData, setProjectData] = useState(sampleproject);

  useEffect(() => {
    
    axios({
        // Endpoint to send files
      url: "https://furniture-dusky.vercel.app/projects",
      method: "GET", 
      // Attaching the form data
    })
      // Handle the response from backend here
      .then((res) => { 
        console.log(res.data.data);
        // setProject(res.data.data);
        // console.log(projects);
      })
      // Catch errors if any
      .catch((err) => { 
        console.log(err);
      });
  }, []);

=======
  const [appState, setAppState] = useState({
    loading: false,
    repos: null
  });
  const [projects, setProjects] = useState([]);
  const [cookie, setCookie, removeCookie] = useCookies(['token']);
  const navigate = useNavigate();

  useEffect(() => {
    // load projects on mount
    console.log('token', cookie.token);
    getProjects(cookie.token)
      .then(res => {
        // show projects
        if (res.data.error) {
          console.log(res.data.error);
          if (res.data.error === 'Signature has expired.') {
            removeCookie('token');
            console.log('navigate login');
            navigate('/login');
          }
        }
        else {
          // show projects
          setProjects(res.data.data);
        }
      })
      .catch(err => {
        // error occured
      });
  }, []);

  let key = 0;

  const description =
    "Lorem ipsum dolor sit amet consectetur. In nunc nunc donec bibendum risus. Amet amet est viverra condimentum sed praesent. Velit quis lectus pulvinar elementum nulla. Et rhoncus id habitant augue neque. Elementum tempor amet bibendum consectetur sem mattis est elementum sed. Odio velit egestas elit nulla nunc consequat diam morbi nec. \
  Nec arcu sagittis orci fames gravida sed etiam. Feugiat maecenas pellentesque massa tempor. Fermentum placerat dictum vivamus et accumsan consequat mauris lorem feugiat. Nisi lorem pellentesque proin lacus convallis at. Luctus massa vitae diam volutpat ipsum eget.";
  const members = [
    {
      id: 1,
      username: "member1",
      full_name: "Member 1",
      role: "string",
      email: "member1@gmail.com",
      password: "password1",
      contact: 0,
      address: "Address 1",
      created_at: new Date(),
    },
    {
      id: 2,
      username: "member2",
      full_name: "Member 2",
      role: "string",
      email: "member2@gmail.com",
      password: "password2",
      contact: 0,
      address: "Address 2",
      created_at: new Date(),
    },
    {
      id: 3,
      username: "member3",
      full_name: "Member 3",
      role: "string",
      email: "member1@gmail.com",
      password: "password3",
      contact: 0,
      address: "Address 3",
      created_at: new Date(),
    },
    {
      id: 4,
      username: "member4",
      full_name: "Member 4",
      role: "string",
      email: "member1@gmail.com",
      password: "password4",
      contact: 0,
      address: "Address 4",
      created_at: new Date(),
    },
  ];
  const tasks = [
    { name: "Task 1", description: 'This is the first Task' },
    { name: "Task 2", description: 'This is the seconde Task' },
    { name: "Task 3", description: 'This is the three Task' },
  ];
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);

  const [currentTasks, setCurrentTask] = useState([{}]);

  const [currentMembers, setCurrentMembers] = useState([{}]);

>>>>>>> 0bba1fc0ca7bf8ce5ab4bd65410abdd7ae4edcc3
  const handleAddTask = (task) => {
    let tasklist = currentTasks;

    if (JSON.stringify(tasklist[0]) === '{}') {
      tasklist = [task];
    } else {
      tasklist.push(task);
    }

    setCurrentTask(tasklist);
  };
  const handleSetTasks = (list) => {
    setCurrentTask(list);
  };
  const handleTasksEmpty = () => setCurrentTask([{}]);
  const handleAddMember = (e) => {
    let member = samplemembers[e.target.value-1];
    let memberlist = currentMembers;

    if (JSON.stringify(memberlist[0]) === '{}') {
      memberlist = [member];
    } else {
      memberlist.push(member);
    }
    setCurrentMembers(memberlist)
    console.log(currentMembers);
  };
  const handleMembersEmpty = () => setCurrentMembers([{}]);
  const handleProjectModalOpen = () => setShowProjectModal(true);
  const handleProjectModalClose = () => setShowProjectModal(false);
  const handleProjectDetailModalOpen = (e) => {
  //   axios({
  //     url: 'https://furniture-dusky.vercel.app/project/1',
  //     method: 'GET',
  // })
  //   // Handle the response from backend here
  //   .then((res) => { 
  //     if(res.data.data.length > 0) {
  //       setProjectData(res.data.data)
  //       setShowDetailModal(true);
  //     }
  //     console.log(res);
  //   })

  //   // Catch errors if any
  //   .catch((err) => { 
  //     console.log(err);
  //   });

    setShowDetailModal(true);
  } 

  const handleProjectDetailModalClose = () => setShowDetailModal(false);
  const handleTaskModalOpen = () => setShowTaskModal(true);
  const handleTaskModalClose = () => setShowTaskModal(false);

  return (
    <>
      <label className="page-title">Project Management</label>
      <div className="flex">
        <div className="w-full project-container">
          <div className="flex">
            <label className="container-title">Ongoing Projects</label>
            <div></div>
            <button className="px-4 py-2 ml-auto btn-add-project" onClick={handleProjectModalOpen}>
              + Add a Project
            </button>
          </div>
          <div className="flex flex-wrap justify-evenly items">
<<<<<<< HEAD
            {projects.map((project, index) => (
              <ProjectItem key={index} data={project} showdetail={handleProjectDetailModalOpen} />                
            ))}              
=======
            {
              projects.map(project => (
                <ProjectItem
                  key={project._id.$oid}
                  project={project}
                  showdetail={handleProjectDetailModalOpen}
                />
              ))
            }
>>>>>>> 0bba1fc0ca7bf8ce5ab4bd65410abdd7ae4edcc3
          </div>
          <ModalProject
            currenttasks={currentTasks}
            currentmembers={currentMembers}
            open={showProjectModal}
            modalCloseFunc={handleProjectModalClose}
            taskModalOpen={handleTaskModalOpen}
            addMember={handleAddMember}
            setTasks={handleSetTasks}
            memberlist={samplemembers}
          />
          <ModalProjectDetail
            data={projectData}
            open={showDetailModal}
            modalCloseFunc={handleProjectDetailModalClose} />
          <ModalTask
            open={showTaskModal}
            taskModalClose={handleTaskModalClose}
            addTask={handleAddTask}
          />
        </div>
      </div>
    </>
  );
}