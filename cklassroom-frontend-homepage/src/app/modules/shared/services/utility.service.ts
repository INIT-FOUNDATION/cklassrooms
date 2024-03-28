import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from "rxjs";
import { Observable } from "rxjs";


export enum NOTIFICATION_EVENTS {
  CAM_TURNED_OFF = 'CAM_TURNED_OFF',
  CAM_TURNED_ON = 'CAM_TURNED_ON',
  MIC_MUTED = 'MIC_MUTED',
  MIC_UNMUTED = 'MIC_UNMUTED',
  MESSAGE = 'MESSAGE',
  SCREEN_SHARE_STOPPED = 'SCREEN_SHARE_STOPPED',
  SCREEN_SHARE_STARTED = 'SCREEN_SHARE_STARTED',
  MUTE_REMOTE_USER = 'MUTE_REMOTE_USER',
  MEETING_ENDED = 'MEETING_ENDED',
  RECORDING_STARTED = 'RECORDING_STARTED',
  RECORDING_PAUSED = 'RECORDING_PAUSED',
  RECORDING_RESUMED = 'RECORDING_RESUMED',
  LIVE_TIMER = 'LIVE_TIMER',
  INVITE_TO_MAIN_MEETING = 'INVITE_TO_MAIN_MEETING',
  PROJECTION_STARTED = 'PROJECTION_STARTED',
  PROJECTION_STOPPED = 'PROJECTION_STOPPED',
  PROJECTION_CONTROLS_PLAY = 'PROJECTION_CONTROLS_PLAY',
  PROJECTION_CONTROLS_PAUSE = 'PROJECTION_CONTROLS_PAUSE',
  PROJECTION_CONTROLS_SEEK = 'PROJECTION_CONTROLS_SEEK',
}

export enum WEBRTC_ADAPTOR_EVENTS {
  INITIALIZED = 'initialized',
  STREAM_INFORMATION = 'streamInformation',
  JOINED_THE_ROOM = 'joinedTheRoom',
  NEW_TRACK_AVAILABLE = 'newTrackAvailable',
  PLAY_STARTED = 'play_started',
  PLAY_FINISHED = 'play_finished',
  PUBLISH_STARTED = 'publish_started',
  PUBLISH_FINISHED = 'publish_finished',
  SCREEN_SHARE_SUPPORTED = 'browser_screen_share_supported',
  SCREEN_SHARE_STOPPED = 'screen_share_stopped',
  ROOM_INFORMATION = 'roomInformation',
  CLOSED = 'closed',
  PONG = 'pong',
  ICE_CONNECTION_STATE_CHANGED = 'ice_connection_state_changed',
  UPDATED_STATS = 'updated_stats',
  DATA_CHANNEL_OPENED = 'data_channel_opened',
  DATA_CHANNEL_CLOSED = 'data_channel_closed',
  DATA_RECEIVED = 'data_received',
  AVAILABLE_DEVICES = 'available_devices',
  GOT_SOUND_LIST = 'gotSoundList',
  SESSION_RESTORED = 'session_restored',
  LEAVED_THE_ROOM = 'leavedTheRoom',
  SPEAKING_BUT_MUTED = 'speaking_but_muted'
}


export enum JOIN_ROOM_MODES {
  MCU = 'mcu',
  MULTI_TRACK = 'multitrack'
}
@Injectable({providedIn:'root'})
export class UtilityService {
  meetingDetails;
  private showHeader: BehaviorSubject<boolean>;
  showHeader$: Observable<boolean>;

  private showScrollToTop: BehaviorSubject<boolean>;
  showScrollToTop$: Observable<boolean>;

  private showFooter: BehaviorSubject<boolean>;
  showFooter$: Observable<boolean>;

  private showHeaderClass: BehaviorSubject<boolean>;
  showHeaderClass$: Observable<boolean>;


  private showHeaderLiveTimer: BehaviorSubject<number>;
  showHeaderLiveTimer$: Observable<number>;


  private currentMeetingIsLiveStream: BehaviorSubject<boolean>;
  currentMeetingIsLiveStream$: Observable<boolean>;

  private setLiveCountDownTimer: BehaviorSubject<string>;
  setLiveCountDownTimer$: Observable<string>;


  private startListeningChannel: BehaviorSubject<string>;
  startListeningChannel$: Observable<string>;

  private customLogoCDNForParticipants: BehaviorSubject<string>;
  customLogoCDNForParticipants$: Observable<string>;

