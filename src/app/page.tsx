import Image from "next/image";
import Button from "./components/page";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#1e2237] text-white">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center pl-44">
        <div className="text-2xl font-bold">BrandName</div>
        <nav className="hidden md:flex space-x-6 pr-60">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>
          <a href="#" className="hover:text-blue-400">
            Product
          </a>
          <a href="#" className="hover:text-blue-400">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-400">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4 pr-48">
          <span className="hidden md:inline text-white">Login</span>
          <Button className="text-white bg-blue-600 hover:bg-yellow-400 hover:text-[#1e2237] font-sans">
            JOIN US
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-sm font-normal px-3 py-1 text-[#23A6F0]">
            Welcome
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
          Selling on the
          <br />
          internet like a pro
        </h1>
        <p className="text-center text-white mb-8 max-w-2xl mx-auto">
          We know how large objects will act, but things on a <br /> small scale
          just do not act that way.
        </p>
        <div className="flex justify-center space-x-4 mb-16">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Get Quote Now
          </Button>
          <Button
            variant="outline"
            className="border-white text-blue-600 hover:bg-white"
          >
            Learn More
          </Button>
        </div>

        {/* Card Section */}
        <div className="grid md:grid-cols-3 gap-8 w-[1200px] pl-40 pr-32 h-[292px] ">
          {/* Card 1 */}
          <div className="bg-white p-6  text-gray-800">
            <div className="bg-red-100 w-[50px] h-[50px] rounded-lg"></div>
            <h3 className="text-3xl font-bold mb-4">Training Courses</h3>
            <div className="w-16 h-1 bg-red-500 mb-4"></div>
            <p className="mb-4">
              The gradual accumulation of information about atomic and
              small-scale behavior...
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 text-gray-800">
          <div className="bg-green-300 w-[50px] h-[50px]  rounded-lg"></div>
            <h3 className="text-3xl font-bold mb-4">2,769 Online Courses</h3>
            <div className="w-16 h-1 bg-red-500 mb-4"></div>
            <p className="mb-4">
              The gradual accumulation of information about atomic and
              small-scale behavior...
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-400 p-6  text-white">
          <div className="bg-white w-[50px] h-[50px] rounded-lg"></div>
            <h3 className="text-3xl font-bold mb-4">Advanced Training</h3>
            <div className="w-16 h-1 bg-white mb-4"></div>
            <p className="mb-4">
              The gradual accumulation of information about atomic and
              small-scale behavior...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
