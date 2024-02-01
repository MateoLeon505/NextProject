import NavBar from "./components/navBar";

const RootLayout = ({ children }) => {

 return (
    <html lang="en">
      <head>
        <title>Next Project1</title>
      </head>
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )

}

export default RootLayout;