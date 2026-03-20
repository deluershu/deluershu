import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-icon">◈</span>
            <span className="logo-text">TechFlow</span>
          </Link>
          <p className="footer-desc">
            专注于企业数字化转型，提供一站式技术解决方案
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h4>产品</h4>
            <Link to="/products">智能平台</Link>
            <Link to="/products">数据分析</Link>
            <Link to="/products">云服务</Link>
          </div>
          <div className="footer-section">
            <h4>公司</h4>
            <Link to="/contact">关于我们</Link>
            <Link to="/contact">联系我们</Link>
            <Link to="/contact">加入我们</Link>
          </div>
          <div className="footer-section">
            <h4>支持</h4>
            <Link to="/contact">帮助中心</Link>
            <Link to="/contact">技术支持</Link>
            <Link to="/contact">文档中心</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TechFlow. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
