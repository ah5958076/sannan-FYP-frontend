// components
import LandingPage from '../components/landing-page/LandingPage';
import UserProfile from '../components/UserProfile';
import Home from '../components/Home';
// auth components
import Signup from '../components/auth/Signup'
import VendorSingup from '../components/auth/VendorSingup';
import Login from '../components/auth/Login'
import PasswordRecovery from '../components/auth/PasswordRecovery'
import ChangePassword from '../components/auth/ChangePassword'
import AdminDashboard from '../components/auth/AdminDashboard';
import AdminProfile from '../components/auth/AdminProfile';
// product components
import ProductList from '../components/product/ProductList';
import ProductDescription from '../components/product/ProductDescription';
import CreateProduct from '../components/product/CreateProduct';
import EditProduct from '../components/product/EditProduct';
import ProductTable from '../components/product/ProductTable';
// chat box components
import MessageBox from '../components/chat-box/MessageBox';
import Chat from '../components/chat/Chat';


// contact compoenets
import ContactList from '../components/contact/ContactList';
import CreateContact from '../components/contact/CreateContact';
// post components
import PostList from '../components/post/PostList';
import MyPost from '../components/post/MyPosts';
import PostDescription from '../components/post/PostDescription';
// cart components
import OrderForm from '../components/cart/OrderForm';
import Cart from '../components/cart/Cart';
// question components
import EditQuestion from '../components/question/EditQuestion';
import CreateQuestion from '../components/question/CreateQuestion';
// service components
import ServiceList from '../components/service/ServiceList';
import ServiceDescription from '../components/service/ServiceDescription';
import ServiceBuyForm from '../components/service/ServiceBuyForm';
import CreateService from '../components/service/CreateService';
import EditService from '../components/service/EditService';
import ServiceTable from '../components/service/ServiceTable';
// vendor components
import VendorDescripiton from '../components/vendor/VendorDescripiton';
import VendorProfile from '../components/vendor/VendorProfile';
import VendorTable from '../components/vendor/VendorTable';
import VendorDashboard from '../components/auth/VendorDashboard';
// order component
import OrderTable from '../components/order/OrderTable';
// FeedBack components
import FeedbackTable from '../components/feedback/FeedbackTable';
// Complain components
import ComplainTable from '../components/complain/ComplainTable';




const routes = [
    { path: '/', element: <LandingPage />, roles: ['all'] },
    { path: '/home', element: <Home />, roles: ['user', 'vendor', 'admin'] },
    // Auth Routes
    { path: '/register', element: <Signup />, roles: ['all'] },
    { path: '/vendor/register', element: <VendorSingup />, roles: ['all'] },
    { path: '/auth', element: <Login />, roles: ['all'] },
    { path: '/password/recovery', element: <PasswordRecovery />, roles: ['all'] },
    { path: '/password/change', element: <ChangePassword />, roles: ['all'] },
    { path: '/admin/dashboard', element: <AdminDashboard />, roles: ['admin'] },
    { path: '/admin/profile', element: <AdminProfile />, roles: ['admin'] },
    { path: '/user/:id/profile', element: <UserProfile />, roles: ['user'] },
    // Product Routes
    { path: '/product', element: <ProductList />, roles: ['user', 'vendor', 'admin'] },
    { path: '/product/create', element: <CreateProduct />, roles: ['vendor'] },
    { path: '/product/:id/edit', element: <EditProduct />, roles: ['vendor'] },
    { path: '/product/:product', element: <ProductDescription />, roles: ['user', 'vendor', 'admin'] },
    { path: '/product/all', element: <ProductTable />, roles: ['user', 'vendor', 'admin'] },
    // Contact Routes
    { path: "/Chat/:receiverID", element: <Chat />, roles: ['user', 'vendor', 'admin'] },
    { path: "/Chat", element: <Chat />, roles: ['user', 'vendor', 'admin'] },

    // {<Route exact path="/Venders" element={<Venders/>}/>, roles: ['user','vendor','admin']},
    { path: '/message-box/:room', element: <MessageBox />, roles: ['user', 'vendor', 'admin'] },
    { path: '/contact', element: <ContactList />, roles: ['user', 'vendor', 'admin'] },
    { path: '/contact/create', element: <CreateContact />, roles: ['user', 'vendor', 'admin'] },
    // Forum Routes
    { path: '/post', element: <PostList />, roles: ['user', 'vendor', 'admin'] },
    { path: '/post/:post', element: <PostDescription />, roles: ['user', 'vendor', 'admin'] },
    { path: '/post/mypost', element: <MyPost />, roles: ['user'] },
    // Cart Routes
    { path: '/cart', element: <Cart />, roles: ['user', 'admin'] },
    { path: '/order-form', element: <OrderForm />, roles: ['user', 'admin'] },
    // Query Routes
    { path: '/question/create', element: <CreateQuestion />, roles: ['user'] },
    { path: '/question/edit/:id', element: <EditQuestion />, roles: ['user'] },
    // Service Routes
    { path: '/service', element: <ServiceList />, roles: ['user', 'vendor', 'admin'] },
    { path: '/service/:service/:review', element: <ServiceDescription />, roles: ['user', 'vendor', 'admin'] },
    { path: '/service/:service', element: <ServiceDescription />, roles: ['user', 'vendor', 'admin'] },
    { path: '/service/:id/buy', element: <ServiceBuyForm />, roles: ['user'] },
    { path: '/service/create', element: <CreateService />, roles: ['vendor'] },
    { path: '/services/:services', element: <EditService />, roles: ['vendor'] },
    { path: '/service/all', element: <ServiceTable />, roles: ['vendor', 'admin'] },
    // Vendor Routes
    { path: '/vendor/:id', element: <VendorDescripiton />, roles: ['user', 'vendor', 'admin'] },
    { path: '/vendor/:id/profile', element: <VendorProfile />, roles: ['user', 'vendor', 'admin'] },
    { path: '/vendor', element: <VendorTable />, roles: ['admin'] },
    { path: '/vendor/dashboard', element: <VendorDashboard />, roles: ['vendor'] },
    { path: '/order/all', element: <OrderTable />, roles: ['admin'] },
    // Feedback Routes
    { path: '/feedback', element: <FeedbackTable />, roles: ['admin', 'vendor'] },
    // Complain Routes
    { path: '/complain', element: <ComplainTable />, roles: ['admin'] },
    // { path: '/unauthorize', element: <UnauthorizePage />, roles: ['all'] },
]


export default routes;