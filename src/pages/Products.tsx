import { Link } from 'react-router-dom';
import CTAButton from '../components/CTAButton';
import './Products.css';

const Products = () => {
  const products = [
    {
      id: 1,
      name: '智能数据平台',
      desc: '一站式数据采集、处理、分析平台，支持多数据源接入，提供可视化报表与智能洞察',
      features: ['多源数据接入', '实时数据处理', '可视化报表', 'AI智能分析'],
      tag: '热门',
    },
    {
      id: 2,
      name: '企业协作系统',
      desc: '高效团队协作平台，集成项目管理、即时通讯、文档协作等功能，提升组织效能',
      features: ['项目管理', '即时通讯', '文档协作', '工作流自动化'],
      tag: '新品',
    },
    {
      id: 3,
      name: '智能客服机器人',
      desc: '基于AI的智能客服解决方案，7x24小时在线服务，大幅降低人工客服成本',
      features: ['智能问答', '多渠道接入', '情感分析', '知识库管理'],
      tag: '推荐',
    },
    {
      id: 4,
      name: '云端开发平台',
      desc: '一站式云端开发环境，支持多种编程语言，提供CI/CD流水线与容器化部署',
      features: ['在线IDE', 'CI/CD', '容器部署', '团队协作'],
      tag: '专业',
    },
    {
      id: 5,
      name: '数据分析引擎',
      desc: '高性能数据分析引擎，支持PB级数据处理，提供机器学习与深度学习能力',
      features: ['海量数据处理', '机器学习', '实时计算', 'API接口'],
      tag: '企业',
    },
    {
      id: 6,
      name: '安全防护系统',
      desc: '企业级安全防护解决方案，提供威胁检测、漏洞扫描、安全审计等功能',
      features: ['威胁检测', '漏洞扫描', '安全审计', '合规管理'],
      tag: '安全',
    },
  ];

  return (
    <div className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <h1>产品服务</h1>
          <p>全方位满足企业数字化转型需求，助力业务增长</p>
        </div>
      </section>

      {/* Products List */}
      <section className="products-list">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-item">
                <div className="product-header">
                  <span className="product-tag">{product.tag}</span>
                  <h3>{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>
                </div>
                <div className="product-features">
                  {product.features.map((feature, index) => (
                    <span key={index} className="feature-badge">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="product-actions">
                  <CTAButton text="免费试用" />
                  <Link to="/contact" className="consult-link">
                    咨询详情
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-text">
              <h2>找不到合适的解决方案？</h2>
              <p>联系我们，获取定制化服务</p>
            </div>
            <CTAButton text="联系我们" size="large" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
