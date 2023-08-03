/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route } from 'react-router-dom'
import Books from './pages/books';
import Login from './pages/Login';
import ActivityLogs from './pages/ActivityLogs';
import Header from './components/Header';

const App = () => {
    const token = localStorage.getItem('token')




    return (
        <>
            <Header />

            <Routes>
                <Route path="/login" element={<Login />} />
                {token && <Route path="/books" element={<Books />} />}
                {token && <Route path="/activity-logs" element={<ActivityLogs />} />}
            </Routes >
        </>
    )
}

export default App