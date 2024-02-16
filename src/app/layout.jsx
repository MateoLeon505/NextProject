import NavBar from "../components/navBar";
import { Roboto } from "next/font/google";
import './globals.css';

export const metadata = {
  title: 'Projecto con Next js',
  description: 'Página principal de la tienda',
  keywords : 'Tienda, E-commerce, Producto, Online'
}

const roboto = Roboto ({
  weight: ["300", "400", "500"],
  style: ['italic', 'normal'],
  subsets: ['latin']

})

const RootLayout = ({ children }) => {

 return (
    <html lang="en">
      {/* <head>
        <title>Next Project1</title>
      </head> */}
      <body className={roboto.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  )

}

export default RootLayout;
