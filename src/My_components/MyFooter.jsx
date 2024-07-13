import "./MyFooter.css";

function MyFooter() {
  return (
    <>
      <footer id="footerId">
        <div className="footer_h6">
          <h6 style={{ color: "aqua" }}>This Website is created By SSR Creation</h6>
        </div>
        <div className="row_footer">
          <div className="col_footer">
            <div className="footer_title">AnyTitleHere</div>
            <ul className="footer_items clean-list">
              <li className="footer_item">
                <a className="footer_item-link" href="#">Getting Started</a>
              </li>
              <li className="footer_item">
                <a className="footer_item-link" href="#">Getting Started</a>
              </li>
              <li className="footer_item">
                <a className="footer_item-link" href="#">Getting Started</a>
              </li>
              <li className="footer_item">
                <a className="footer_item-link" href="#">Getting Started</a>
              </li>
            </ul>
          </div>
          <div className="col_footer">
            <div className="footer_title">AnyTitleHere</div>
            <ul className="footer_items clean-list">
              <li className="footer_item">
                <a className="footer_item-link" href="#">Getting Started</a>
              </li>
              <li className="footer_item">
                <a className="footer_item-link" href="#">Getting Started</a>
              </li>
              <li className="footer_item">
                <a className="footer_item-link" href="#">Getting Started</a>
              </li>
              <li className="footer_item">
                <a className="footer_item-link" href="#">Getting Started</a>
              </li>
            </ul>
          </div>
          <div className="col_footer">
            <div className="footer_title">AnyTitleHere</div>
            <ul className="footer_items clean-list">
              <li className="footer_item">
                <a className="footer_item-link" href="#">Getting Started</a>
              </li>
              <li className="footer_item">
                <a className="footer_item-link" href="#">Getting Started</a>
              </li>
              <li className="footer_item">
                <a className="footer_item-link" href="#">Getting Started</a>
              </li>
              <li className="footer_item">
                <a className="footer_item-link" href="#">Getting Started</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer_h6_bottom">
          <h6 style={{ color: "aqua" }}>All CopyRights Reserved @SSR Creation</h6>
          <h5><a href='#'>DMCA Protected </a> || <a href='#'>Privacy_Policy </a> || <a href='#'> ©SSR_Creation </a>2021-2024</h5>
        </div>
      </footer>
    </>
  );
}

export default MyFooter;
