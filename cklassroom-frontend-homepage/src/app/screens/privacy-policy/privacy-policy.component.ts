import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  standalone: true
})
export class PrivacyPolicyComponent implements OnInit {
  privacyPolicy: any = [
    {
      id: 1,
      label: 'Information We Collect',
      desc: 'When you use CKlassrooms, we may collect personal information from you, such as your name, email address, username, password, and payment information. We may also collect non-personal information, such as your IP address, browser type, and device information.',
    },
    {
      id: 2,
      label: 'Use of Information',
      desc: 'We use the information we collect to provide and improve our services, communicate with you, process payments, personalize your experience, and ensure the security of our platform. We may also use your information to send you promotional emails and updates about CKlassrooms, but you can opt out of receiving such communications at any time.',
    },
    {
      id: 3,
      label: 'Disclosure of Information',
      desc: 'We may disclose your personal information to third-party service providers who assist us in operating our platform, processing payments, or providing other services. We may also disclose your information in response to legal requests or to comply with applicable laws and regulations.',
    },
    {
      id: 4,
      label: 'Data Security',
      desc: 'We take reasonable measures to protect the security of your personal information and prevent unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee the absolute security of your information.',
    },
    {
      id: 5,
      label: 'Cookies',
      desc: 'We may use cookies and similar technologies to collect information about your use of CKlassrooms and improve our services. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of CKlassrooms may become inaccessible or not function properly.',
    },
    {
      id: 6,
      label: 'Third-Party Links',
      desc: 'CKlassrooms may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the privacy practices or content of such third-party sites, so we encourage you to review the privacy policies of those sites before providing any personal information.',
    },
    {
      id: 7,
      label: "Children's Privacy",
      desc: 'CKlassrooms is not intended for use by children under the age of 13, and we do not knowingly collect personal information from children under the age of 13. If you are under 13, please do not use CKlassrooms or provide any personal information to us',
    },
    {
      id: 8,
      label: 'Changes to this Privacy Policy',
      desc: 'We reserve the right to update or change this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy on CKlassrooms. Your continued use of CKlassrooms after any such changes constitutes your acceptance of the revised Privacy Policy.',
    },
    {
      id: 9,
      label: 'Contact Us',
      desc: 'If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at contactus@orrizonte.in',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
