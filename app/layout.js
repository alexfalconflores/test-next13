import Navigation from '../components/Navigation'
import '../styles/globals.css'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>My first appw ith next 13</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
