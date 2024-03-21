import '../styles/global.css';
import Navigation from "../component/navigation"

export const matadata = {
  description: 'The best movies on the best framework'
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        </body>
    </html>
  )
}


{/* <RootLayout>
  <AboutUs />
</RootLayout> */}