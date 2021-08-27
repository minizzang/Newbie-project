import './App.css';
import Header from './components/Header';
import DayList from './components/DayList';
import Day from './components/Day';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import EmptyPage from './components/EmptyPage';
import AddTodo from './components/AddTodo';
import AddDay from './components/AddDay';
import TimeTable from './components/TimeTable';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route path="/AddTodo">
            <AddTodo />
          </Route>
          <Route path="/AddDay">
            <AddDay />
          </Route>
          <Route> <EmptyPage /> </Route>
        </Switch>
        {/* <TimeTable /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
