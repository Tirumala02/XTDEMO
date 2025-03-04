// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';
// import { motion, AnimatePresence } from 'framer-motion';

// const categories = [
//   {
//     "name": "Computers & Laptops",
//     "subcategories": [
//       "Desktops",
//       "Laptops",
//       "Workstations",
//       "Mini PCs",
//       "2-in-1 Devices",
//       "Gaming PCs & Laptops"
//     ]
//   },
//   {
//     "name": "Networking & Connectivity",
//     "subcategories": [
//       "Routers & Modems",
//       "Network Switches",
//       "Wi-Fi Extenders & Mesh Systems",
//       "Cables & Adapters",
//       "Wireless Network Cards",
//       "Network Security (Firewalls, VPNs)"
//     ]
//   },
//   {
//     "name": "Storage & Data Management",
//     "subcategories": [
//       "External Hard Drives",
//       "Solid State Drives (SSDs)",
//       "Network Attached Storage (NAS)",
//       "USB Flash Drives",
//       "Cloud Storage Solutions",
//       "RAID Arrays"
//     ]
//   },
//   {
//     "name": "Peripherals & Accessories",
//     "subcategories": [
//       "Keyboards",
//       "Mice & Trackpads",
//       "Monitors & Displays",
//       "Docking Stations",
//       "External Speakers & Headphones",
//       "Webcams",
//       "Printers & Scanners",
//       "PC Cases & Cooling Systems"
//     ]
//   },
//   {
//     "name": "Software & Licenses",
//     "subcategories": [
//       "Operating Systems",
//       "Productivity Software (Microsoft Office, Google Workspace)",
//       "Security Software (Antivirus, Firewalls)",
//       "Design & Creative Software (Adobe Creative Suite, etc.)",
//       "Developer Tools & IDEs",
//       "Data Backup & Recovery Software",
//       "Business Solutions (CRM, ERP)"
//     ]
//   },
//   {
//     "name": "Mobile Devices",
//     "subcategories": [
//       "Smartphones",
//       "Tablets",
//       "Smartwatches",
//       "Phone Accessories (Cases, Chargers, Screen Protectors)"
//     ]
//   },
//   {
//     "name": "Smart Home & IoT",
//     "subcategories": [
//       "Smart Speakers (Alexa, Google Home)",
//       "Smart Lighting",
//       "Smart Plugs & Switches",
//       "Home Security Systems (Cameras, Alarms)",
//       "Smart Thermostats",
//       "IoT Sensors & Gadgets"
//     ]
//   },
//   {
//     "name": "Gaming Gear",
//     "subcategories": [
//       "Gaming Consoles (PlayStation, Xbox, Nintendo)",
//       "Gaming Keyboards & Mice",
//       "Headsets & Controllers",
//       "Virtual Reality (VR) Headsets",
//       "Gaming Monitors",
//       "Gamepads & Joysticks"
//     ]
//   },
//   {
//     "name": "Business & Office IT",
//     "subcategories": [
//       "Printers & Scanners",
//       "Projectors & Presentation Tools",
//       "Conference Room Equipment",
//       "POS (Point of Sale) Systems",
//       "Collaboration Tools (Video Conferencing, Digital Whiteboards)"
//     ]
//   },
//   {
//     "name": "Data Center & Server Products",
//     "subcategories": [
//       "Servers (Rackmount, Tower)",
//       "Server Accessories",
//       "UPS (Uninterruptible Power Supply)",
//       "Server Cooling Solutions",
//       "Data Center Racks & Enclosures",
//       "Cloud Servers"
//     ]
//   },
//   {
//     "name": "Computer Components & Upgrades",
//     "subcategories": [
//       "CPUs (Processors)",
//       "Graphics Cards (GPUs)",
//       "Motherboards",
//       "Memory (RAM)",
//       "Power Supplies",
//       "Cooling Fans & Systems",
//       "PC Cases & Modding Kits",
//       "Hard Drives & SSDs"
//     ]
//   },
//   {
//     "name": "Tech Gadgets & Wearables",
//     "subcategories": [
//       "Smartwatches",
//       "Fitness Trackers",
//       "Wireless Earbuds & Headphones",
//       "Drones",
//       "Augmented Reality (AR) Glasses",
//       "Portable Power Banks",
//       "Bluetooth Speakers"
//     ]
//   },
//   {
//     "name": "Security & Surveillance",
//     "subcategories": [
//       "CCTV Cameras & Security Systems",
//       "Smart Door Locks",
//       "Surveillance Software",
//       "Access Control Systems",
//       "Alarm Systems"
//     ]
//   },
//   {
//     "name": "VR/AR & 3D Tech",
//     "subcategories": [
//       "Virtual Reality (VR) Headsets",
//       "Augmented Reality (AR) Glasses",
//       "3D Printers",
//       "3D Scanners",
//       "VR/AR Accessories"
//     ]
//   },
//   {
//     "name": "Cloud & Virtualization",
//     "subcategories": [
//       "Cloud Hosting & Services",
//       "Virtualization Software",
//       "Containers (Docker, Kubernetes)",
//       "Cloud Storage Solutions (Google Drive, Dropbox, OneDrive)"
//     ]
//   },
//   {
//     "name": "AI & Robotics",
//     "subcategories": [
//       "AI Development Kits",
//       "Robotic Kits",
//       "AI Software & Algorithms",
//       "Machine Learning Tools",
//       "Robotics Accessories"
//     ]
//   }
// ]

