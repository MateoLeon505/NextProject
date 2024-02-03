import NavBar from "../components/navBar";
import { Roboto } from "next/font/google";

export const metadata = {
  title: 'Projecto con Next js',
  description: 'Página principal de la tienda',
  keywords : 'Tienda, E-commerce, Producto, Online'
}

Roboto({
  weight: ["300", "400", "500"],
  style: ["italic", "underline"]

})

const RootLayout = ({ children }) => {

 return (
    <html lang="en">
      {/* <head>
        <title>Next Project1</title>
      </head> */}
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )

}

export default RootLayout;
