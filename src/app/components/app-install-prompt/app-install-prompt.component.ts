import { Platform } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PwaService } from 'src/app/services/pwa.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  standalone: true,
  selector: 'app-install-prompt',
  imports: [CommonModule],
  templateUrl: './app-install-prompt.component.html',
  styleUrls: ['./app-install-prompt.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppInstallPromptComponent implements OnInit, OnDestroy {
  beforeInstallPromptHandler?: (event: BeforeInstallPromptEvent) => void;
  deferredPrompt: BeforeInstallPromptEvent | null = null;
  isPwa$: Observable<boolean>;
  isIosButNotPwa: boolean;
  isPwa: boolean;
  plat: boolean;
  userAgent = window.navigator.userAgent.toLowerCase();

  constructor(private pwaService: PwaService, private snackbarService: SnackbarService, public platform: Platform) {
    this.isPwa$ = this.pwaService.isPwa$;
    this.isPwa = this.isRunningAsPWA();
    this.isIosButNotPwa = this.isIOS() && !this.isRunningAsPWA();
    this.plat = this.isIOS();
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.beforeInstallPromptHandler = (event: BeforeInstallPromptEvent) => {
      console.log('beforeinstallprompt');

      // Prevent the mini-infobar from appearing
      event.preventDefault();
      this.deferredPrompt = event;
      this.pwaService.updateValue(true);
    };

    window.addEventListener('beforeinstallprompt', this.beforeInstallPromptHandler as EventListener);
  }

  ngOnDestroy() {
    window.removeEventListener('beforeinstallprompt', this.beforeInstallPromptHandler as EventListener);
    this.pwaService.updateValue(false);
  }

  promptInstall() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt(); // Show the install prompt
      this.deferredPrompt.userChoice.then(() => {
        this.deferredPrompt = null;
        this.pwaService.updateValue(false);
      });
    }
  }

  showIosInstructions() {
    this.snackbarService.showInfo("To install this web app on your device, tap the Menu button and then 'Add to Home Screen' button", 20000);
  }

  private isIOS(): boolean {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod|mac/.test(userAgent) || this.platform.IOS;
  }

  private isRunningAsPWA(): boolean {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isIOSStandalone = (navigator as any).standalone === true;
    const isFullscreen = window.innerHeight === screen.height;

    return isStandalone || isIOSStandalone || isFullscreen;
  }
}

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}
