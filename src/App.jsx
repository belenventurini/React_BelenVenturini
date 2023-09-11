
import MainLayout from './layout/MainLayout';
import MainRouter from './routes/MainRouter';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {


  return (
      <MainLayout>
        <MainRouter/>
      </MainLayout>
  )
}
export default App

//<ItemListContainer  greeting='bienbenidos a GO!'/>
