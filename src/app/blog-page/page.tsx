import Image from "next/image";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// Blog Post Data
const blogs = [
  {
    id: 1,
    image: "/Blog/blog1.jpeg",
    blogger: "Surf Auxion",
    date: "Aug 09 2020",
    title: "Mauris at orci non vulputate diam tincidunt nec.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  },
  {
    id: 2,
    image: "/Blog/blog2.jpeg",
    blogger: "Surf Auxion",
    date: "Aug 09 2020",
    title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  },
  {
    id: 3,
    image: "/Blog/blog3.jpeg",
    blogger: "Surf Auxion",
    date: "Aug 09 2020",
    title: "Sit nam congue feugiat nisl, mauris amet nisi.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
  },
];

// Sidebar Section Data
const recentPosts = [
  {
    id: 1,
    image: "/Blog/rec1.jpeg",
    title: "It is a long established fact",
    date: "Aug 09 2020",
  },
  {
    id: 2,
    image: "/Blog/rec2.jpeg",
    title: "It is a long established fact",
    date: "Aug 09 2020",
  },
  {
    id: 3,
    image: "/Blog/rec3.jpeg",
    title: "It is a long established fact",
    date: "Aug 09 2020",
  },
  {
    id: 4,
    image: "/Blog/rec4.jpeg",
    title: "It is a long established fact",
    date: "Aug 09 2020",
  },
];

// Sale and Offer Products
const saleProducts = [
  { id: 1, image: "/Blog/sale1.jpeg", title: "Elit ornare in enim mauris.", date: "Aug 09 2020" },
  { id: 2, image: "/Blog/sale2.jpeg", title: "Viverra pulvinar et enim.", date: "Aug 09 2020" },
  { id: 3, image: "/Blog/sale3.jpeg", title: "Mattis varius donec fdsfd", date: "Aug 09 2020" },
];

const offerProducts = [
  { id: 1, image: "/Blog/offer1.jpeg", name: "Duis lectus est.", price: "$12.00 - $15.00" },
  { id: 2, image: "/Blog/offer2.jpeg", name: "Sed placerat.", price: "$12.00 - $15.00" },
  { id: 3, image: "/Blog/offer3.jpeg", name: "Netus proin.", price: "$12.00 - $15.00" },
  { id: 4, image: "/Blog/offer4.jpeg", name: "Platea in.", price: "$12.00 - $15.00" },
];

const tags = ["General", "Atsanil", "Insas", "Bibsaas", "Nulla"];

const Blog = () => {
  return (
    <div>
    
      <div className="py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Blog Section */}
          <div className="flex-1">
            <div className="flex flex-col gap-6">
              {blogs.map((blog) => (
                <div key={blog.id} className="bg-white overflow-hidden w-full mx-auto rounded-xl">
                  <div className="h-[400px] w-full overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      width={280}
                      height={120}
                      objectFit="cover"
                      className="w-full h-full"
                    />
                  </div>

                  <div className="p-4 px-1">
                    <div className="flex items-center text-gray-700 text-xs mb-2">
                      <span className="flex items-center mr-4">
                        <FaPenNib className="mr-1 text-red-600" />
                        {blog.blogger}
                      </span>
                      <span className="flex items-center">
                        <FaCalendarAlt className="text-yellow-500 mr-1" />
                        {blog.date}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold mb-2 text-[#151875]">{blog.title}</h2>

                    <p className="text-gray-400 text-xs mb-4">{blog.description}</p>

                    <button className="px-1 py-1 text-sm text-[#151875] hover:text-red-500">
                      Read More
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-flex ml-1"></span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="w-full lg:w-[300px]">
            <div className="bg-white p-2">
              {/* Search Section */}
              <h2 className="text-xl font-semibold text-[#151875] mb-6">Search</h2>
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search for Posts..."
                  className="w-full p-2 pl-4 pr-10 border border-gray-300"
                />
                <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400">
                  <FaSearch />
                </span>
              </div>

              {/* Categories Section */}
              <h1 className="text-xl font-semibold text-[#151875] mb-6">Categories</h1>
              <ul className="grid grid-cols-2 gap-4 mb-6 text-[#151875] text-sm">
                <li className="hover:text-pink-500 cursor-pointer">Hobbies (14)</li>
                <li className="hover:text-pink-500 cursor-pointer">Women (21)</li>
                <li className="hover:text-pink-500 cursor-pointer">Men (21)</li>
                <li className="hover:text-pink-500 cursor-pointer">Lifestyle (18)</li>
                <li className="hover:text-pink-500 cursor-pointer">Technology (10)</li>
                <li className="hover:text-pink-500 cursor-pointer">Health (12)</li>
              </ul>

              {/* Recent Posts Section */}
              <h3 className="text-xl font-semibold text-[#151875] mb-6">Recent Posts</h3>
              {recentPosts.map((post) => (
                <div key={post.id} className="flex gap-4 mb-8">
                  <div className="w-[40] h-20">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={60}
                      height={10}
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-2/3">
                    <h6 className="text-sm text-[#151875] truncate">{post.title}</h6>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              ))}

              {/* Sale Products Section */}
              <h3 className="text-xl font-semibold text-[#151875] mb-6">Sale Products</h3>
              {saleProducts.map((product) => (
                <div key={product.id} className="flex gap-4 mb-6">
                  <div className="w-1/3">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={100}
                      height={60}
                      objectFit="cover"
                    />
                  </div>
                  <div className="w-2/3">
                    <h4 className="text-sm text-[#151875] truncate">{product.title}</h4>
                  </div>
                </div>
              ))}

              {/* Offer Products Section */}
              <h3 className="text-xl font-semibold text-[#151875] mb-6">Offer Products</h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {offerProducts.map((product) => (
                  <div key={product.id} className="flex flex-col items-center">
                    <div className="w-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={100}
                        height={60}
                        objectFit="cover"
                      />
                    </div>
                    <h4 className="text-sm font-semibold text-[#151875] mt-2 mr-8">{product.name}</h4>
                    <p className="text-xs text-gray-500 mr-8">{product.price}</p>
                  </div>
                ))}
              </div>

              {/* Follow Section */}
              <h3 className="text-xl font-semibold text-[#151875] mb-6">Follow Us</h3>
              <div className="flex gap-4 mb-6">
                <FaFacebook className="text-blue-600 cursor-pointer" />
                <FaTwitter className="text-blue-400 cursor-pointer" />
                <FaInstagram className="text-pink-600 cursor-pointer" />
              </div>

              {/* Tags Section */}
              <h3 className="text-xl font-semibold text-[#151875] mb-6">Tags</h3>
              <div className="grid grid-cols-3 gap-4">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className={`text-sm text-[#151875] ${index === 1 ? "text-pink-500" : ""} underline`}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center mt-2 mb-16">
          <Image
            src="/Blog/pagination.png"
            alt="Pagination"
            width={200}
            height={180}
          />
        </div>

           {/*Newsletter  Section */}
           <div className="flex justify-center mt-14 mb-14">
          <Image
            src="/Blog/News.png"
            alt="Newsletter"
            width={900}
            height={450}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;