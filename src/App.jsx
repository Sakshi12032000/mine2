
import './App.css'
import Learning from '../src/components/LearningSolution/Learning';
import Quiz from './components/Quiz/Quiz.jsx';
import Timer from './components/Timer/Timer.jsx';
function App() {
  return (
    <>
      {/* <Learning/>   */}
      <Timer initialSeconds={20}/>
      <Quiz />
      </>
  )
}

export default App
