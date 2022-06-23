import kelebek from "./img/kelebek.jpg";
import external from "./img/external.png";
import variable from "./img/variable.png";
import imgExample from "./img/imgExample.png";
import imgCall from "./img/imgCall.png"
import "./Content.css";
const Content = () => {
  const codE = "<div className='content' style={{display:'flex', gap:'1rem'}}>";
  const imageExample = `<img
  style={imgStyle}
    src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg"
    alt="roses"
  />`;
  const imageImport = `
  <img style={imgStyle} src={kelebek} alt="123" />
  `
  const imgStyle = {
    display: "block",
    width: "75%",
    margin: "1rem auto",
  };
  return (
    <div className="content" style={{ display: "flex", gap: "1rem", flexWrap:"wrap"}}>
      <div style={{ width: "45%" }}>
        <h2 style={{ color: "red" }}>React JS</h2>
        <p>
          Kullanıcı arabirimi tasarlamak için kullanılan bi js kütüphanesidir.
        </p>
        <h3>React içerisinde img eklemek</h3>
        <p style={{overflow:"auto"}}>
          ■ Web üzerinde yüklü bir image'ın linkini src kısmına ekleyebiliriz.
          Örnek;
          <br />
          <span>
            <code style={{ color: "yellow"}}>{imageExample}</code>
          </span>
        </p>
        <img
          style={imgStyle}
          src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg"
          alt="roses"
        />
        <p>
          ■ Bir diğer yöntem local'de bulunan bir resmi import ederek sitemize
          eklemek. Örnek;<br />
          src klasörü içerisinde yeni bir klasör açıyoruz ve buraya resimlerimizi kaydediyoruz.
        </p>
        <img src={imgExample} alt="react folder" />
        <p>Hadi import edelim</p>
        <img style={{width: "100%"}} src={imgCall} alt="jsx code example" />
        <p>Görüldüğü üzere 3 adet image import edilmiş. Biz bunlardan kelebek olanını kullanalım. Örnek; <br /> <code style={{ color: "yellow"}}>{imageImport}</code> </p>
        <img style={imgStyle} src={kelebek} alt="123" />
        <p className="par1">
          Jsx component'lerinizde image kullanmak için yukarıda ki örnekleri kullanabilirsiniz.
        </p>
      </div>
      <div style={{ width: "50%" }}>
        <h2 style={{ color: "red" }}>React JS Styling</h2>
        <p>
          ■ React JS içerisinde inline style verilebilir. Örnek;
          <br />{" "}
          <code
            style={{
              color: "yellow",
              border: "1px solid purple",
              padding: "2px",
            }}
          >
            {codE}
          </code>
        </p>
        <p>
          ■ Ayrı bir css dosyası oluşturabilirsiniz. Fakat bu işlemde Css
          dosyanızı style verdiğiniz component'e import etmeniz gerekmekte.
          Örnek; <br />
          Content.jsx adlı bir dosyamız olsun.
          <img
            style={{ width: "100%" }}
            src={external}
            alt="external example"
          />
          Görüldüğü üzere Content.css dosyamızı Content.jsx componentimize
          import ettik.
        </p>
        <p>
          ■ Bir diğer yöntem ise variable içerisinde style değerlerimizi tutarak
          çağırma yöntemi. Örnek;
        </p>
        <img style={{ width: "100%" }} src={variable} alt="jsx code example" />
      </div>
    </div>
  );
};

export default Content;
