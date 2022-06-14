import React from 'react';

function Footer({user}) {
  return (
    <div className="myFooter">{user != null &&
      <footer id="footer" className="sticky-footer bg-white">
          <div className="container my-auto">
              <div className="copyright text-center my-auto">
                  <span></span>
              </div>
          </div>
      </footer>}
    </div>
  );
}
export default Footer;
