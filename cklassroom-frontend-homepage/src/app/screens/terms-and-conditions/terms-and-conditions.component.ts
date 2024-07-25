import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss'],
  standalone: true
})
export class TermsAndConditionsComponent implements OnInit {
  termsAndConditions: any = [
    {
      id: 1,
      label: 'Acceptance of Terms',
      desc: 'By accessing or using CKlassrooms, you agree to abide by these Terms. If you do not agree to these Terms, please do not use CKlassrooms.',
    },
    {
      id: 2,
      label: 'Access to Courses',
      desc: 'CKlassrooms provides access to various educational courses in fields such as Angular, Node.js, React.js, Python, HTML, CSS, JavaScript, and on-the-job training. Your access to these courses is subject to your compliance with these Terms.',
    },
    {
      id: 3,
      label: 'Registration',
      desc: 'In order to access certain features of CKlassrooms, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete',
    },
    {
      id: 4,
      label: 'Intellectual Property',
      desc: 'All content provided on CKlassrooms, including but not limited to course materials, videos, text, graphics, logos, images, and software, is the intellectual property of CKlassrooms or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of such content without the prior written consent of CKlassrooms.',
    },
    {
      id: 5,
      label: 'Use of CKlassrooms',
      desc: "You agree to use CKlassrooms only for lawful purposes and in accordance with these Terms. You may not use CKlassrooms in any manner that could damage, disable, overburden, or impair CKlassrooms or interfere with any other party's use and enjoyment of CKlassrooms.",
    },
    {
      id: 6,
      label: 'On-the-Job Training',
      desc: 'CKlassrooms may offer on-the-job training opportunities. Participation in such training programs is voluntary and subject to additional terms and conditions.',
    },
    {
      id: 7,
      label: 'Payment',
      desc: 'Certain features or courses on CKlassrooms may require payment. By purchasing such features or courses, you agree to pay the applicable fees and abide by any additional terms and conditions associated with such purchases.',
    },
    {
      id: 8,
      label: 'Disclaimer of Warranties',
      desc: "CKlassrooms is provided on an 'as is' and 'as available' basis, without any warranties of any kind, either express or implied. CKlassrooms makes no representations or warranties of any kind regarding the accuracy, reliability, or completeness of any content available on CKlassrooms.",
    },
    {
      id: 9,
      label: 'Limitation of Liability',
      desc: 'In no event shall CKlassrooms or its affiliates be liable for an indirect, incidental, special, consequential, or punitive damages arising out of or i connection with your use of CKlassrooms, whether based on warranty, contract, tor (including negligence), or any other legal theory.',
    },
    {
      id: 10,
      label: 'Modification of Terms',
      desc: 'CKlassrooms reserves the right to modify or amend these Terms at any time without prior notice. Your continued use of CKlassrooms after any such changes constitutes your acceptance of the new Terms.',
    },
    {
      id: 11,
      label: 'Governing Law',
      desc: 'These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts located in Noida, India .',
    },
    {
      id: 12,
      label: 'Contact Us',
      desc: 'If you have any questions about these Terms, please contact us at contactus@orrizonte.in',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
