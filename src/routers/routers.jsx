import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Mainlayout from "../layouts/MainLayout/MainLayout";
import FindTutors from "../pages/FindTutors/FindTutors";
import AddTutorials from "../pages/AddTutorials/AddTutorials";
import MyTutorials from "../pages/MyTutorials/MyTutorials";
import MyBookedTutors from "../pages/MyBookedTutors/MyBookedTutors";
import TutorDetails from "../pages/TutorDetails/TutorDetails";
import UpdateTutorial from "../pages/UpdateTutorial/UpdateTutorial";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import PrivetRoute from "./PrivetRoute";
import axios from "axios";
import TutorFindWithLanguage from "../pages/TutorFindWithLanguage/TutorFindWithLanguage";

const routers = createBrowserRouter([

    {
        path: '/',
        element: <Mainlayout ></Mainlayout>,
        errorElement: <ErrorPage ></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home ></Home>
            }, {
                path: 'find-tutors',
                element: <FindTutors ></FindTutors>,
                loader: () => fetch('https://server-side-sable-sigma.vercel.app/allTutors')
            }, {
                path: 'add-tutorials',
                element: <PrivetRoute >
                    <AddTutorials ></AddTutorials>
                </PrivetRoute>
            }, {
                path: 'my-tutorials',
                element: <PrivetRoute >
                    <MyTutorials ></MyTutorials>
                </PrivetRoute>,

            },
            {
                path: 'myBooked-tutors',
                element: <PrivetRoute >
                    <MyBookedTutors ></MyBookedTutors>
                </PrivetRoute>
            },
            {
                path: 'tutor/details/:id',
                element: <PrivetRoute >
                    <TutorDetails ></TutorDetails>
                </PrivetRoute>,
                loader: async ({ params }) => {
                    try {
                        const response = await axios.get(`https://server-side-sable-sigma.vercel.app/allTutors/${params.id}`);
                        return response.data;
                    } catch (error) {
                        console.error('Axios error:', error);
                        return null;
                    }
                }

            }, {
                path: 'update-tutorial/:id',
                element: <PrivetRoute >
                    <UpdateTutorial ></UpdateTutorial>
                </PrivetRoute>,
                loader: async ({ params }) => {
                    try {
                        const response = await axios.get(`https://server-side-sable-sigma.vercel.app/allTutors/${params.id}`);
                        return response.data;
                    } catch (error) {
                        console.error('Axios error:', error);
                        return null;
                    }
                }
            },
            {
                path: 'find-tutors/:lang',
                element: <PrivetRoute >
                    <TutorFindWithLanguage ></TutorFindWithLanguage>
                </PrivetRoute>,
                loader: async ({ params }) => {
                    try {
                        const response = await axios.get(`https://server-side-sable-sigma.vercel.app/allTutors/lang/${params.lang}`);
                        return response.data;
                    } catch (error) {
                        console.error('Axios error:', error);
                        return null;
                    }
                }
            }
            ,
            {
                path: 'register',
                element: <Registration ></Registration>
            },
            {
                path: 'login',
                element: <Login ></Login>
            }
        ]
    }

])

export default routers