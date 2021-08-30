import './App.css';
import Header from './components/Header';
import DayList from './components/DayList';
import Day from './components/Day';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import EmptyPage from './components/EmptyPage';
import AddMember from './components/AddMember';
import EditMember from './components/EditMember';
import AddDay from './components/AddDay';
import TimeTable from './components/TimeTable';
import MemberList from './components/MemberList';
import Member from './components/Member';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            {/* <DayList/ /> */}
            <MemberList />
            <TimeTable />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route path="/member/:memId">
            <Member />
          </Route>
          <Route path="/AddMember">
            <AddMember />
          </Route>
          <Route path="/EditMember/:memId">
            <EditMember />
          </Route>
          <Route path="/AddDay">
            <AddDay />
          </Route>
          <Route> <EmptyPage /> </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
