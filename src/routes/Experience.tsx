import { createFileRoute } from '@tanstack/react-router';
import Experience from "../components/Experience";
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Route = createFileRoute('/Experience')({
  component: RouteComponent,
})

function RouteComponent() {
  return( 
  <div className="max-w-[800px] mx-auto justify-center">
    <div className="my-3">
      <Header />
    </div>
    <div className="border border-gray-800 rounded-xl pb-10 md:mx-auto mx-2">
      <Experience />
    </div> 
    <Footer />
  </div>
  )
}
