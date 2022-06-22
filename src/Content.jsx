import kelebek from "./img/kelebek.jpg";
import "./Content.css"
const Content = () => {
  const imgStyle = {
    display: "block",
    width: "300px",
    margin: "1rem auto",
  };
  return (
    <div className="content">
      <h2 style={{ color: "red" }}>React JS</h2>
      <p style={{ backgroundColor: "lightgreen" }}>
        Kullanıcı arabirimi tasarlamak için kullanılan bi js kütüphanesidir.
      </p>
      <img
      style={imgStyle}
        src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg"
        alt="qewq"
      />
      <img
      style={imgStyle}
       src={kelebek} 
       alt="123" />
       <p className="par1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore iure nostrum qui voluptas nam, quo facere asperiores molestias quibusdam dolore rem possimus cupiditate nulla officiis ipsam laboriosam iusto minus, totam dolor, ea aut tenetur sapiente. Doloribus error debitis quo dolore.
       </p>
    </div>
  );
};

export default Content;
