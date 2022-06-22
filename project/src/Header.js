const Header = () =>{
  return (//должен быть один родительский тег
    <div>
      <a href = "#s">Menu</a>
      <a href = "#s">Home</a>
      <a href = "#s">Messages</a>
    </div>
  )
}

export default Header;//чтобы компонента использовалась еще где-то нужно экспортировать