// const Collection = () => {
//   const { products, search, showSearch } = useContext(ShopContext);
//   const [showFilter, setShowFilter] = useState(false);
//   const [filterProducts, setFilterProducts] = useState([]);
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [selectedSubcategories, setSelectedSubcategories] = useState([]);
//   const [sortType, setSortType] = useState("relevant");
//   const [isLoading, setIsLoading] = useState(true);

//   const toggleCategory = (category) => {
//     if (selectedCategories.includes(category)) {
//       setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
//       const subcatsToRemove = categories.find((cat) => cat.name === category)?.subcategories || [];
//       setSelectedSubcategories((prev) => prev.filter((subcat) => !subcatsToRemove.includes(subcat)));
//     } else {
//       setSelectedCategories((prev) => [...prev, category]);
//     }
//   };

//   const toggleSubcategory = (subcategory) => {
//     if (selectedSubcategories.includes(subcategory)) {
//       setSelectedSubcategories((prev) => prev.filter((subcat) => subcat !== subcategory));
//     } else {
//       setSelectedSubcategories((prev) => [...prev, subcategory]);
//     }
//   };

//   const applyFilter = async () => {
//     setIsLoading(true);
//     let productsCopy = products.slice();

//     if (showSearch && search) {
//       productsCopy = productsCopy.filter((item) =>
//         item.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     if (selectedCategories.length > 0) {
//       productsCopy = productsCopy.filter((item) => selectedCategories.includes(item.category));
//     }

//     if (selectedSubcategories.length > 0) {
//       productsCopy = productsCopy.filter((item) => selectedSubcategories.includes(item.subcategory));
//     }

//     // Simulate API delay
//     await new Promise(resolve => setTimeout(resolve, 1000));

//     setFilterProducts(productsCopy);
//     setIsLoading(false);
//   };

//   const sortProduct = () => {
//     setIsLoading(true);
//     let fpCopy = filterProducts.slice();

//     switch (sortType) {
//       case "low-high":
//         setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
//         break;
//       case "high-low":
//         setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
//         break;
//       default:
//         applyFilter();
//         break;
//     }
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     applyFilter();
//   }, [selectedCategories, selectedSubcategories, search, showSearch, products]);

//   useEffect(() => {
//     sortProduct();
//   }, [sortType]);

//   return (
//     <div className="bg-gray-200 relative flex flex-col lg:flex-row gap-6 pt-6 lg:pt-10 border-t py-6 lg:py-10 px-4 lg:px-8">
//       {/* Filter Options */}
//       <div className="lg:w-1/4 xl:w-1/5 lg:sticky lg:top-10 lg:self-start">
//         <button
//           onClick={() => setShowFilter(!showFilter)}
//           className="w-full lg:hidden mb-4 py-2 px-4 bg-gray-200 rounded-md text-left flex justify-between items-center"
//         >
//           <span className="text-lg font-medium">Filters</span>
//           <img
//             className={`h-4 transition-transform duration-300 ${showFilter ? "rotate-180" : ""}`}
//             src={assets.dropdown_icon}
//             alt=""
//           />
//         </button>

//         <AnimatePresence>
//           {(showFilter || window.innerWidth >= 1024) && (
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="overflow-hidden"
//             >
//               <div className="bg-gray-100 rounded-md p-4 lg:p-6">
//                 <h2 className="text-lg font-semibold mb-4">Categories</h2>
//                 {categories.map((category) => (
//                   <div key={category.name} className="mb-4">
//                     <div className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         id={category.name}
//                         checked={selectedCategories.includes(category.name)}
//                         onChange={() => toggleCategory(category.name)}
//                         className="w-4 h-4"
//                       />
//                       <label htmlFor={category.name} className="text-sm font-medium">{category.name}</label>
//                     </div>

