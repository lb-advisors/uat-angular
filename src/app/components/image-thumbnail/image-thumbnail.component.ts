import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  standalone: true,
  selector: 'app-image-thumbnail',
  templateUrl: './image-thumbnail.component.html',
  styleUrl: './image-thumbnail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageThumbnailComponent {
  @Input() imageUrl: string = '';
  @Input() title: string | null = ' ';

  modalRef!: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal(template: string | TemplateRef<unknown>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'modal-lg' }));
  }
}
