import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/modules/shared/theme/theme.service';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { PapDialogComponent } from 'src/app/modules/shared/components/pap-dialog/pap-dialog.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private themeService: ThemeService,
    private utilityService: UtilityService,
    private $gaService: GoogleAnalyticsService,
    private dialog: MatDialog
  ) {}
  learningPhaseImg = 'sectionLight';

  ngOnInit(): void {
    this.$gaService.pageView('/', 'Home');
    gsap.registerPlugin(ScrollToPlugin);
    this.themeService.getActiveTheme.subscribe((res: string) => {
      this.learningPhaseImg =
        res === 'light_theme' ? 'sectionLight' : 'sectionDark';
    });

    setTimeout(() => {
      this.openDialog();
    }, 3000);

    this.utilityService.showFooterSet = true;
  }

  scrollToTarget(target: string) {
    this.$gaService.event(
      'scroll',
      'Page scroll',
      `Scrolled to ${target}`,
      target as any
    );
    gsap.to(window, { duration: 0.8, scrollTo: { y: `#${target}` } });
  }

  openUrl(url: any, type: string) {
    this.$gaService.event('click', 'Hyperlink', `${type} Url`, url);
    window.open(url, '_blank');
  }

  redirectToLogin() {
    window.location.href = environment.studentloginURL;
  }

  openDialog() {
    const dialogRef = this.dialog.open(PapDialogComponent, {
      width: 'clamp(30rem, 60vw, 50rem)',
      panelClass: ['pap-container','animate__animated','animate__bounceInDown']
    });

    dialogRef.afterOpened().subscribe(res => {
      setTimeout(() => {
        document.getElementsByClassName('pap-container')[0].classList.remove('animate__animated');
        document.getElementsByClassName('pap-container')[0].classList.remove('animate__bounceInDown');
      }, 10);
    })
  }
}
