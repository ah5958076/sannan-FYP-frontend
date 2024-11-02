
export function hideNavBar(){
    if(window.location.pathname === '/' ||
    window.location.pathname === '/register' ||
    window.location.pathname === '/auth')  return true;
    else return false;
}