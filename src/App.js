import { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./shared/components/Loader";
import Layout from "./pages/Layout";
import "./App.css";
import PublicRoute from "./Guard/PublicRoute";
import PrivateRoute from "./Guard/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { selectIsAuth, selectToken } from "./redux/user/userSelectors";
import { currentUserThunk } from "./redux/user/userThunks";
import Notification from "./shared/NotificationToastify/Notification";
import { useAuth } from "./hooks/useAuth";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));
//const QuizListPage = lazy(() => import("./pages/QuizListPage"));
const QuizePage = lazy(() => import("./pages/QuizePage/QuizePage"));
const QuizResult = lazy(()=> import("./modules/quizPage/QuizResult"))
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const LastQuizesPage = lazy(() =>
  import("./pages/LastQuizesPage/LastQuizesPage")
);
const DiscoverPage = lazy(() => import("./pages/DiscoverPage/DiscoverPage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));
const OwnQuizPage = lazy(() => import("./pages/OwnQuizPage/OwnQuizPage"));
const CreateQuizPage = lazy(() =>
  import("./pages/CreateQuizPage/CreateQuizPage")
);
const SettingsPage = lazy(() => import("./pages/SettingsPage/SettingsPage"));
const FeedbackPage = lazy(() => import("./pages/FeedbackPage/FeedbackPage"));
const RandomQuizPage = lazy(() =>
  import("./pages/RandomQuizPage/RandomQuizPage")
);

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectIsAuth);

  useEffect(() => {
    if (!token) return;
    dispatch(currentUserThunk());
  }, [dispatch, token]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route path="/" element={<MainPage />}>
            <Route path="auth/:type" element={<PublicRoute><AuthPage /></ PublicRoute>}></Route>
            </Route>

            <Route path="/randomquiz/:ageType" element={<RandomQuizPage />}></Route>
            <Route path="/quiz/:quizId" element={<QuizePage />}></Route>
            <Route path="/quizresult" element={<QuizResult />}></Route>
            
            <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>}></Route>
            <Route path="/lastquiz" element={<PrivateRoute><LastQuizesPage /></PrivateRoute>}></Route>
            <Route path="/discover" element={<PrivateRoute><DiscoverPage /></PrivateRoute>}></Route>
            <Route path="/favorite" element={<PrivateRoute><FavoritePage /></PrivateRoute>}></Route>
            <Route path="/ownquiz" element={<PrivateRoute><OwnQuizPage /></PrivateRoute>}></Route>
            <Route path="/createquiz" element={<PrivateRoute><CreateQuizPage /></PrivateRoute>}></Route>
            <Route path="/settings" element={<PrivateRoute><SettingsPage /></PrivateRoute>}></Route>
            <Route path="/feedback" element={<FeedbackPage />}></Route>

            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Route>
        </Routes>
      </Suspense>
      <Notification />
    </>
  );
}

export default App;

// import ReactDOM from 'react-dom';
// import { Router, Route, Routes } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// import './index.css';
// // import App from './App';
// import { lazy } from 'react'

// const history = createBrowserHistory();

// const MainPage = lazy(()=> import ('./pages/MainPage/MainPage'))
// //const Page1 = lazy(()=> import ('./pages/Page1/Page1'))
// //const Page2 = lazy(()=> import ('./pages/Page2/Page2'))

// ReactDOM.render(
//   <Router history={history}>
//     <Routes>
//       <Route path="/" element={<MainPage />} />
//     </Routes>
//   </Router>,
//   document.getElementById('root')
// );

// export default App;


