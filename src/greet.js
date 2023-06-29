function Greet() {
    const date=new Date();
    var a;
    if (date.getHours() > 12 && date.getHours() < 17) {
      a = "Good afternoon";
    } else if (date.getHours() > 17 || date.getHours() < 5) {
      a = "Good night";
    } else {
      a = "Good morning";
    }
  return (
    <div className="greet"><h2>{a}</h2></div>
  )
}
export default Greet