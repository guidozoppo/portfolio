import { Footer } from "../Footer";
import { Header } from "../Header";
import { ContentMainPage } from "../MainPage/ContentMainPage";
import { HeaderMainPage } from "../MainPage/HeaderMainPage";

export function Home () {
  return (
    <>
      <Header />
      <HeaderMainPage />
      <ContentMainPage />
      <Footer />
    </>
  )
}