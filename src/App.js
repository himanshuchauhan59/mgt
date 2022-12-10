import Navbar from './Component/Navbar';
import './App.css';
var name = <div>hello himanshu</div>;
const detail = {
  name: "himanshu",
  Navbarname : "Mgt",
  author:{
    name: "hello",
    Navbarname: "auth"
  }
};

 function Main() {
  return (
    <div className="container-fluid my-2">
      <Navbar name={detail.name} Navbarname={detail.Navbarname} author={detail.author} />
      <div className='container'>
        <h1>{name}</h1>
      </div>
    </div>
  );
}

export default Main;

