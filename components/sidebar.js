import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside>
      <nav>
        {/* Categories of Articles */}
        <h3 className='title'>Type : </h3>
        <ul className='navList'>
          <li className='navItem'>
            <Link className='link' href="/">
              Magazines
            </Link>
          </li>
          <li className='navItem'>
            <Link className='link' href="#">
              Lifestyle
            </Link>
          </li>
          <li className='navItem'>
            <Link className='link' href="#">
              Property
            </Link>
          </li>
          <li className='navItem'>
            <Link className='link' href="#">
              Furniture
            </Link>
          </li>
          <li className='navItem'>
            <Link className='link' href="#">
              Food & Beverage
            </Link>
          </li>
        </ul>
        <br />
        {/* Sorting by Value */}
        <h3 className='title'>Sort by : </h3>
        <ul className='navList'>
          <li className='navItem'>
            <Link className='link' href="/">
              Most Emailed
            </Link>
          </li>
          <li className='navItem'>
            <Link className='link' href="#">
              Most Shared
            </Link>
          </li>
          <li className='navItem'>
            <Link className='link' href="#">
              Most Viewed
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
