import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AvatarHelper } from './parts/avatar';
import { AvatarOptions } from './avatar-options';

@Component({
  selector: 'avatar',
  template: `
    <div id="svgid" [innerHtml]="getSvg()"></div>
  `,
  styles: []
})
export class AvatarAngularKapibaraComponent implements OnInit {
  @Input() options: AvatarOptions;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getSvg() {
    return this.sanitizer.bypassSecurityTrustHtml(AvatarHelper.getSvg(this.options));
  }

  onDownloadPNG = (fileName: string) => {
    let svgNode = document.getElementById('svgid');
    let canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 408;
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let anyWindow = window as any;
    let DOMURL = anyWindow.URL || anyWindow.webkitURL || window;
    let data = svgNode.innerHTML;
    let svg = new Blob([data], { type: 'image/svg+xml' });
    let img = new Image(canvas.width, canvas.height);
    let url = DOMURL.createObjectURL(svg);
    img.onload = () => {
      ctx.save();
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.restore();
      DOMURL.revokeObjectURL(url);

      let a = document.createElement('a');
      a.href = canvas.toDataURL('image/png');
      a.download = fileName;
      a.click();
    };
    img.src = url;
  };
}

