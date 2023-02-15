import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import {ModalDismissReasons, NgbModal, NgbModalOptions} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  modal = false;
  closeResult: string;

  constructor(@Inject(DOCUMENT) private document: Document,
              private modalService: NgbModal) {}

  open(content, options?: NgbModalOptions): void {

    const modalRef = this.modalService.open(content, {...options, ariaLabelledBy: 'modal-basic-title'});

    // workaround for iOS scroll that allows scroll in modal body
    const contentBody = document.getElementsByTagName('ngb-modal-window')[0];
    modalRef.result.then((result) => {
      clearAllBodyScrollLocks();
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      clearAllBodyScrollLocks();
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    disableBodyScroll(contentBody);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
