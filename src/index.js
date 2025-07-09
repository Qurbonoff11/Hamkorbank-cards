import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

const cardList = [
  {
    id: 4216,
    img: "https://hamkorbank.uz/assets/images-cache/products/microloan_online/preview.04d7bece.webP",
    title: "Onlayn kredit",
    price: "100 mln so‘mgacha",
    year: "3 yilgacha",
    percentage: "32% dan boshlab",
    creditPrice: "Onlayn krediti miqdor",
    creditYear: "Onlayn krediti muddati",
    interestRate: "Foiz stavkasi",
  },
  {
    id: 7961,
    img: "https://hamkorbank.uz/assets/images-cache/products/autolight_preview.04d7bece.webP",
    title: "Auto light avtokrediti",
    price: "600 mln so‘mgacha",
    year: "5 yilgacha",
    percentage: "23,99% dan boshlab",
    creditPrice: "Kredit miqdori",
    creditYear: "Krediti muddati",
    interestRate: "Foiz stavkasi",
  },
  {
    id: 7874,
    img: "https://hamkorbank.uz/assets/images-cache/products/potreb_preview.04d7bece.webP",
    title: "Mikrokredit Plus",
    price: "100 mln so‘mgacha",
    year: "3 yilgacha",
    percentage: "32% dan boshlab",
    creditPrice: "Onlayn krediti miqdor",
    creditYear: "Onlayn krediti muddati",
    interestRate: "Foiz stavkasi",
  },
  {
    id: 1684,
    img: "https://hamkorbank.uz/assets/images-cache/products/education_preview.04d7bece.webP",
    title: "Iste’mol krediti",
    price: "200 mln so‘mgacha",
    year: "5 yilgacha",
    percentage: "27% dan boshlab",
    creditPrice: "Krediti miqdor",
    creditYear: "Krediti muddati",
    interestRate: "Foiz stavkasi",
  },
  {
    id: 3894,
    img: "https://hamkorbank.uz/assets/images-cache/products/microloan_online/preview.04d7bece.webP",
    title: "Ta’lim krediti",
    price: "shartnomaga asosan",
    year: "7 yilgacha",
    percentage: "13,5%",
    creditPrice: "Krediti miqdor",
    creditYear: "Krediti muddati",
    interestRate: "Foiz stavkasi",
  },
  {
    id: 1973,
    img: "https://hamkorbank.uz/assets/images-cache/products/sunpanel_preview.04d7bece.webP",
    title: "Quyosh panellarini sotib olish va o‘rnatish uchun iste’mol krediti",
    price: "75 mln so‘mgacha",
    year: "3 yilgacha",
    percentage: "19,5%",
    creditPrice: "Onlayn krediti miqdor",
    creditYear: "Onlayn krediti muddati",
    interestRate: "Foiz stavkasi",
  },
];

const Buttons = () => {
  return (
    <div className="buttons">
      <button className="count_btn">Hisoblash</button>
      <button className="more_btn">Ko'proq</button>
    </div>
  );
};

const CardList = (props) => {

  let {
    id,
    img,
    title,
    price,
    year,
    percentage,
    creditPrice,
    creditYear,
    interestRate,
  } = props

  return (
    <div className="card">
      <div className="text_box">
        <h1 className="title">{title}</h1>
        <div className="box">
          <div>
            <h3>{price}</h3>
            <p>{creditPrice}</p>
          </div>
          <div>
            <h3>{year}</h3>
            <p>{creditYear}</p>
          </div>
          <div>
            <h3>{percentage}</h3>
            <p>{interestRate}</p>
          </div>
        </div>
        <Buttons/>
      </div>
      <div className="img_box">
        <img className="img" src={img} />
      </div>
    </div>
  )
};

const Section = () => {
  return (
    <section className="container">
      {
        cardList.map((card) => {
          return <CardList {...card} key={card.id}/>
        })
      }
    </section>
  )
}

const Main = () => {
  return (
    <main className="main">
      <Section/>
    </main>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
