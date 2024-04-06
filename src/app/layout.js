import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: {
    default:"AiPilot - Software Engineering",
    template:"%s | Ai Pilot",
  },
  description: 'Ai Pilot Palestine ',
  keywords:'Demandware, Saleforce Commerce Cloud Partner, SFCC, Ecommerce, HCL commerce, Mobify Partner, Shopify Partner, Payment Solutions, Credit card ecommerce solutions, Mobile , SharePoint, Open Source, Retail , AiPilot Software, Ai Pilot Palestine, Custom, Digital Commerce, Omnichannel Services, J2EE, .Net, PHP, B2B eCommerce, B2C eCommerce, SAP Hybris, Magento, NopCommerce, Business to Business eCommerce, Business to Consume eCommerce, Web Design, Certified Salesforce Commerce Cloud Consultants'
  };


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
            <Navbar/>
            {children}
            <Footer/>
        </div>
      </body>
    </html>
  )
}