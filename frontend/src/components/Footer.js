import React from 'react';

function Footer({user}) {
  return (
    <div class="myNavBar">{user != null &&
      <footer id="footer" className="sticky-footer bg-white">
          <div className="container my-auto">
              <div className="copyright text-center my-auto">
                  <span>Hi ! Tu comptes à arrêter de manger du chocolat peut-être ?</span>
              </div>
          </div>
      </footer>}
    </div>
  );
}
export default Footer;
