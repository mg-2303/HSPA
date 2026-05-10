// alertify.service.ts
import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: "root",
})
export class AlertifyService {
  private alertify: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      import("alertifyjs").then((alertify) => {
        this.alertify = alertify.default || alertify;
      });
    }
  }

  private run(fn: (a: any) => void) {
    if (isPlatformBrowser(this.platformId) && this.alertify) {
      fn(this.alertify);
    }
  }

  success(message: string) {
    this.run((a) => a.success(message));
  }

  error(message: string) {
    this.run((a) => a.error(message));
  }

  warning(message: string) {
    this.run((a) => a.warning(message));
  }

  message(message: string) {
    this.run((a) => a.message(message));
  }

  confirm(message: string, okCallback: () => any) {
    this.run((a) =>
      a.confirm(message, (e: any) => {
        if (e) okCallback();
      }),
    );
  }
}
