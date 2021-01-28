import React from 'react';

const Nav = () => {

  function useToggle(initialValue = true) {
    const [value, setValue] = React.useState(initialValue);
    const toggle = React.useCallback(() => {
      setValue(v => !v);
    }, []);
    return [value, toggle];
  }

  const [on, toggleOn] = useToggle();




  return (<nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#top">På Toppen</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" onClick={toggleOn} >
        <span className="navbar-toggler-icon"></span>
      </button>


      <div className={on ? ("collapse navbar-collapse") : ("navbar-collapse")} id="navbarResponsive">
        <ul className="navbar-nav ml-auto my-2 my-lg-0">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Skillz</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>


    </div>
  </nav>);
}


export default Nav