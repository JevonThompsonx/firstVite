import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav className="absolute top-0 p-4 space-x-2 w-screen">
      <Link to='/'> Home |</Link>
      <Link to='/alert'> alert |</Link>
      <Link to='/button_test'> button_test |</Link>
      <Link to='/color_boxes'> color boxes |</Link>
      <Link to='/dice'> Dice |</Link>
      <Link to='/dice_conditional'> dice w/ conditions |</Link>
      <Link to='/faux_object'> faux object |</Link>
      <Link to='/form_test'> form test |</Link>
      <Link to='/greeter'> Greeter |</Link>
      <Link to='/grocery_list'> grocery list |</Link>
      <Link to='/list'> List |</Link>
      <Link to='/rand_pokemon'> Random Pokemon |</Link>
      <Link to='/react_defaults'> default react+vite page |</Link>
      <Link to='/slots'> slots |</Link>
      <Link to='/state_test'> List |</Link>
    </nav>
  );
};

export default Nav;
