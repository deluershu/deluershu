import { Link } from 'react-router-dom';
import CTAButton from '../components/CTAButton';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: '⚡',
      title: '高效智能',
      desc: 'AI驱动的智能分析系统，提升工作效率300%',
    },
    {
      icon: '🔒',
      title: '安全可靠',
      desc: '企业级安全架构，数据加密传输与存储',
    },
    {
      icon: '📈',
      title: '数据驱动',
      desc: '实时数据分析，助力企业精准决策',
    },
    {
      icon: '🌐',
      title: '云端部署',
      desc: '弹性云架构，支持快速扩展与部署',
    },
  ];

  const products = [
    {
      name: '智能数据平台',
      desc: '一站式数据采集、处理、分析平台',
      tag: '热门',
    },
    {
      name: '企业协作系统',
      desc: '高效团队协作，提升组织效能',
      tag: '新品',
    },
    {
      name: '智能客服机器人',
      desc: '7x24小时智能客服，降低运营成本',
      tag: '推荐',
    },
  ];

  return (
    <div className="home">
      {/* Hero Banner */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-grid"></div>
          <div className="hero-glow"></div>
        </div>
        <div className="hero-content">
          <h1>
            <span className="gradient-text">数字化转型</span>
            <br />
            从这里开始
          </h1>
          <p className="hero-desc">
            TechFlow 为企业提供一站式数字化解决方案，助力企业智能化升级，
            实现业务增长与效率提升
          </p>
          <div className="hero-actions">
            <CTAButton text="免费试用" size="large" />
            <CTAButton text="了解更多" type="secondary" size="large" to="/products" />
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">企业客户</span>
            </div>
            <div className="stat">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">服务可用性</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">技术支持</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>为什么选择我们</h2>
            <p>专业的技术团队，成熟的产品体系，为您提供优质服务</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="products-preview">
        <div className="container">
          <div className="section-header">
            <h2>核心产品</h2>
            <p>全方位满足企业数字化转型需求</p>
          </div>
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                <span className="product-tag">{product.tag}</span>
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <Link to="/products" className="product-link">
                  了解详情 →
                </Link>
              </div>
            ))}
          </div>
          <div className="products-cta">
            <Link to="/products" className="view-all">
              查看全部产品 →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>准备好开始了吗？</h2>
            <p>立即联系我们，获取专属解决方案</p>
            <CTAButton text="立即咨询" size="large" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
