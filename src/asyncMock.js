const products = [
  {
    id: "1",
    name: "Torta Ensueño",
    price: "2500",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417150/desarrollo_web/producto-1_os8f08.jpg",
    section: "tortas",
  },
  {
    id: "2",
    name: "Torta White Album",
    price: "3000",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417081/desarrollo_web/producto-3_ohyann.jpg",
    section: "tortas",
  },
  {
    id: "3",
    name: "Torta Rainbow Party",
    price: "2700",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417075/desarrollo_web/producto-4_lylxw4.webp",
    section: "tortas",
  },
  {
    id: "4",
    name: "Torta Green Lovers",
    price: "5000",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417080/desarrollo_web/producto-5_serrrj.jpg",
    section: "tortas",
  },
  {
    id: "5",
    name: "Torta Sakura",
    price: "7000",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417081/desarrollo_web/producto-6_cnlt0v.jpg",
    section: "tortas",
  },
  {
    id: "6",
    name: "Violet Evergarden",
    price: "6500",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417150/desarrollo_web/header-creaciones.jpg",
    section: "tortas",
  },
  {
    id: "7",
    name: "Macarons Stargazers",
    price: "3650",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417146/desarrollo_web/producto-7_enwyxn.jpg",
    section: "macarons",
  },
  {
    id: "8",
    name: "Macarons Barbie",
    price: "4500",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417081/desarrollo_web/producto-8_cccfqx.jpg",
    section: "macarons",
  },
  {
    id: "9",
    name: "Alfajores Cumbre Argentina",
    price: "1250",
    image:
      "https://res.cloudinary.com/dfbwcrulp/image/upload/v1676417081/desarrollo_web/producto-2_bo01mv.jpg",
    section: "alfajores",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length != 0) {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } else {
      reject("Lo sentimos estamos renovandonos :S ");
    }
  });
};

export const getOneProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length != 0) {
      const oneProduct = products.find((oneprod) => oneprod.id == id);
      setTimeout(() => {
        if (!oneProduct) {
          reject("Producto inexistente");
        } else {
          resolve(oneProduct);
        }
      }, 1500);
    } else {
      reject("Lo sentimos estamos renovandonos :S ");
    }
  });
};