//                     {selectedCategories.includes(category.name) && (
//                       <div className="ml-6 mt-2">
//                         {category.subcategories.map((subcat) => (
//                           <div key={subcat} className="flex items-center gap-2 mt-1">
//                             <input
//                               type="checkbox"
//                               id={subcat}
//                               checked={selectedSubcategories.includes(subcat)}
//                               onChange={() => toggleSubcategory(subcat)}
//                               className="w-4 h-4"
//                             />
//                             <label htmlFor={subcat} className="text-sm">{subcat}</label>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1">
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
//           <Title text1={"ALL"} text2={"COLLECTIONS"} className="text-2xl sm:text-3xl mb-4 sm:mb-0" />
//           <select
//             onChange={(e) => setSortType(e.target.value)}
//             className="w-full sm:w-auto border-2 border-gray-300 text-sm px-3 py-2 rounded-md"
//           >
//             <option value="relevant">Sort by: Relevant</option>
//             <option value="low-high">Sort by: Low to High</option>
//             <option value="high-low">Sort by: High to Low</option>
//           </select>
//         </div>

//         {isLoading ? (
//           <div className="flex justify-center items-center h-64">
//             <motion.div
//               animate={{ rotate: 360 }}
//               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
//               className="w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full"
//             />
//           </div>
//         ) : (
//           <div className="flex align-middle grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
//             {filterProducts.map((item, index) => (
//               <motion.div
//                 key={item._id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//                 className='flex justify-center '
//               >
//                 <ProductItem
//                   name={item.name}
//                   id={item._id}
//                   price={item.price}
//                   image={item.image}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Collection;

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const categories = [
  {
    "name": "Computers & Laptops",
    "subcategories": [
      "Desktops",
      "Laptops",
      "Workstations",
      "Mini PCs",
      "2-in-1 Devices",
      "Gaming PCs & Laptops"
    ]
  },
  {
    "name": "Networking & Connectivity",
    "subcategories": [
      "Routers & Modems",
      "Network Switches",
      "Wi-Fi Extenders & Mesh Systems",
      "Cables & Adapters",
      "Wireless Network Cards",
      "Network Security (Firewalls, VPNs)"
    ]
  },
  {
    "name": "Storage & Data Management",
    "subcategories": [
      "External Hard Drives",
      "Solid State Drives (SSDs)",
      "Network Attached Storage (NAS)",
      "USB Flash Drives",
      "Cloud Storage Solutions",
      "RAID Arrays"
    ]
  },
  {
    "name": "Peripherals & Accessories",
    "subcategories": [
      "Keyboards",
      "Mice & Trackpads",
      "Monitors & Displays",
      "Docking Stations",
      "External Speakers & Headphones",
      "Webcams",
      "Printers & Scanners",
      "PC Cases & Cooling Systems"
    ]
  },
  {
    "name": "Software & Licenses",
    "subcategories": [
      "Operating Systems",
      "Productivity Software (Microsoft Office, Google Workspace)",
      "Security Software (Antivirus, Firewalls)",
      "Design & Creative Software (Adobe Creative Suite, etc.)",
      "Developer Tools & IDEs",
      "Data Backup & Recovery Software",
      "Business Solutions (CRM, ERP)"
    ]
  },
  {
    "name": "Mobile Devices",
    "subcategories": [
      "Smartphones",
      "Tablets",
      "Smartwatches",
      "Phone Accessories (Cases, Chargers, Screen Protectors)"
    ]
  },
  {
    "name": "Smart Home & IoT",
    "subcategories": [
      "Smart Speakers (Alexa, Google Home)",
      "Smart Lighting",
      "Smart Plugs & Switches",
      "Home Security Systems (Cameras, Alarms)",
      "Smart Thermostats",
      "IoT Sensors & Gadgets"
    ]
  },
  {
    "name": "Gaming Gear",
    "subcategories": [
      "Gaming Consoles (PlayStation, Xbox, Nintendo)",
      "Gaming Keyboards & Mice",
      "Headsets & Controllers",
      "Virtual Reality (VR) Headsets",
      "Gaming Monitors",
      "Gamepads & Joysticks"
    ]
  },
  {
    "name": "Business & Office IT",
    "subcategories": [
      "Printers & Scanners",
      "Projectors & Presentation Tools",
      "Conference Room Equipment",
      "POS (Point of Sale) Systems",
      "Collaboration Tools (Video Conferencing, Digital Whiteboards)"
    ]
  },
  {
    "name": "Data Center & Server Products",
    "subcategories": [
      "Servers (Rackmount, Tower)",
      "Server Accessories",
      "UPS (Uninterruptible Power Supply)",
      "Server Cooling Solutions",
      "Data Center Racks & Enclosures",
      "Cloud Servers"
    ]
  },
  {
    "name": "Computer Components & Upgrades",
    "subcategories": [
      "CPUs (Processors)",
      "Graphics Cards (GPUs)",
      "Motherboards",
      "Memory (RAM)",
      "Power Supplies",
      "Cooling Fans & Systems",
      "PC Cases & Modding Kits",
      "Hard Drives & SSDs"
    ]
  },
  {
    "name": "Tech Gadgets & Wearables",
    "subcategories": [
      "Smartwatches",
      "Fitness Trackers",
      "Wireless Earbuds & Headphones",
      "Drones",
      "Augmented Reality (AR) Glasses",
      "Portable Power Banks",
      "Bluetooth Speakers"
    ]
  },
  {
    "name": "Security & Surveillance",
    "subcategories": [
      "CCTV Cameras & Security Systems",
      "Smart Door Locks",
      "Surveillance Software",
      "Access Control Systems",
      "Alarm Systems"
    ]
  },
  {
    "name": "VR/AR & 3D Tech",
    "subcategories": [
      "Virtual Reality (VR) Headsets",
      "Augmented Reality (AR) Glasses",
      "3D Printers",
      "3D Scanners",
      "VR/AR Accessories"
    ]
  },
  {
    "name": "Cloud & Virtualization",
    "subcategories": [
      "Cloud Hosting & Services",
      "Virtualization Software",
      "Containers (Docker, Kubernetes)",
      "Cloud Storage Solutions (Google Drive, Dropbox, OneDrive)"
    ]
  },
  {
    "name": "AI & Robotics",
    "subcategories": [
      "AI Development Kits",
      "Robotic Kits",
      "AI Software & Algorithms",
      "Machine Learning Tools",
      "Robotics Accessories"
    ]
  }
]


