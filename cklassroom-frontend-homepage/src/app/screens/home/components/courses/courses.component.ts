import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweenMax } from 'gsap';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef,
              private router: Router) {}

  getCourseList: any = [
    {
      id: 1,
      courseName: 'Python',
      desc: 'Python is an efficient high-level data structures and a simple but effective approach to object-oriented programming.',
      img: 'python',
      h1: 'Python course provides skills applicable across various domains like web development, data science, and automation.',
      h2: "Python's readability and simplicity make it accessible for beginners and efficient for experienced developers.",
      h3: 'Python offers a rich library of tools and frameworks for rapid development and diverse project solutions.',
      h4: 'Its widespread use ensures ample career opportunities and advancements across industries.',
      color: '#2775b5',
    },
    {
      id: 2,
      courseName: 'Angular',
      desc: 'Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps.',
      img: 'angular',
      h1: 'Angular course empowers creation of feature-rich single-page applications, enhancing user experience and functionality.',
      h2: ' Angular enforces organization and scalability in development, improving code quality and maintenance.',
      h3: 'With Angular, access powerful features like data binding and routing, streamlining development process and boosting productivity.',
      h4: 'Learning Angular offers access to a vibrant community, ensuring ongoing learning and support for developers.',
      color: '#b52e31',
    },
    {
      id: 3,
      courseName: 'React Js',
      desc: 'React is a popular JavaScript library for building user interfaces. It is also referred to as a front-end JavaScript library.',
      img: 'reactJs',
      h1: 'ReactJS course enables building interactive web interfaces for enhanced user experience.',
      h2: "React's component-based approach fosters code reusability and scalability, optimizing development workflow.",
      h3: "React's virtual DOM ensures fast rendering updates, enhancing performance and user interaction.",
      h4: 'Learning React provides access to a vast developer community, offering resources and support for continual learning.',
      color: '#53c1de',
    },
    {
      id: 4,
      courseName: 'Node Js',
      desc: 'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.',
      img: 'nodeJs',
      h1: 'This course teaches the core of Node.js, empowering you to build scalable web applications efficiently.',
      h2: 'With Node.js, JavaScript spans both client and server, streamlining development and encouraging code reuse.',
      h3: 'Node.js excels in handling asynchronous tasks, ideal for crafting real-time applications like chats and gaming platforms.',
      h4: 'Leveraging frameworks like Express.js, Node.js offers a rich ecosystem for swift API and server development, enhancing productivity.',
      color: '#72ba54',
    },
    {
      id: 5,
      courseName: 'Javascript',
      desc: 'JavaScript is a scripting or programming language that allows you to implement complex features on web pages.',
      img: 'javascript',
      h1: 'JavaScript is essential for creating dynamic and interactive web pages.',
      h2: "It's widely used across front-end, back-end, and full-stack development, making it indispensable in modern web development.",
      h3: 'JavaScript enables features like form validation and real-time updates, improving user engagement.',
      h4: 'Proficiency in JavaScript opens doors to learning advanced frameworks like React and Angular, crucial for building scalable web applications.',
      color: '#d5bf14',
    },
    {
      id: 6,
      courseName: 'HTML/ CSS',
      desc: 'As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.',
      img: 'htmlCssJs',
      h1: 'Mastering HTML, CSS, and JavaScript is crucial for building websites from scratch.',
      h2: 'These skills are in high demand across industries, offering numerous career opportunities.',
      h3: 'Proficiency in these languages enables developers to create intuitive and attractive user interfaces.',
      h4: 'Learning HTML, CSS, and JavaScript sets the stage for ongoing adaptation to new web technologies.',
      color: '#f16529',
    },
  ];

  ngAfterViewInit(): void {
    const boxes =
      this.elementRef.nativeElement.querySelectorAll('.courses-card');

    for (let i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('mouseenter', (e) => {
        const x = e.pageX - boxes[i].offsetLeft;
        const y = e.pageY - boxes[i].offsetTop;
        const edge = this.closestEdge(
          x,
          y,
          boxes[i].clientWidth,
          boxes[i].clientHeight
        );
        const overlay = boxes[i].childNodes[1];
        const image = boxes[i].childNodes[0];

        switch (edge) {
          case 'left':
            overlay.style.top = '0%';
            overlay.style.left = '-100%';
            TweenMax.to(overlay, 0.5, { left: '0%' });
            TweenMax.to(image, 0.5, { scale: 1.2 });
            break;
          case 'right':
            overlay.style.top = '0%';
            overlay.style.left = '100%';
            TweenMax.to(overlay, 0.5, { left: '0%' });
            TweenMax.to(image, 0.5, { scale: 1.2 });
            break;
          case 'top':
            overlay.style.top = '-100%';
            overlay.style.left = '0%';
            TweenMax.to(overlay, 0.5, { top: '0%' });
            TweenMax.to(image, 0.5, { scale: 1.2 });
            break;
          case 'bottom':
            overlay.style.top = '100%';
            overlay.style.left = '0%';
            TweenMax.to(overlay, 0.5, { top: '0%' });
            TweenMax.to(image, 0.5, { scale: 1.2 });
            break;
        }
      });

      boxes[i].addEventListener('mouseleave', (e) => {
        const x = e.pageX - boxes[i].offsetLeft;
        const y = e.pageY - boxes[i].offsetTop;
        const edge = this.closestEdge(
          x,
          y,
          boxes[i].clientWidth,
          boxes[i].clientHeight
        );
        const overlay = boxes[i].childNodes[1];
        const image = boxes[i].childNodes[0];

        switch (edge) {
          case 'left':
            TweenMax.to(overlay, 0.5, { left: '-100%' });
            TweenMax.to(image, 0.5, { scale: 1.0 });
            break;
          case 'right':
            TweenMax.to(overlay, 0.5, { left: '100%' });
            TweenMax.to(image, 0.5, { scale: 1.0 });
            break;
          case 'top':
            TweenMax.to(overlay, 0.5, { top: '-100%' });
            TweenMax.to(image, 0.5, { scale: 1.0 });
            break;
          case 'bottom':
            TweenMax.to(overlay, 0.5, { top: '100%' });
            TweenMax.to(image, 0.5, { scale: 1.0 });
            break;
        }
      });
    }
  }

  closestEdge(x: number, y: number, width: number, height: number): string {
    const topEdgeDist = y;
    const bottomEdgeDist = height - y;
    const leftEdgeDist = x;
    const rightEdgeDist = width - x;

    const min = Math.min(
      topEdgeDist,
      bottomEdgeDist,
      leftEdgeDist,
      rightEdgeDist
    );

    switch (min) {
      case topEdgeDist:
        return 'top';
      case bottomEdgeDist:
        return 'bottom';
      case leftEdgeDist:
        return 'left';
      case rightEdgeDist:
        return 'right';
      default:
        return '';
    }
  }

  openCourseDetailsPage(courseName) {
    this.router.navigate([`/course-details/${courseName}`]);
  }
}
