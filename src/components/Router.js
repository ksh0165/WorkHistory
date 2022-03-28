import {HashRouter as Router, Route, Routes} from 'react-router-dom';

const AppRouter = () => {
    return (
        <Routes>
        <Route path="/"element={<DayList />}/>
        <Route path="/day/:day" element={<Day />}/>
        <Route path="/create_word" element={<CreateWord />}/>
        <Route path="/create_day" element={<CreateDay />}/>
        <Route path="*" element={<EmptyPage />}/>
      </Routes>
    )
}

export default AppRouter;