const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  const [activeCategory, setActiveCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
      const subcatsToRemove = categories.find((cat) => cat.name === category)?.subcategories || [];
      setSelectedSubcategories((prev) => prev.filter((subcat) => !subcatsToRemove.includes(subcat)));
    } else {
      setSelectedCategories((prev) => [...prev, category]);
    }
  };

  const toggleSubcategory = (subcategory) => {
    if (selectedSubcategories.includes(subcategory)) {
      setSelectedSubcategories((prev) => prev.filter((subcat) => subcat !== subcategory));
    } else {
      setSelectedSubcategories((prev) => [...prev, subcategory]);
    }
  };

  const applyFilter = async () => {
    setIsLoading(true);
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      productsCopy = productsCopy.filter((item) => selectedCategories.includes(item.category));
    }

    if (selectedSubcategories.length > 0) {
      productsCopy = productsCopy.filter((item) => selectedSubcategories.includes(item.subcategory));
    }

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    setFilterProducts(productsCopy);
    setIsLoading(false);
  };

  const sortProduct = () => {
    setIsLoading(true);
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
    setIsLoading(false);
  };

  useEffect(() => {
    applyFilter();
  }, [selectedCategories, selectedSubcategories, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="relative flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t py-10">
      {/* Filter Options */}
      <div className="min-w-60 sticky top-10">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 text-gray-400"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Checkbox Filters */}
        <div className={`border border-gray-300 bg-gray-200 rounded-r-md px-5 py-3 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          {categories.map((category) => (
            <div key={category.name} className="mb-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => toggleCategory(category.name)}
                  className="w-4 h-4"
                />
                <label className="text-sm font-medium">{category.name}</label>
              </div>

              {/* Only show subcategories if the category is selected */}
              {selectedCategories.includes(category.name) && (
                <div className="ml-6">
                  {category.subcategories.map((subcat) => (
                    <div key={subcat} className="ml-6 flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedSubcategories.includes(subcat)}
                        onChange={() => toggleSubcategory(subcat)}
                        className="w-4 h-4"
                      />
                      <label className="text-sm">{subcat}</label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between items-center m-auto text-base sm:text-2xl mb-4 space-x-4">
          {/* Title Component */}
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 max-h-7 border-gray-300 text-sm px-2 py-1"
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Loading Spinner */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : (
          /* Map Products */
          <div className="flex flex-wrap gap-6 p-4">
            {filterProducts.map((item, index) => (
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;