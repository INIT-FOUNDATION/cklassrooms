import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { TestimonialDialogComponent } from 'src/app/modules/shared/components/testimonial-dialog/testimonial-dialog.component';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  constructor(private dialog: MatDialog,
    private $gaService: GoogleAnalyticsService) {}

  testimonialList: any = [
    {
      id: 1,
      name: 'Ashwini Jadhav',
      position: 'Software Developer',
      img: 'ashwiniJadhav',
      companyName: 'Orrizonte',
      linkedIn: 'https://www.linkedin.com/in/ashwini-jadhav-646a48175/',
      github: 'https://github.com/ashwinijadhav24695',
      desc1:
        "Even though I graduated with a bachelor's degree in IT from Mumbai, securing a job after college proved challenging due to limited placement opportunities due to the college being a tier-three college. Despite my efforts to search independently, the outcomes were unsatisfactory as I lacked the skills that companies were seeking.",
      desc2:
        'Determined to enhance my skills, I opted to enroll in a web development course. I learned about CKlassrooms by CK sir through a friend and visited their website. I was surprised to discover that the course was developed by the same team that built Cowin. Unlike other courses, Cklassrooms claimed to offer the students the chance to work on live projects which interested me in enrolling.',
      desc3:
        'Cklassrooms focused on both theoretical concepts and practical knowledge. We received assignments for hands-on practice and underwent exams to assess our understanding. After three months, I had the opportunity to participate in a live project, which proved to be a valuable learning experience for me. I am grateful to CK sir and his team for this opportunity. I now work as a Software Developer at Orrizonte Technologies.',
    },
    {
      id: 2,
      name: 'Saanghavi Sandhiri',
      position: 'Software Developer',
      img: 'saanghaviSandhiri',
      companyName: 'Orrizonte',
      linkedIn: 'https://www.linkedin.com/in/saanghavi-sandhiri-22a88422a/',
      github: 'https://github.com/saanghavi-orrizonte',
      desc1:
        'I graduated with a degree in hospitality studies but after working in the hotel industry, I realized my interests lay elsewhere. Following videos on how to create a basic website fascinated me, sparking my desire to learn more and pursue a career in the IT industry.',
      desc2:
        'Soon I began applying for internships. To my disappointment, my lack of a relevant degree and professional experience in the field resulted in rejections. To enhance my skills, I decided to enroll in a web development course which I thought would be something close to an IT degree and aid in securing a job. However, none of those courses impressed me. Most of them were pre-recorded videos lacking the guidance I needed. During my search for a comprehensive course, I discovered Cklassrooms. I found the course interesting and decided to enroll. ',
      desc3:
        'Cklassrooms were not only focused on theoretical concepts but also provided opportunities to work on live projects. Through this, I discovered my interest in front-end development. I learned to make websites and mobile applications. I am grateful to CK sir and his team for this great opportunity. Now I am working as a Software Developer at Orrizonte Technologies. This innovative approach has truly been a stepping stone in my career development.',
    },
    {
      id: 3,
      name: 'Kirti Sharma',
      position: 'Software Engineer',
      img: 'kirtiSharma',
      companyName: 'Orrizonte',
      linkedIn: 'https://www.linkedin.com/in/kirti-sharma-0189ab228/',
      github: 'https://github.com/kirti-orrizonte',
      desc1:
        "I reside in Faridabad, and I graduated from college in 2023. Due to financial situation, I opted for a regular private college, with aspirations of becoming a software engineer. However, throughout my four years in college, there were no placement opportunities due to the institution's third-tier ranking. Despite my hard work, I couldn't secure any job placements, likely because I lacked the required skill set and knowledge.",
      desc2:
        "Eventually, I joined CKlassrooms, where CK Sir provided me with this opportunity, and I started learning .Joining CKlassrooms under CK Sir's mentorship, I embarked on a year of continuous learning.",
      desc3:
        "Supported by CK Sir and Cowin team members, I expanded my skill set in frontend development, thriving in CKlassrooms' growth environment.",
      desc4:
        'After completing my learning journey, I was fortunate to receive an opportunity to join the team at Orrizonte Technologies as a software developer. This role marks the culmination of my efforts and serves as a testament to the dedication and mentorship. I am grateful for the opportunity to work with Orrizonte and thankful for the support I have received.',
    },
    {
      id: 4,
      name: 'Harshita Garg',
      position: 'Software Engineer',
      img: 'harshitaGarg',
      companyName: 'Orrizonte',
      linkedIn: 'https://www.linkedin.com/in/harshita-garg-328aab221/',
      github: 'https://github.com/harshita-orrizonte',
      desc1:
        'As a student from Faridabad, Haryana, my journey into the tech field was laden with challenges. Despite completing my BTech from an average college in the area, securing a job placement remained elusive despite relentless efforts. Enduring countless rejections and setbacks over a year was daunting.',
      desc2:
        "However, CKlassrooms by CK Sir became the game-changer. The institute's comprehensive and practical approach to learning under CK Sir's guidance transformed my coding and software development acumen. Suddenly, what seemed insurmountable became achievable.",
      desc3:
        "Gratefully, job offers from renowned tech MNCs started pouring in, all thanks to CKlassrooms' invaluable support. Today, I proudly serve as a Software Developer at Orrizonte Technologies, a dream realized through CKlassrooms' mentorship and resources.",
      desc4:
        'I owe my gratitude to CK Sir and the entire CKlassrooms team for their unwavering belief in me and their dedication to empowering students like myself. Their commitment to equipping us with the skills needed to thrive in the tech industry is commendable. I wholeheartedly endorse CKlassrooms to anyone embarking on a career in technology.',
    },
    {
      id: 5,
      name: 'Pilli Rajesh',
      position: 'Software Engineer',
      img: 'rajeshPilli',
      companyName: 'Orrizonte',
      linkedIn: 'https://www.linkedin.com/in/pillirajesh/',
      github: 'https://github.com/rajesh-orrizonte',
      desc1:
        'I graduated with a bachelor\'s degree in Mechanical Engineering (ME) from Kolkata, transitioning from a non-IT background to becoming a proficient Full-stack developer seemed like an hopeless task.Transitioning from a mechanical engineering background to becoming a Full-stack developer has been a thrilling journey filled with challenges and opportunities for growth. However, my experience with the Full-stack development course at CKlassrooms has been nothing short of life-changing. Allow me to share my journey and the profound impact this course has had on my career trajectory.',
      desc2:
        'Before enrolling in the Full-stack Development course at CKlassrooms, my knowledge of coding was limited to basic HTML and CSS. The world of programming languages, server-side scripting, and database management felt like uncharted territory. Yet, from the onset, CKlassrooms comprehensive curriculum and supportive learning environment made this seemingly daunting journey accessible and rewarding. Moreover, CKlassrooms commitment to providing a supportive learning community fostered an environment of collaboration and growth. Through online forums, live coding sessions, and peer-to-peer feedback, I found myself surrounded by like-minded individuals who shared a passion for continuous learning and personal development. One of the distinguishing features of the course was its practical approach to learning. By working on real-world projects and collaborating with peers, I not only honed my technical skills but also developed the problem-solving mindset essential for success in the field of full-stack development.',
      desc3:
        'Today, I am proud to say that I have successfully transitioned from a non-IT background to a proficient full-stack developer, thanks to the invaluable support and guidance of CKlassrooms.',
    },
    {
      id: 6,
      name: 'Rupesh Vanneldas',
      position: 'Software Engineer',
      img: 'rupeshVanneldas',
      companyName: 'Orrizonte',
      linkedIn: 'https://www.linkedin.com/in/rupesh-vanneldas-1b0444197/',
      github: 'https://github.com/rupesh-orrizonte',
      desc1:
        "I graduated from Mumbai with a bachelor's degree in IT; however, finding work after college proved difficult due to limited placement possibilities caused by the recession, as just a few organizations came to recruit freshers. Despite my efforts to search independently, the results were unsatisfying because I lacked the abilities that employers were looking for.",
      desc2:
        'Determined to improve my skills, I enrolled in a Web Development course. I discovered CKlassrooms by CK sir from an acquaintance and explored their website. I was startled to learn that the course was created by the same team who made CoWIN. Unlike other courses, Cklassrooms claimed to offer students the opportunity to work on live projects, which piqued my curiosity in joining.',
      desc3:
        'Cklassrooms emphasized both academic concepts and practical expertise. We were given homework for hands-on practice and took exams to assess our learning. After three months, I was able to engage in a live project, which proved to be an invaluable learning experience for me.',
      desc4:
        "With the help of CK Sir and CoWIN team members, I strengthened my skill set in frontend development and thrived in CKlassrooms' growing atmosphere. I'm grateful to CK Sir and his team for the opportunity.",
      desc5:
        'I currently work as a Software Developer at Orrizonte Technologies. This role represents the culmination of my work and demonstrates my dedication and mentorship. I am glad for the opportunity to work with Orrizonte and the support I have received.',
    },
  ];

  ngOnInit(): void {}

  openDialog(data) {
    this.$gaService.event('click', 'Hyperlink', 'Open testimonials dialog', (JSON.stringify(data) as any))
    this.dialog.open(TestimonialDialogComponent, {
      width: 'clamp(20rem, 80vw, 70rem)',
      data: data,
    });
  }
}