  private customPreviewBannerCDNForParticipants: BehaviorSubject<string>;
  customPreviewBannerCDNForParticipants$: Observable<string>;

  private customMeetingBannerCDNForParticipants: BehaviorSubject<string>;
  customMeetingBannerCDNForParticipants$: Observable<string>;

  private customMobileBannerCDNForParticipants: BehaviorSubject<string>;
  customMobileBannerCDNForParticipants$: Observable<string>;

  private showVcContainer = new BehaviorSubject<boolean>(false);
  showVcContainer$: Observable<boolean>;

  
  private showContactUs: BehaviorSubject<boolean>;
  showContactUs$: Observable<boolean>;

  constructor(private toasterService: ToastrService) {
    this.showHeader = new BehaviorSubject(true);
    this.showHeader$ = this.showHeader.asObservable();

    this.showScrollToTop = new BehaviorSubject(true);
    this.showScrollToTop$ = this.showScrollToTop.asObservable();

    this.showFooter = new BehaviorSubject(true);
    this.showFooter$ = this.showFooter.asObservable();

    this.showHeaderClass = new BehaviorSubject(false);
    this.showHeaderClass$ = this.showHeaderClass.asObservable();

    this.showHeaderLiveTimer = new BehaviorSubject(0);
    this.showHeaderLiveTimer$ = this.showHeaderLiveTimer.asObservable();

    this.setLiveCountDownTimer = new BehaviorSubject("00:00:00");
    this.setLiveCountDownTimer$ = this.setLiveCountDownTimer.asObservable();

    this.currentMeetingIsLiveStream = new BehaviorSubject(false);
    this.currentMeetingIsLiveStream$ = this.currentMeetingIsLiveStream.asObservable();

    this.startListeningChannel = new BehaviorSubject(null);
    this.startListeningChannel$ = this.startListeningChannel.asObservable();

    this.customLogoCDNForParticipants = new BehaviorSubject(null);
    this.customLogoCDNForParticipants$ = this.customLogoCDNForParticipants.asObservable();

    this.customPreviewBannerCDNForParticipants = new BehaviorSubject(null);
    this.customPreviewBannerCDNForParticipants$ = this.customPreviewBannerCDNForParticipants.asObservable();

    this.customMeetingBannerCDNForParticipants = new BehaviorSubject(null);
    this.customMeetingBannerCDNForParticipants$ = this.customMeetingBannerCDNForParticipants.asObservable();

    this.customMobileBannerCDNForParticipants = new BehaviorSubject(null);
    this.customMobileBannerCDNForParticipants$ = this.customMobileBannerCDNForParticipants.asObservable();

    this.showVcContainer$ = this.showVcContainer.asObservable();

    this.showContactUs = new BehaviorSubject(false);
    this.showContactUs$ = this.showContactUs.asObservable();

    
  }

  showSuccessMessage(msg) {
    this.toasterService.success(msg);
  }

  showErrorMessage(msg) {
    this.toasterService.error(msg);
  }

  showInfoMessage(msg) {
    this.toasterService.info(msg);
  }

  set showHeaderSet(flag) {
    this.showHeader.next(flag);
  }

  set showScrollToTopSet(flag) {
    this.showScrollToTop.next(flag);
  }

  set showFooterSet(flag) {
    this.showFooter.next(flag);
  }

  set showHeaderClassSet(flag) {
    this.showHeaderClass.next(flag);
  }

  set setHeaderTimer(data) {
    this.showHeaderLiveTimer.next(data);
  }

  set setLiveCountdownTimer(data) {
    this.setLiveCountDownTimer.next(data);
  }

  set setCurrentRunningMeetingIsLive(data) {
    this.currentMeetingIsLiveStream.next(data);
  }

  set setChannelName(data) {
    this.startListeningChannel.next(data);
  }

  set setCustomLogo(data) {
    this.customLogoCDNForParticipants.next(data);
  }

  set setCustomMeetingBanner(data) {
    this.customMeetingBannerCDNForParticipants.next(data);
  }
  set setCustomMobileBanner(data) {
    this.customMobileBannerCDNForParticipants.next(data);
  }

  set setCustomBannerPreview(data) {
    this.customPreviewBannerCDNForParticipants.next(data);
  }

  addNode(data: any) {
    this.showVcContainer.next(data);
  }

  b64toBlob = (b64Data, contentType='', sliceSize=512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, {type: contentType});
    return blob;
  }
  
  set showContactUsScreen(flag) {
    this.showContactUs.next(flag);
  }
}
