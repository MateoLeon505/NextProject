import NavBar from "../components/navBar";

export const metadata = {
  title: 'Tienda Next js',
  description: 'Página principal de la tienda',
}

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
