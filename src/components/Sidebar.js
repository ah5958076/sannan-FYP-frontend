import React, { useEffect, useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import handleSideBar from "../utils/manageSideBarHelper";
import useIsMobile from "../hooks/useIsMobile";
import SidebarLink from "./SidebarLink";
import { getCartData } from '../Apis/ecommerceApis/getCartDataApis.js';
import { addToCart, resetCart, removeFromCart } from '../ReduxToolKit/CartSlice.js';

// import { addToCart, resetCart, removeFromCart } from '../../ReduxToolKit/CartSlice';



const Sidebar = () => {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart) || { cart: [] };
  const [cartProducts, setCartProducts] = useState([]);
  const [error, setError] = useState(null);

  const cart = cartData.cart[0] || [];
  console.log('NavBar cart:', cart);
  
  const storedResponse = JSON.parse(localStorage.getItem("credential"));
console.log("Cart stored response:", storedResponse?._id);

  let userId = storedResponse?._id;

  const cartQuantity = cart.length  || null;
  console.log('NavBar cartQuantity:', cartQuantity);
  useEffect(() => {
    fetchCart();

  }, []);

  const fetchCart = async () => {
    try {
      const response = await getCartData(userId);
      if (response && response.cartProduct) {
        setCartProducts(response.cartProduct);
        dispatch(addToCart(response.cartProduct));
      } else {
        setCartProducts([]);
      }
    } catch (err) {
      console.error("Error fetching cart data:", err);
      setError("No Product Selected Yet.");
      setCartProducts([]);
    }
  };
console.log('cartProducts:', cartProducts)

  const isMobile = useIsMobile();
  const [scrollable, setScrollable] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollable(scrollPosition > 15);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollable]);

  const state = useSelector((state) => {
    return state.bar;
  });
  if (!state.status) return null;

  
  const email = storedResponse.email;
  if (email==="admin@gmail.com") {
    
  }

  const menuItems = [
    { permission: "general", label: "General", icon: null, link: null, type: "heading" },
    { permission: "dashboard", label: "Dashboard", icon: "fa-chart-line", link: "/vendor/dashboard", type: "item" },
    { permission: "home", label: "Home", icon: "fa-house", link: "/home", type: "item" },
    { permission: "profile", label: "Profile", icon: "fa-user", link: "/vendor/1/profile", type: "item" },
    { permission: "chats", label: "Chats", icon: "fa-comments", link: "/Chat", type: "item" },
    { permission: "product", label: "Product", icon: null, link: null, type: "heading" },
    { permission: "products", label: "Products", icon: "fa-box-archive", link: "/product", type: "item" },
    { permission: "all_products", label: "All Products", icon: "fa-table-list", link: "/product/all", type: "item" },
    { permission: "add_products", label: "Add Products", icon: "fa-cart-plus", link: "/product/create", type: "item" },
    { permission: "cart", label: "Cart", icon: "fa-cart-shopping", link: "/cart", type: "item", badge: cartQuantity },
    { permission: "posts", label: "Posts", icon: null, link: null, type: "heading" },
    { permission: "posts", label: "Posts", icon: "fa-clipboard-question", link: "/post", type: "item" },
    { permission: "my_posts", label: "My Posts", icon: "fa-person-circle-question", link: "/post/mypost", type: "item" },
    { permission: "ask_question", label: "Ask Question", icon: "fa-file-circle-question", link: "/question/create", type: "item" },
    { permission: "service", label: "Service", icon: null, link: null, type: "heading" },
    { permission: "service", label: "Service", icon: "fa-gear", link: "/service", type: "item" },
    { permission: "create_service", label: "Create service", icon: "fa-folder-plus", link: "/service/create", type: "item" },
    { permission: "all_services", label: "All Services", icon: "fa-list", link: "/service/all", type: "item" },
    { permission: "vendor", label: "Vendor", icon: null, link: null, type: "heading" },
    { permission: "vendor", label: "Vendor", icon: "fa-store", link: "/vendor", type: "item" },
    { permission: "order", label: "Order", icon: null, link: null, type: "heading" },
    { permission: "order", label: "Order", icon: "fa-truck-ramp-box", link: "/order/all", type: "item" },
    { permission: "feedback", label: "Feedback", icon: null, link: null, type: "heading" },
    { permission: "feedback", label: "Feedback", icon: "fa-comment-dots", link: "/feedback", type: "item" },
    { permission: "complain", label: "Complain", icon: null, link: null, type: "heading" },
    { permission: "complain", label: "Complain", icon: "fa-file-circle-exclamation", link: "/complain", type: "item" },
  ];

  return (
    <>
      <div
        id="sidebar"
        className={
          (isMobile ? "sm-close" : "lg-close ") +
          " bg-primary-700 py-3 overflow-hidden " +
          (scrollable ? "" : "")
        }
      >
        <div className=" px-3 flex justify-end text-white">
          <i
            className={(isMobile ? " " : "hidden") + " fa-solid fa-xmark"}
            id="sidebar-close-btn"
            onClick={() => {
              handleSideBar(isMobile);
            }}
          ></i>
        </div>
        <ul className="items-center">
          {menuItems?.map((item, index) => (
            <SidebarLink key={index} menuItem={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
