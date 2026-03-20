import { useState } from 'react';
import CTAButton from '../components/CTAButton';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // 模拟提交
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', phone: '', company: '', message: '' });

    // 3秒后隐藏成功提示
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>联系我们</h1>
          <p>期待与您的合作，我们将竭诚为您服务</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>留言咨询</h2>
              <p className="form-desc">
                填写以下信息，我们的顾问将在24小时内与您联系
              </p>

              {isSuccess && (
                <div className="success-message">
                  <span className="success-icon">✓</span>
                  <span>提交成功！我们会尽快与您联系。</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">姓名 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="请输入您的姓名"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">联系电话 *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="请输入您的联系电话"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">公司名称</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="请输入您的公司名称"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">留言内容</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="请描述您的需求或问题"
                    rows={4}
                  />
                </div>

                <CTAButton
                  text={isSubmitting ? '提交中...' : '提交咨询'}
                  size="large"
                  onClick={() => handleSubmit()}
                />
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="info-card">
                <h3>联系方式</h3>
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <h4>公司地址</h4>
                    <p>北京市海淀区中关村科技园</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <h4>联系电话</h4>
                    <p>400-888-8888</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">✉️</span>
                  <div>
                    <h4>电子邮箱</h4>
                    <p>contact@techflow.com</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">🕐</span>
                  <div>
                    <h4>工作时间</h4>
                    <p>周一至周五 9:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="info-card highlight">
                <h3>快速咨询</h3>
                <p>立即拨打我们的服务热线，获取专业咨询</p>
                <a href="tel:4008888888" className="phone-link">
                  400-888-8888
                </a>
                <p className="service-time">工作日 9:00-18:00 在线</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
