import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#14213d] text-white px-6 md:px-20 py-10 text-sm">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
    
        <div className="w-full md:w-96">
          <p className="text-lg font-medium text-gray-300 mb-2">
            Our mission is to provide a free, world-class education to anyone, anywhere.
          </p>
          <p className="text-gray-400">
            Khan Academy is a 501(c)(3) nonprofit organization.{" "}
            <a href="#" className="text-white font-semibold text-lg hover:underline">Donate</a> or{" "}
            <a href="#" className="text-white font-semibold text-lg hover:underline">volunteer</a> today!
          </p>
        </div>

      
        <div className="min-w-[220px] ml-20 ">
          <h4 className="font-bold mb-2 hover:underline cursor-pointer">About</h4>
          <ul className="space-y-1 text-gray-300 whitespace-nowrap ">
            <li className="hover:underline cursor-pointer">News</li>
            <li className="flex items-center hover:underline cursor-pointer">Impact <span className="ml-1">↗</span></li>
            <li className="hover:underline cursor-pointer">Our team</li>
            <li className="hover:underline cursor-pointer">Our interns</li>
            <li className="hover:underline cursor-pointer">Our content specialists</li>
            <li className="hover:underline cursor-pointer">Our leadership</li>
            <li className="hover:underline cursor-pointer">Our supporters</li>
            <li className="hover:underline cursor-pointer">Our contributors</li>
            <li className="hover:underline cursor-pointer">Our finances</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Internships</li>
            <li className="hover:underline cursor-pointer">Cookie Preferences</li>
          </ul>
        </div>

    
        <div className="">
          <h4 className="font-bold mb-2 hover:underline cursor-pointer">Contact</h4>
          <ul className="space-y-1 text-gray-300">
            <li className="hover:underline cursor-pointer">Help center</li>
            <li className="hover:underline cursor-pointer">Support community</li>
            <li className="hover:underline cursor-pointer">Share your story</li>
            <li className="hover:underline cursor-pointer">Press</li>
          </ul>
          <h4 className="font-bold mt-4 mb-2 hover:underline cursor-pointer">Download our apps</h4>
          <div className="space-y-2">
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="w-32" />

            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-32" />
          </div>
        </div>


        <div className="min-w-[220px]">
          <h4 className="font-bold mb-2 hover:underline cursor-pointer">Courses</h4>
          <ul className="space-y-1 text-gray-300 whitespace-nowrap">
            <li className="hover:underline cursor-pointer">Math (NCERT)</li>
            <li className="hover:underline cursor-pointer">Math (Bridge)</li>
            <li className="hover:underline cursor-pointer">Math (Telangana)</li>
            <li className="hover:underline cursor-pointer">Math (Maharashtra)</li>
            <li className="hover:underline cursor-pointer">Science (NCERT)</li>
            <li className="hover:underline cursor-pointer">Science (Bridge)</li>
            <li className="hover:underline cursor-pointer">Science (Telangana)</li>
            <li className="hover:underline cursor-pointer">All boards</li>
            <li className="hover:underline cursor-pointer">Explore more</li>
            <li className="hover:underline cursor-pointer">Khan for Educators</li>
          </ul>
        </div>
      </div>

  
      <div className="pt-6 -mt-10 ">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
    
          <div className="flex flex-col   items-center gap-6 text-gray-400 ">
            <div className="flex items-center gap-2 -ml-96 text-[12px]">
              <span  >Language:</span>
              <select className="bg-[#14213d] border border-gray-600 rounded px-2 py-1 text-white">
                <option>English</option>
                <option>Hindi</option>
                <option>French</option>
                <option>Italiano</option>
              </select>
            </div>
            <div className="flex items-center gap-2 text-[12px] -ml-85">
              <span>Country:</span>
              <span role="img" aria-label="us"> U.S.</span>
              <span role="img" aria-label="india"> India</span>
              <span role="img" aria-label="mexico"> Mexico</span>
              <span role="img" aria-label="brazil"> Brazil</span>
            </div>
            <div className="text-gray-400 text-[12px] -ml-5 ">
            &copy; 2025 Khan Academy
            <span className="ml-4 text-white hover:underline cursor-pointer">Terms of use</span>
            <span className="ml-4 text-white hover:underline cursor-pointer">Privacy Policy</span>
            <span className="ml-4 text-white hover:underline cursor-pointer">Cookie Notice</span>
            <span className="ml-4 text-white hover:underline cursor-pointer">Accessibility Statement</span>
          </div>
          </div>

      
       

  
          <div className="flex gap-4 text-gray-400 text-xl flex-1  mt-20 ml-68 justify-center">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

