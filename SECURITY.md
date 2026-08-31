# Security Policy

## Overview

The Enterprise AI Invest Decision Engine (`ai-Invest-engine`) is a financial decision support tool handling sensitive enterprise investment data. This security policy outlines our commitment to protecting user data, maintaining confidentiality, and ensuring compliance with modern security standards.

---

## Supported Versions

| Version | Status | End of Life | Security Updates |
|---------|--------|-------------|------------------|
| 1.0.x   | ✅ Active | TBD | Yes |
| < 1.0   | ❌ Deprecated | 2026-12-31 | No |

---

## Security Features & Architecture

### Data Protection
- **Client-Side Encryption**: All financial data remains in the browser; no server transmission of unencrypted input data
- **Content Security Policy (CSP)**: Strict CSP headers prevent XSS and injection attacks
- **HTTPS-Only**: Application must be served over TLS 1.3+
- **Local Storage**: Sensitive calculations stored only in browser `localStorage` with user consent

### Input Validation & Sanitization
- All numeric inputs validated with min/max bounds
- String inputs sanitized to prevent injection attacks
- Filename sanitization for export files

### Export Security
- **JSON Export**: Unencrypted; users responsible for secure storage
- **CSV Export**: Plain text; suitable for internal distribution only
- **Encrypted Export**: AES-256 encryption available for sensitive datasets
- **Print/PDF**: Browser-based rendering; no server-side processing

---

## Compliance & Privacy Standards

### GDPR Compliance (EU General Data Protection Regulation)
- ✅ No personal data collection (no user accounts, no cookies)
- ✅ No data transmission to third-party servers
- ✅ User consent for auto-save functionality
- ✅ Right to be forgotten: Users can clear all data via "Clear" button
- ✅ Data processing transparency: All calculations disclosed in UI

### HIPAA (if applicable to enterprise healthcare contexts)
- ✅ No Protected Health Information (PHI) processing
- ✅ Client-side computation ensures no unauthorized disclosure

### NIST Cybersecurity Framework Alignment
- **Identify**: Risk-based stage-gate model for capital allocation
- **Protect**: CSP, input validation, encrypted export options
- **Detect**: User-visible error banners for anomalous input
- **Respond**: Clear and audit trail via downloadable reports
- **Recover**: User can regenerate analysis via re-entry or JSON import

### SOC 2 Type II Considerations
- ✅ Availability: No server dependencies; always accessible
- ✅ Processing Integrity: Auditable calculations with explicit formulas
- ✅ Confidentiality: No external data transmission
- ✅ Integrity: Tamper-evident export signatures recommended for regulated users

---

## Vulnerability Reporting

### Security Incident Disclosure Policy

If you discover a security vulnerability, please **do NOT open a public GitHub issue**. Instead:

1. **Email**: Send details to `sateesh.bolloju@gmail.com` with subject line: `[SECURITY] ai-Invest-engine Vulnerability Report`

2. **Information to include**:
   - Description of the vulnerability
   - Steps to reproduce (if applicable)
   - Affected version(s)
   - Your name/organization (optional)

3. **Response Timeline**:
   - **Initial Acknowledgment**: Within 2 business days
   - **Status Update**: Within 7 business days
   - **Patch Release**: Within 30 days of confirmation (or public disclosure timeline negotiated with reporter)

4. **Responsible Disclosure**:
   - We will coordinate patch release timing
   - Reporter will receive credit in release notes (if desired)
   - Public advisories will be published after patches are available

---

## Security Best Practices for Users

### For Deployment
- Serve application over HTTPS with TLS 1.3+
- Use modern browser (Chrome 90+, Firefox 88+, Safari 15+, Edge 90+)
- Disable developer console access in production environments
- Implement HTTP headers:
  ```
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  X-XSS-Protection: 1; mode=block
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  ```

### For Users
- ✅ **Do** review all inputs before exporting financial reports
- ✅ **Do** store exported files securely (encrypted storage, access controls)
- ✅ **Do** use encrypted export for sensitive datasets
- ✅ **Do** clear browser cache/storage after sensitive sessions
- ✅ **Do** audit auto-save feature for multi-user devices

- ❌ **Don't** share unencrypted exports via email or unencrypted channels
- ❌ **Don't** leave sensitive reports open on shared devices
- ❌ **Don't** disable browser security features (CSP, same-origin policy)
- ❌ **Don't** store financial data longer than necessary

---

## Known Limitations & Acceptable Use

### Scope
- **Financial Modeling Tool Only**: Not a replacement for professional financial advisory services
- **Desktop/Laptop Optimal**: Mobile experience is touch-optimized but desktop recommended for large datasets
- **Browser-Dependent Security**: Security relies on browser implementations of localStorage, CSP, and encryption APIs

### Prohibited Use Cases
- ❌ Processing of PII (personally identifiable information)
- ❌ Healthcare data without HIPAA BAA agreement
- ❌ Payment card data (PCI-DSS scope excluded)
- ❌ Passwords or authentication credentials storage
- ❌ Reverse engineering or circumventing client-side encryption

---

## Dependencies & Third-Party Risk

### No External Dependencies
- Pure HTML5/CSS3/JavaScript (no npm packages, no CDN dependencies)
- Zero supply chain risk from external libraries
- All functionality self-contained in single `index.html` file

### Browser APIs Used
- `localStorage` (HTML5) - W3C standard
- `crypto.subtle` (Web Crypto API) - NIST-approved encryption
- `Date`, `JSON`, standard JavaScript objects

---

## Incident Response Plan

| Scenario | Action | Timeline |
|----------|--------|----------|
| **XSS/Injection Vulnerability** | Patch input validation logic, release hotfix | Within 24 hours |
| **Encryption Bypass** | Review crypto implementation, reissue guidance | Within 48 hours |
| **Data Leakage** | Audit CSP policies, issue browser compatibility warning | Within 72 hours |
| **Denial of Service** | Rate-limit guidance (if applicable), capacity planning | Within 1 week |

---

## Security Audit & Testing

### Recommended Testing
- ✅ OWASP Top 10 compliance review
- ✅ CSP policy validation (CSP evaluator tools)
- ✅ Browser compatibility testing across major engines
- ✅ Encryption strength validation (AES-256)
- ✅ Input fuzzing for numeric field bounds

### Testing Frequency
- Manual security review: Annually or on major version releases
- Automated linting: On every commit (recommended)
- Penetration testing: Recommended annually for enterprise deployments

---

## License & Legal

This application is provided "AS-IS" for internal enterprise use. Users assume responsibility for:
- Regulatory compliance in their jurisdiction
- Secure deployment and configuration
- Data classification and handling per corporate policy
- Financial accuracy and business logic validation

For legal questions or enterprise licensing agreements, contact `sateesh.bolloju@gmail.com`.

---

## Version History

| Date | Version | Changes |
|------|---------|---------|
| 2026-08-31 | 1.0 | Initial release with GDPR, NIST, SOC2 alignment |

---

## Questions or Suggestions?

If you have security suggestions (not vulnerabilities), please open a discussion in the GitHub repository or email the maintainer.
