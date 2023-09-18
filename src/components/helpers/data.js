const data = [
  {
    id: 1,
    name: "MacBook Air",
    releaseYear: 2021,
    price: 999,
    description:
      "The MacBook Air, released in 2021, is a lightweight and portable laptop designed for everyday use. With its sleek design and impressive performance, it's perfect for both work and play, making it a versatile choice for users on the go.",
    category: "laptop",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664472289661",
  },
  {
    id: 2,
    name: "MacBook Pro",
    releaseYear: 2021,
    price: 1299,
    description:
      " The MacBook Pro, launched in 2021, is a high-performance laptop tailored for professionals and creative individuals. Its powerful features, including an M1 chip, ensure top-notch performance for demanding tasks and creative projects.",
    category: "laptop",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp-spacegray-select-202206_GEO_TR?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359572",
  },
  {
    id: 3,
    name: "iPhone 14 Pro Max",
    releaseYear: 2023,
    price: 1099,
    description:
      "The iPhone 14 Pro Max, released in 2023, represents the latest in smartphone technology. With advanced features and camera improvements, it offers an exceptional mobile experience, making it an ideal choice for tech enthusiasts and photography lovers.",
    category: "smartphone",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-finish-select-202209-6-7inch-deeppurple?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1663703841896",
  },
  {
    id: 4,
    name: "iPhone 14 Plus",
    releaseYear: 2023,
    price: 999,
    description:
      " The iPhone 14 Plus, introduced in 2023, boasts a powerful performance and a large, immersive display. It's perfect for users who seek both productivity and entertainment in their smartphones.",
    category: "smartphone",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-blue?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1661027942322",
  },
  {
    id: 5,
    name: "iPhone 13",
    releaseYear: 2021,
    price: 799,
    description:
      "The iPhone 13, launched in 2021, features advanced technology and camera enhancements, providing users with an exceptional smartphone experience. It's a great choice for those who value cutting-edge features in their mobile devices.",
    category: "smartphone",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-blue-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1645572386470",
  },
  {
    id: 6,
    name: "iPhone 13 Pro",
    releaseYear: 2021,
    price: 999,
    description:
      " The iPhone 13 Pro, released in 2021, is a professional-grade smartphone equipped with an advanced camera and high-performance capabilities. It's designed to meet the demands of photographers, creatives, and power users.",
    category: "smartphone",
    image:
      "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.slideshow-large_2x.jpg",
  },
  {
    id: 7,
    name: "iPad Pro",
    releaseYear: 2021,
    price: 799,
    description:
      "The iPad Pro, unveiled in 2021, is a powerful tablet featuring the M1 chip and a stunning Liquid Retina XDR display. It's a versatile device suitable for both productivity and entertainment, making it a top choice for tablet enthusiasts.",
    category: "tablet",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-13-select-cell-spacegray-202210?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1664411207213",
  },
  {
    id: 8,
    name: "iPad Air",
    releaseYear: 2021,
    price: 499,
    description:
      "The iPad Air, introduced in 2021, is a lightweight and versatile tablet designed for everyday use. Its performance, combined with a sleek design, makes it an excellent choice for various tasks and activities.",
    category: "tablet",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-wifi-spacegray-202203?wid=940&hei=1112&fmt=png-alpha&.v=1645066742664",
  },
  {
    id: 9,
    name: "iPhone 15",
    releaseYear: 2024,
    price: 1099,
    description:
      "The iPhone 15, introduced in 2024, features cutting-edge innovations and a stunning display. It's perfect for early adopters of new technology.",
    category: "smartphone",
    image:
      "https://www.apple.com/newsroom/images/2023/09/apple-debuts-iphone-15-and-iphone-15-plus/article/Apple-iPhone-15-lineup-hero-geo-230912_inline.jpg.large.jpg",
  },

  {
    id: 11,
    name: "iPhone SE",
    releaseYear: 2020,
    price: 399,
    description:
      "The iPhone SE, introduced in 2020, combines the iPhone 8 design with modern internals. It's a budget-friendly choice for Apple fans.",
    category: "smartphone",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-finish-select-202207-starlight?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1655316263356",
  },
  {
    id: 12,
    name: "iPhone 12",
    releaseYear: 2020,
    price: 799,
    description:
      "The iPhone 12, introduced in 2020, offers 5G connectivity and a Super Retina XDR display. It's ideal for media consumption.",
    category: "smartphone",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-finish-select-202207-blue?wid=2560&hei=1440&fmt=jpeg&qlt=95&.v=1662149977576",
  },

  {
    id: 14,
    name: "Apple Watch Series 8",
    releaseYear: 2023,
    price: 399,
    description:
      "The Apple Watch Series 8, launched in 2023, offers a larger display and advanced health features. It's the latest in smartwatch technology, ideal for fitness enthusiasts and individuals who want to stay connected on the go.",
    category: "others",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MP6V3ref_VW_34FR+watch-41-stainless-silver-cell-8s_VW_34FR_WF_CO_GEO_TR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683226539556",
  },
  {
    id: 15,
    name: "AirPods Pro",
    releaseYear: 2019,
    price: 249,
    description:
      " AirPods Pro, released in 2019, are premium wireless earbuds with active noise cancellation. They provide an immersive audio experience and are perfect for those who prioritize sound quality and comfort.",
    category: "others",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000",
  },
  {
    id: 16,
    name: "iMac",
    releaseYear: 2021,
    price: 1299,
    description:
      "A sleek and powerful all-in-one desktop computer with M1 chip.",
    category: "laptop",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-24-blue-selection-hero-202104?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1617492405000",
  },
  {
    id: 17,
    name: "iPad mini",
    releaseYear: 2021,
    price: 499,
    description: "A compact tablet with a beautiful Retina display.",
    category: "tablet",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-finish-select-gallery-202211-purple-wifi_AV1_FMT_WHH_GEO_EMEA?wid=1280&hei=720&fmt=p-jpg&qlt=95&.v=1670631639005",
  },
  {
    id: 18,
    name: "Mac mini",
    releaseYear: 2020,
    price: 699,
    description: "A compact desktop computer with impressive performance.",
    category: "laptop",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-mini-hero-202301_FMT_WHH?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1671503802341",
  },
  {
    id: 19,
    name: "HomePod mini",
    releaseYear: 2020,
    price: 99,
    description:
      "A compact smart speaker with powerful sound and Siri integration.",
    category: "audio",
    image:
      "https://www.apple.com/newsroom/images/product/homepod/standard/Apple_homepod-mini-white-10132020.jpg.og.jpg?202308281459",
  },
  {
    id: 20,
    name: "Apple TV 4K",
    releaseYear: 2021,
    price: 179,
    description: "A streaming device that delivers 4K HDR content and gaming.",
    category: "others",
    image:
      "https://www.apple.com/newsroom/images/product/tv/standard/Apple-TV-4K-hero-221018_big.jpg.large.jpg",
  },
  {
    id: 21,
    name: "Magic Keyboard",
    releaseYear: 2021,
    price: 149,
    description: "An advanced keyboard with trackpad for iPad and Mac.",
    category: "others",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3TQ_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628009997000",
  },
  {
    id: 22,
    name: "Apple Pencil (2nd Generation)",
    releaseYear: 2018,
    price: 129,
    description: "A stylus for precise drawing and note-taking on iPad Pro.",
    category: "others",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MU8F2?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1540596407165",
  },

  {
    id: 24,
    name: "Apple One",
    releaseYear: 2020,
    price: 14.95,
    description:
      "A subscription bundle including Apple Music, TV+, Arcade, and more.",
    category: "others",
    image:
      "https://www.apple.com/v/apple-one/d/images/meta/og__diu4z5hyr8ia_overview.png",
  },
  {
    id: 25,
    name: "AirTag",
    releaseYear: 2021,
    price: 29,
    description: "A small tracking device to keep tabs on your belongings.",
    category: "others",
    image:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-single-select-202104_FMT_WHH?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1617761673000",
  },
  {
    id: 26,
    name: "Apple Music",
    releaseYear: 2015,
    price: 9.99,
    description: "A music streaming service with a vast catalog of songs.",
    category: "others",
    image:
      "https://www.apple.com/v/apple-music/x/images/shared/og__ckjrh2mu8b2a_image.png",
  },
  {
    id: 27,
    name: "AppleCare+",
    releaseYear: 2023,
    price: 199,
    description: "An extended warranty and support service for Apple products.",
    category: "others",
    image:
      "https://www.apple.com/support/professional/shared/images/open_graph_logo.png?202302240304",
  },
];
// data.forEach((product) => {
//   product.title = `${product.name} (${product.releaseYear})`;
// });

export default data;
