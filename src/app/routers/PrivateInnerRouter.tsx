import { Navigate, Route, Routes } from 'react-router-dom';
import NotFoundResult from '../components/results/NotFoundResult';
import ConsoleLayout from '../layouts/ConsoleLayout';
import ListLivesPage from '../pages/private/ListLivesPage';
import LivesDetailsPage from '../pages/private/LivesDetailsPage';
import UserListPage from '../pages/private/UserListPage';
import UserSelfPage from '../pages/private/UserSelfPage';

const RedirectToHomePage = () => <Navigate to="/private/overview" />;

const PrivateInnerRouter = () => (
    <ConsoleLayout>
        <Routes>
            <Route element={<RedirectToHomePage />} path="" />
            <Route element={<UserListPage />} path="system/users" />
            <Route element={<UserSelfPage />} path="self" />
            <Route element={<ListLivesPage />} path="lives" />
            <Route element={<LivesDetailsPage />} path="lives/:id" />
            <Route element={<NotFoundResult />} path="*" />
        </Routes>
    </ConsoleLayout>
);

export default PrivateInnerRouter;
