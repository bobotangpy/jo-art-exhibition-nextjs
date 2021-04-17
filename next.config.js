const path = require("path");
const customStyle = `
    $heading: "Prata", "san-serif";
    $body: "Muli", "san-serif";
    
    $dark-blue: #2d3757;
    $mild-blue: #88cbdb;
    $bright-blue: #96cad9;
    $bg-blue: #d8e2ef;
    $text-blue: #33699f;
    $darker-red: #e07e71;
    $mild-red: #eca499;
    $bg-red: #d26a5f;
    $text-red: #fff1f0;
    $light-yellow: #fffcde;
    $grey: #f0f3fb;
    
    $bg-color: #fafafa;
    $text-color: #13130d;
    `;

// const dev = process.env.NODE_ENV !== "production";

// export const server = dev
//   ? "http://localhost:3000"
//   : "https://visualizing-the-civic-identity-struggle-in-hk.vercel.app/";

module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/.",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  },
  //   loaders: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       loader: "babel",
  //       query: {
  //         presets: ["es2015", "react"],
  //       },
  //     },
  //     {
  //       test: /\.json$/,
  //       exclude: /node_modules/,
  //       loader: "json",
  //     },
  //     {
  //       test: /\.scss$/,
  //       loaders: [
  //         "style-loader",
  //         "css-loader?sourceMap",
  //         `sass-loader?{"sourceMap":true,"includePaths":["app/styles"], "prependData": ${customStyle}}`
  //       ],
  //     },
  //   ],

  //   sassOptions: {
  //     includePaths: [path.join(__dirname, "styles")],
  //     prependData: `
  //     $heading: "Prata", "san-serif";
  //     $body: "Muli", "san-serif";

  //     $dark-blue: #2d3757;
  //     $mild-blue: #88cbdb;
  //     $bright-blue: #96cad9;
  //     $bg-blue: #d8e2ef;
  //     $text-blue: #33699f;
  //     $darker-red: #e07e71;
  //     $mild-red: #eca499;
  //     $bg-red: #d26a5f;
  //     $text-red: #fff1f0;
  //     $light-yellow: #fffcde;
  //     $grey: #f0f3fb;

  //     $bg-color: #fafafa;
  //     $text-color: #13130d;
  //     `,
  //   },
  poweredByHeader: false,
};
