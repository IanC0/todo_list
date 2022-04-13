import './App.css'

const App = () => {
  

  return (
    <div>    
      <Header />
      <main>
        <div>
          <List />
        </div>
        <div>
          <Completed />
          <Cancelled />
        </div>  
      </main>
    </div>
  )
}

let listObjects = [
{heading: "list item 1", description: "lorem"},
{heading: "list item 2", description: "lorem2"}
]
const Header = () => {
  return (
    <header id="header">
    <h1>To-Do List</h1>
    <p><q>For every minute spent organizing, an hour is earned</q> – Anonymous</p>
    </header>
  )
}
const List = () => {
  return (  
    <div id="listContainer">
      <h2>To-Do</h2>
      {listObjects.map((x, index) => {
              return (
                <ListItems key={index} heading={x.heading}  />
              )
          })}
  <NewListItem />
  </div>
  
  
  )
}
const Completed = () => {
  return (
    <div className="completedCancelled">
      <h2>Completed</h2>
    </div>
  )
}
const Cancelled = () => {
  return (
    <div className="completedCancelled">
      <h2>Cancelled</h2>
    </div>
  )
}
const ListItems = (props) => {
  return (      
  <div className="list-item" key={props.index}>
    <div className="checkbox"></div>
    <div className="listText">
      <h3>{props.heading}</h3>
      <p>test</p>
    </div>
  </div>
  )
}
const NewListItem = () => {
  return (
    <div id="newListItem">
      <h2>New Item</h2>
      <h3>Title</h3><input id="NewTitle"/>
      <h3>Description</h3><input id="NewDescr"/>
      <button onClick={()=> 
        listObjects.push(
          {heading: document.getElementById("NewTitle").value, description: document.getElementById("NewDescr").value}
        )
      }>Add To List</button>
    </div>
  )
}


export default App