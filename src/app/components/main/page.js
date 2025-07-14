"use client"
import React, { useState } from 'react';
import { CheckCircle, Shield, Users, Globe, ArrowRight, Upload, Eye, Award, Zap, TrendingUp, Leaf } from 'lucide-react';
import './main.css';

const HomePage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const workflowSteps = [
    {
      title: "Exporter Login & Batch Submission",
      description: "Upload product information including type, quantity, location, and attachments like lab reports and packaging images.",
      icon: <Upload className="workflow-step-icon-svg" />,
      color: "green"
    },
    {
      title: "Quality Check Initiation",
      description: "System matches batch to certified QA agency and schedules physical/virtual inspection.",
      icon: <Eye className="workflow-step-icon-svg" />,
      color: "blue"
    },
    {
      title: "Digital Product Passport (DPP)",
      description: "QA agency updates inspection results and generates a W3C Verifiable Credential for the batch.",
      icon: <Award className="workflow-step-icon-svg" />,
      color: "purple"
    },
    {
      title: "Verification by Importers/Customs",
      description: "Importer or customs scans QR code to verify who issued the certificate and when it was issued.",
      icon: <Shield className="workflow-step-icon-svg" />,
      color: "orange"
    }
  ];

  const features = [
    {
      icon: <Upload className="feature-icon feature-icon-green" />,
      title: "Upload Product Details",
      description: "Submit comprehensive product information including rice, wheat, spices with supporting documentation."
    },
    {
      icon: <Eye className="feature-icon feature-icon-blue" />,
      title: "Quality Inspections",
      description: "Professional QA agencies conduct thorough physical and virtual inspections of your products."
    },
    {
      icon: <Award className="feature-icon feature-icon-purple" />,
      title: "Digital Certificates",
      description: "Receive W3C compliant Verifiable Credentials stored securely in your Inji wallet."
    },
    {
      icon: <Shield className="feature-icon feature-icon-orange" />,
      title: "Instant Verification",
      description: "QR code verification enables instant authentication before import/export processes."
    }
  ];

  const stats = [
    { number: "500+", label: "Certified QA Agencies" },
    { number: "10K+", label: "Products Certified" },
    { number: "50+", label: "Countries Supported" },
    { number: "99.9%", label: "Verification Accuracy" }
  ];

  return (
    <div className="homepage-container">
      {/* Animated Background Elements */}
      <div className="floating-bg-1"></div>
      <div className="floating-bg-2"></div>
      <div className="floating-bg-3"></div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-title-container">
          <Leaf className="hero-icon" />
          <h1 className="hero-title">AgriQCert Portal</h1>
        </div>
        <p className="hero-subtitle">
          Digitize and secure your agricultural export/import certification process with 
          W3C Verifiable Credentials and blockchain-based trust.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">
            Get Started as Exporter
            <ArrowRight className="btn-icon" />
          </button>
          <button className="btn-secondary">
            QA Agency Portal
            <Shield className="btn-icon" />
          </button>
        </div>
      </div>

      <div className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">
              Comprehensive Quality Certification Platform
            </h2>
            <p className="features-subtitle">
              From batch submission to international verification, streamline your entire 
              agricultural certification workflow with cutting-edge technology.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-container">
                  {feature.icon}
                </div>
                <h3 className="feature-title">
                  {feature.title}
                </h3>
                <p className="feature-description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="workflow-section">
        <div className="workflow-container">
          <div className="workflow-header">
            <h2 className="workflow-title">
              How It Works
            </h2>
            <p className="workflow-subtitle">
              Our streamlined 4-step process ensures efficient certification 
              and verification of agricultural products.
            </p>
          </div>

          <div className="workflow-content">
            <div className="workflow-steps">
              {workflowSteps.map((step, index) => (
                <div
                  key={index}
                  className={`workflow-step ${activeStep === index ? 'active' : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="workflow-step-content">
                    <div className={`workflow-step-icon ${step.color}`}>
                      {step.icon}
                    </div>
                    <div className="workflow-step-text">
                      <h3>Step {index + 1}</h3>
                      <p>{step.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="workflow-detail">
              <div className="workflow-detail-header">
                <div className={`workflow-detail-icon ${workflowSteps[activeStep].color}`}>
                  {workflowSteps[activeStep].icon}
                </div>
                <h3 className="workflow-detail-title">
                  {workflowSteps[activeStep].title}
                </h3>
              </div>
              <p className="workflow-detail-description">
                {workflowSteps[activeStep].description}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">
                  {stat.number}
                </div>
                <div className="stat-label">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">
            Ready to Transform Your Agricultural Certification Process?
          </h2>
          <p className="cta-subtitle">
            Join thousands of exporters, QA agencies, and importers who trust 
            AgriQCert for secure, verifiable agricultural certifications.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary">
              Start Your First Certification
              <Zap className="btn-icon" />
            </button>
            <button className="btn-secondary">
              Learn More
              <TrendingUp className="btn-icon" />
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>
                <Leaf className="footer-icon" />
                AgriQCert
              </h3>
              <p>
                Securing agricultural trade through blockchain-verified certifications.
              </p>
            </div>
            <div className="footer-section">
              <h4>For Exporters</h4>
              <ul>
                <li>Submit Products</li>
                <li>Track Certifications</li>
                <li>Download Certificates</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>For QA Agencies</h4>
              <ul>
                <li>Inspection Portal</li>
                <li>Issue Credentials</li>
                <li>Manage Workflows</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>For Importers</h4>
              <ul>
                <li>Verify Certificates</li>
                <li>QR Code Scanner</li>
                <li>Compliance Check</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 AgriQCert Portal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;