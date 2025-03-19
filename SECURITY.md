# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ----------------- |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of Veganeiro seriously. If you believe you have found a security vulnerability, please report it to us as described below.

### Please follow these steps:

1. **DO NOT** disclose the vulnerability publicly.
2. Send a detailed description of the vulnerability to [security@veganeiro.org](mailto:security@veganeiro.org)
3. Include steps to reproduce the issue if possible.
4. Allow us reasonable time to respond before any disclosure.

### What to include in your report:

- Type of issue (e.g., buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

### What to expect:

- We will acknowledge your report within 48 hours.
- We will provide a more detailed response within 72 hours, indicating next steps.
- We will handle your report with strict confidentiality and not pass on your personal details to third parties.
- We will keep you informed of our progress.
- After the issue is resolved, we will publicly acknowledge your responsible disclosure.

## Security Features

Veganeiro implements several security measures:

- HTTPS enforcement
- Secure session handling
- Data encryption at rest
- Regular security audits
- Input validation
- API rate limiting
- XSS protection
- CSRF protection

## Best Practices

When contributing to Veganeiro, please ensure you follow these security best practices:

1. Never commit sensitive credentials
2. Keep dependencies updated
3. Follow the principle of least privilege
4. Validate all user inputs
5. Use prepared statements for database queries
6. Implement proper error handling
7. Follow secure coding guidelines

## Updates and Security Patches

Security updates will be released as follows:

1. Critical vulnerabilities: Within 24 hours
2. High severity issues: Within 48 hours
3. Medium severity issues: Within 7 days
4. Low severity issues: Next regular release

## Contact

For any security-related questions, please contact:
- Security Team: [security@veganeiro.org](mailto:security@veganeiro.org)
- Lead Maintainer: [maintainer@veganeiro.org](mailto:maintainer@veganeiro.org)
